"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollSpy } from "@/hooks/useScrollSpy";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const sectionRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
				},
			});

			tl.from(".about-label", {
				x: -20,
				opacity: 0,
				duration: 1,
				ease: "power4.out",
			})
				.from(
					".about-title",
					{
						y: 50,
						opacity: 0,
						duration: 1.2,
						ease: "expo.out",
					},
					"-=0.8",
				)
				.from(
					".about-paragraph",
					{
						y: 30,
						opacity: 0,
						duration: 1,
						stagger: 0.2,
						ease: "power3.out",
					},
					"-=1",
				);
		},
		{ scope: sectionRef },
	);

	useScrollSpy("about");
	return (
		<section
			ref={sectionRef}
			id='about'
			className='bg-background text-foreground py-12 px-6 md:px-12'>
			<div className='max-w-300 mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8'>
				{/* Left Column: Label */}
				<div className='md:col-span-4'>
					<div className='about-label flex items-center gap-3 sticky top-24'>
						<span className='w-8 h-px bg-gray-700' />
						<span className='text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300'>
							The Philosophy
						</span>
					</div>
				</div>

				{/* Right Column: Content */}
				<div className='md:col-span-8 space-y-12'>
					<h2 className='about-title text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1]'>
						I bridge the gap between <br />
						<span className='text-gray-500 italic mr-2'>
							visionary design
						</span>{" "}
						and <br />
						scalable engineering.
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-13'>
						<p className='about-paragraph text-gray-400 leading-relaxed text-xs md:text-sm font-light'>
							With <strong>over four years of experience</strong> architecting
							production-ready applications, I specialize in bridging the gap
							between visionary design and technical execution. My work centers
							on <strong>functional aesthetics</strong>—crafting interfaces that
							are as structurally sound as they are visually compelling. I
							believe that elite engineering should be felt, not seen,
							manifesting in fluid motion, accessible patterns, and
							architectures that scale effortlessly with the product.
						</p>
						<p className='about-paragraph text-gray-400 leading-relaxed text-xs md:text-sm font-light'>
							Leveraging a deep expertise in{" "}
							<strong>
								React, TypeScript, and modern animation primitives
							</strong>
							, I transform complex requirements into intuitive digital
							experiences. From high-performance task management systems to
							immersive 3D storytelling, I maintain a
							<strong> meticulous eye for detail</strong> that ensures design
							systems are translated into clean, maintainable code—honoring the
							intent of every pixel while optimizing for real-world performance.
						</p>
					</div>

					{/* Subtle Stat/Value Row */}
					<div className='about-paragraph pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5'>
						<div>
							<p className='text-[9px] uppercase tracking-widest text-gray-600 mb-1'>
								Experience
							</p>
							<p className='text-xs md:text-sm font-medium'>
								4+ years shipping products
							</p>
						</div>

						<div>
							<p className='text-[9px] uppercase tracking-widest text-gray-600 mb-1'>
								Workflow
							</p>
							<p className='text-xs md:text-sm font-medium'>
								Design-led engineering
							</p>
						</div>

						<div>
							<p className='text-[9px] uppercase tracking-widest text-gray-600 mb-1'>
								Systems
							</p>
							<p className='text-xs md:text-sm font-medium'>
								Reusable UI architecture
							</p>
						</div>

						<div>
							<p className='text-[9px] uppercase tracking-widest text-gray-600 mb-1'>
								Focus
							</p>
							<p className='text-xs md:text-sm font-medium'>
								Performance & longevity
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
