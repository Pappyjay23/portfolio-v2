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
	const isTouch = ScrollTrigger.isTouch === 1;

	useLayoutEffect(() => {
		// Initialize Smoother
		const smoother = ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			// smooth: isTouch ? 0 : 2,
			smooth: 2,
			smoothTouch: 0.6,
			effects: !isTouch,
			ignoreMobileResize: true,
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
