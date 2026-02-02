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

	useLayoutEffect(() => {
		// Initialize Smoother
		const smoother = ScrollSmoother.create({
			wrapper: wrapperRef.current,
			content: contentRef.current,
			smooth: 2,
			effects: true,
		});

		return () => {
			smoother.kill();
		};
	}, []);

	// Recalculate page height on route change
	useEffect(() => {
		ScrollTrigger.refresh();
		const smoother = ScrollSmoother.get();
		if (smoother) smoother.scrollTop(0);
	}, [pathname]);

	return (
		<div id='smooth-wrapper' ref={wrapperRef}>
			<div id='smooth-content' ref={contentRef}>
				{children}
			</div>
		</div>
	);
}
