"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { STACK_CATEGORIES } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const Stack = () => {
	const sectionRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
				},
			});

			tl.from(".stack-title", {
				y: 30,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			}).from(
				".stack-category",
				{
					y: 40,
					opacity: 0,
					duration: 0.8,
					stagger: 0.15,
					ease: "power2.out",
				},
				"-=0.6",
			);
		},
		{ scope: sectionRef },
	);

	useScrollSpy("stack");

	return (
		<section
			ref={sectionRef}
			id='stack'
			className='bg-background text-foreground py-24 px-6 md:px-12'>
			<div className='max-w-300 mx-auto'>
				<div className='flex flex-col mb-10'>
					<div className='flex items-center gap-2 mb-4'>
						<div className='w-2 h-2 rounded-full bg-foreground animate-pulse' />
						<span className='text-[10px] uppercase tracking-[0.3em] font-bold'>
							Toolkit
						</span>
					</div>
					<h2 className='stack-title text-4xl md:text-6xl font-medium tracking-tight'>
						Technical <span className='text-gray-500'>Ecosystem</span>
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background border border-white/5'>
					{STACK_CATEGORIES.map((category, i) => (
						<div
							key={i}
							className='stack-category bg-background p-6 md:p-8 group'>
							<h3 className='text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold text-center md:text-left'>
								{category.title}
							</h3>

							{/* Tools Container */}
							<div className='grid grid-cols-2 md:grid-cols-1 gap-y-6 gap-x-4'>
								{category.tools.map((tool, j) => (
									<div
										key={j}
										className={`flex items-center gap-3 md:gap-4 group/item cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-1 even:hover:-translate-x-1 md:even:hover:translate-x-1 justify-start odd:flex-row even:flex-row-reverse even:text-right md:even:flex-row md:even:text-left md:justify-start`}>
										<div className='text-xl text-gray-600 transition-all duration-500 ease-in-out group-hover/item:text-white group-hover/item:scale-110 group-hover/item:rotate-360 shrink-0'>
											{tool.icon}
										</div>

										<span className='flex-1 min-w-0 text-xs md:text-sm font-light text-gray-400 transition-colors duration-300 group-hover/item:text-white leading-tight wrap-break-word'>
											{tool.name}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stack;
