"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
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

		// Initialize Smoother
		const smoother = ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			smooth: isTouch ? 1.2 : 1.6,
			smoothTouch: isTouch ? 1.2 : 0.6,
			speed: isTouch ? 0.9 : 1,
			effects: true,
			ignoreMobileResize: false,
			normalizeScroll: true,
		});

		return () => {
			smoother.kill();
		};
	}, []);

	// Recalculate page height on route change
	useEffect(() => {
		const smoother = ScrollSmoother.get();
		if (smoother) {
			smoother.scrollTop(0);
			// Give the browser 100ms to settle the height before refreshing
			setTimeout(() => {
				ScrollTrigger.refresh();
			}, 100);
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
