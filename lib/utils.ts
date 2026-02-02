import { clsx, type ClassValue } from "clsx";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const globalState = {
	hasPlayedIntro: false,
	activeSection: "hero",
};

export const handleScroll = (to: string) => {
	const smoother = ScrollSmoother.get();
	if (smoother) {
		const target = `#${to}`;
		if (document.querySelector(target)) {
			smoother.scrollTo(target, true, "top 60px");
		}
	}
};
