"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline();

		tl.from(".error-code", {
			y: 50,
			opacity: 0,
			duration: 1.2,
			ease: "power4.out",
		})
			.from(
				".error-text",
				{
					y: 20,
					opacity: 0,
					duration: 1,
					ease: "power3.out",
				},
				"-=0.8",
			)
			.from(
				".back-home",
				{
					scale: 0.9,
					opacity: 0,
					duration: 0.8,
					ease: "back.out(1.7)",
					onComplete: () => {
						gsap.set(".back-home", { clearProps: "transform" });
					},
				},
				"-=0.5",
			);
	}, []);

	return (
		<main
			ref={containerRef}
			className='bg-background min-h-screen flex flex-col items-center justify-center px-6 text-center'>
			{/* Background Decorative Element */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1'>
				<h1 className='error-code text-[20vw] font-bold text-white/2 select-none leading-none'>
					404
				</h1>
			</div>

			<div className='error-text relative z-10'>
				<span className='text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-4 block'>
					System Status — 404
				</span>
				<h2 className='text-3xl md:text-5xl font-medium tracking-tighter mb-8 leading-tight'>
					You’ve reached the <br /> edge of this workspace.
				</h2>
			</div>
			<div className='flex justify-center relative z-10'>
				<Link
					href='/'
					className='back-home w-fit group flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full hover:bg-white/1 text-foreground active:scale-95 transition-transform duration-500 ease-in-out'>
					<FiArrowLeft className='group-hover:-translate-x-1 transition-transform' />
					<span className='text-[10px] uppercase tracking-[0.2em] font-bold'>
						Return to Index
					</span>
				</Link>
			</div>

			{/* Subtle Footer Detail */}
			<div className='absolute bottom-12 text-[9px] uppercase tracking-widest text-gray-600 font-medium'>
				Status: 404 — Not Found
			</div>
		</main>
	);
};

export default NotFound;
