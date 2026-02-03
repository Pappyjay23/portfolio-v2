"use client";

import { EXPERIENCE } from "@/lib/constants";
import gsap from "gsap";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef, useState } from "react";

const Experience = () => {
	const [expandedId, setExpandedId] = useState<string | null>(null);
	const containerRef = useRef(null);

	const toggleAccordion = (id: string) => {
		const isOpening = expandedId !== id;
		const content = document.getElementById(`content-${id}`);
		const icon = document.getElementById(`icon-${id}`);

		// Close current if any
		if (expandedId) {
			const currentContent = document.getElementById(`content-${expandedId}`);
			const currentIcon = document.getElementById(`icon-${expandedId}`);
			gsap.to(currentContent, {
				height: 0,
				opacity: 0,
				duration: 0.5,
				ease: "power3.inOut",
			});
			gsap.to(currentIcon, { rotate: 0, duration: 0.4 });
		}

		// Open new
		if (isOpening) {
			setExpandedId(id);
			gsap.fromTo(
				content,
				{ height: 0, opacity: 0 },
				{ height: "auto", opacity: 1, duration: 0.6, ease: "power3.out" },
			);
			gsap.to(icon, { rotate: 45, duration: 0.4 });

			// Subtle stagger for the list items inside
			gsap.fromTo(
				`#content-${id} li`,
				{ x: -10, opacity: 0 },
				{ x: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 0.4 },
			);
		} else {
			setExpandedId(null);
		}
	};

	return (
		<section
			ref={containerRef}
			id='experience'
			className='bg-background text-foreground py-12 px-6 md:px-12'>
			<div className='max-w-300 mx-auto'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6'>
					<div>
						<div className='flex items-center gap-2 mb-2'>
							<div className='w-2 h-2 rounded-full bg-foreground animate-pulse' />
							<span className='text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400'>
								History
							</span>
						</div>
						<h2 className='text-4xl lg:text-6xl font-medium tracking-tight'>
							Experience <span className='text-gray-500'>Journal</span>
						</h2>
					</div>

					<a
						href='/Peace_Jinadu-Paul_Resume.pdf'
						target='_blank'
						rel="noopener noreferrer"
						className='group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-white/10 pb-2 hover:border-white transition-all duration-300 mb-2 w-fit'>
						View Resume
						<ArrowUpRight className='w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
					</a>
				</div>

				<div className='border-t border-white/5'>
					{EXPERIENCE.map((item) => (
						<div key={item.id} className='border-b border-white/5'>
							<button
								onClick={() => toggleAccordion(item.id)}
								className='w-full py-7 flex flex-col md:flex-row md:items-center justify-between text-left group cursor-pointer'>
								<div className='flex flex-col gap-1'>
									<span className='text-[10px] uppercase tracking-widest text-gray-500 font-bold'>
										{item.period}
									</span>
									<h3 className='text-2xl md:text-3xl font-medium group-hover:text-gray-400 transition-colors'>
										{item.company}
									</h3>
								</div>

								<div className='flex items-center justify-between md:justify-end gap-12 mt-4 md:mt-0'>
									<div className='flex flex-col md:items-end gap-1'>
										<span className='text-sm md:text-base font-light text-gray-200 tracking-wide'>
											{item.role}
										</span>
										<span className='text-[10px] uppercase tracking-wide text-gray-600 font-bold'>
											{item.location}
										</span>
									</div>

									<div id={`icon-${item.id}`} className='hidden md:block'>
										<Plus className='w-6 h-6 text-gray-600' />
									</div>
								</div>
							</button>

							{/* Expanded Content */}
							<div
								id={`content-${item.id}`}
								className='overflow-hidden h-0 opacity-0'>
								<div className='pb-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
									<div className='md:col-span-1'>
										<p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
											{item.description}
										</p>
									</div>
									<div className='md:col-span-2'>
										<ul className='space-y-4'>
											{item.details.map((detail, index) => (
												<li
													key={index}
													className='flex gap-4 text-xs md:text-sm text-gray-300 leading-relaxed opacity-0'>
													<span className='text-gray-600'>—</span>
													{detail}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
