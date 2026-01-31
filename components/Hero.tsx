"use client";

import { useState, useEffect } from "react";
import DotGrid from "@/components/DotGrid";

const Hero = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 100);
	}, []);

	return (
		<section className='relative min-h-screen py-5 px-2 flex items-center justify-center bg-background text-foreground'>
			<div className='absolute inset-0 z-1'>
				<DotGrid
					dotSize={5}
					gap={5}
					baseColor='#000000'
					activeColor='#4c4c4c'
					proximity={50}
					shockRadius={250}
					shockStrength={5}
					resistance={750}
					returnDuration={1.5}
				/>
			</div>
			{/* Huge background name - outline style */}
			<div className='absolute inset-0 z-2 flex items-center justify-center overflow-hidden'>
				<h2
					className={`text-[10rem] md:text-[15vw] lg:text-[20vw] font-bold tracking-tighter leading-none text-transparent text-center transition-all duration-1000 ${
						isVisible
							? "opacity-100 scale-100 animate-[strokePulse_8s_ease-in-out_infinite]"
							: "opacity-0 scale-95"
					}`}
					style={{
						WebkitTextStrokeWidth: "1px",
					}}>
					Peace Jinadu-Paul
				</h2>
			</div>

			{/* Foreground content */}
			<div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
				{/* Role badge */}
				<div
					className={`inline-block mb-8 transition-all duration-1000 delay-300 backdrop-blur-md ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					<div className='px-4 py-2 border border-gray-700 rounded-full'>
						<p className='text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400'>
							Frontend Engineer
						</p>
					</div>
				</div>

				{/* Value statement */}
				<h1
					className={`text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 leading-tight transition-all duration-1000 delay-500 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					Building elegant solutions
					<br className='hidden md:block' />{" "}
					for complex problems
				</h1>

				{/* Supporting text */}
				<p
					className={`text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-9 md:mb-12 transition-all duration-1000 delay-700 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					Specialized in React, TypeScript, and modern web technologies to
					create performant, accessible, and beautiful user experiences.
				</p>

				{/* CTAs */}
				<div
					className={`flex gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					<button className='cursor-pointer group px-6 py-3 rounded-full bg-white border-2 text-black font-semibold capitalize tracking-normal text-[10px] md:text-xs transition-all duration-500 ease-in-out hover:bg-gray-200 relative overflow-hidden active:scale-95'>
						<span className='relative z-10'>View My Work</span>
						<div className='absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
					</button>

					<button className='cursor-pointer px-6 py-3 rounded-full border-2 border-white text-white font-semibold capitalize tracking-normal text-[10px] md:text-xs hover:bg-white hover:text-black transition-all duration-500 ease-in-out active:scale-95'>
						Get In Touch
					</button>
				</div>

				{/* Tech stack pills */}
				<div
					className={`mt-10 md:mt-12 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-1000 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					{["React", "TypeScript", "Next.js", "Tailwind", "Node.js"].map(
						(tech) => (
							<span
								key={tech}
								className='px-4 py-2 text-[10px] md:text-xs uppercase tracking-wider text-gray-500 border border-gray-800 rounded-full hover:border-gray-600 hover:text-gray-300 transition-all duration-300 backdrop-blur-md'>
								{tech}
							</span>
						),
					)}
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				className={`[@media(max-width:340px)]:hidden absolute z-3 bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}>
				<div className='w-5 h-9 border border-white/20 rounded-full flex justify-center p-1'>
					{/* The "Wheel" animating down */}
					<div className='w-1 h-1 bg-white rounded-full animate-mouse-wheel' />
				</div>
				<span className='text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-gray-600'>
					Scroll to Explore
				</span>
			</div>
		</section>
	);
};

export default Hero;
