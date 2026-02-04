"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Added this
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
}

export default function SmoothScrollProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const isTouch =
		typeof window !== "undefined" &&
		(navigator.maxTouchPoints > 0 ||
			"ontouchstart" in window ||
			ScrollTrigger.isTouch);

	useLayoutEffect(() => {
		if (!wrapperRef.current || !contentRef.current) return;

		const prev = ScrollSmoother.get();
		if (prev) prev.kill();

		const smoother = ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			smooth: isTouch ? 1.2 : 1.6,
			smoothTouch: isTouch ? 1.2 : 0.6,
			speed: isTouch ? 0.9 : 1,
			effects: true,
			ignoreMobileResize: true,
			normalizeScroll: false,
		});

		return () => {
			smoother.kill();
		};
	}, []);

	// Handle Route Changes
	useEffect(() => {
		const smoother = ScrollSmoother.get();
		if (smoother) {
			smoother.paused(true);
			smoother.scrollTop(0);
			smoother.paused(false);

			const timer = setTimeout(() => {
				ScrollTrigger.refresh();
			}, 500); // Increased slightly for mobile hydration stability

			return () => clearTimeout(timer);
		}
	}, [pathname]);

	return (
		<div id='smooth-wrapper' ref={wrapperRef}>
			<div id='smooth-content' ref={contentRef}>
				{children}
			</div>
		</div>
	);
}
