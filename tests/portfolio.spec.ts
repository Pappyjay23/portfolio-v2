import { test, expect } from "@playwright/test";

test("Deep stress test for iPhone Client-Side Exception", async ({ page }) => {
	// Capture ALL browser errors
	const logs: string[] = [];
	page.on("console", (msg) => {
		if (msg.type() === "error") logs.push(msg.text());
	});
	page.on("pageerror", (exception) => {
		console.log(`🔥 CRITICAL EXCEPTION: ${exception.message}`);
	});

	// 1. Visit Home
	await page.goto("/");

	// 2. Wait for GSAP/Hydration (Give it a few seconds to 'settle')
	await page.waitForTimeout(2000);

	// 3. Stress the Scroll (The #1 cause for iOS crashes)
	// This scrolls to the bottom and back up to trigger ScrollTrigger/Lenis
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await page.waitForTimeout(1000);
	await page.evaluate(() => window.scrollTo(0, 0));

	// 4. Navigate to a Project (Using a more robust selector)
	// If 'OrbitDesk' is a link or has that text, this will find it.
	await page.pause();
	const projectLink = page.getByText("OrbitDesk", { exact: false }).first();
	await expect(projectLink).toBeVisible();

	// Click and wait for the "Client Side" navigation
	await projectLink.click();

	// 5. Verify the dynamic route loaded
	await expect(page).not.toHaveURL("/");
	await page.waitForLoadState("networkidle");

	// 6. Check if we hit any errors during the session
	if (logs.length > 0) {
		console.log("--- FOUND ERRORS ---");
		logs.forEach((err) => console.log("❌", err));
	}
});
