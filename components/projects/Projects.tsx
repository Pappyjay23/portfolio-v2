"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { PROJECTS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
	const router = useRouter();

	const sectionRef = useRef(null);
	const headerRef = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
				},
			});

			tl.from(headerRef.current, {
				y: 50,
				opacity: 0,
				duration: 1.2,
				ease: "power4.out",
			})
				.from(
					".project-card",
					{
						y: 100,
						opacity: 0,
						scale: 0.95,
						duration: 1.5,
						stagger: 0.2,
						ease: "expo.out",
					},
					"-=0.4",
				)
				.from(
					".view-all-btn",
					{
						y: 30,
						opacity: 0,
						scale: 0.95,
						duration: 1.5,
						stagger: 0.2,
						ease: "expo.out",
					},
					"<0.6",
				);
		}, sectionRef);

		return () => ctx.revert();
	}, [{ container: sectionRef }]);

	useScrollSpy("projects");
	return (
		<section
			ref={sectionRef}
			id='projects'
			className='bg-background text-foreground py-12 px-6 md:px-12'>
			<div className='max-w-300 mx-auto'>
				{/* Header */}
				<div
					ref={headerRef}
					className='flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-8'>
					<div className='space-y-4'>
						<div className='flex items-center gap-2'>
							<div className='w-2 h-2 rounded-full bg-foreground animate-pulse' />
							<span className='text-[10px] uppercase tracking-[0.3em] font-bold'>
								Selected Works
							</span>
						</div>
						<h2 className='text-4xl lg:text-6xl font-medium tracking-tight leading-[1.2]'>
							Projects <br /> & Case Studies
						</h2>
					</div>
					<p className='max-w-75 text-sm text-gray-500 leading-relaxed pb-2'>
						A curated selection of product experiences balancing design,
						performance, and scalability.
					</p>
				</div>

				{/* The Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16'>
					{PROJECTS.slice(0, 3).map((project, index) => (
						<div
							onClick={() =>
								router.push(`/projects/${project.title.toLowerCase()}`)
							}
							key={index}
							className='project-card group cursor-pointer'>
							{/* Image Container */}
							<div className='relative aspect-square w-full overflow-hidden bg-foreground/5 rounded-[15px] md:rounded-[25px] mb-6'>
								<div
									className='absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shimmer'
									style={{ backgroundSize: "200% 100%" }}
								/>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className='object-cover transition-all duration-700 group-hover:scale-105'
								/>

								{/* Minimal Overlay icon */}
								<div className='absolute inset-0 bg-linear-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									onClick={(e) => e.stopPropagation()}
									className='absolute bottom-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500  hover:text-foreground -translate-y-2 group-hover:translate-y-0 flex items-center gap-2 lg:gap-0 lg:hover:gap-2 group/btn'>
									<span className='text-[10px] font-bold capitalize max-w-25 lg:max-w-0 overflow-hidden group-hover/btn:max-w-25 transition-all duration-500 ease-in-out whitespace-nowrap'>
										Live Demo
									</span>
									<FiArrowUpRight
										size={15}
										className='drop-shadow-lg group-hover/btn:rotate-45 transition-all duration-500 ease-in-out'
									/>
								</a>
							</div>

							{/* Typography */}
							<div className='space-y-1'>
								<div className='flex justify-between items-center'>
									<h3 className='text-xl font-medium tracking-tight'>
										{project.title}
									</h3>
									<span className='text-[10px] text-gray-400 font-mono'>
										/ 0{index + 1}
									</span>
								</div>
								<p className='text-sm text-gray-600 font-light'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2 pt-2'>
									{project.tech.map((item, i) => (
										<span
											key={i}
											className='text-[9px] uppercase tracking-[0.15em] font-bold text-gray-400 px-2 py-1 transition-all duration-500'>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className='mt-10 pt-6 border-t border-foreground/5 flex justify-center'>
					<Link
						href='/projects'
						className='view-all-btn group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer'>
						<span>View all projects</span>

						<span className='relative flex items-center'>
							<span className='w-4 h-px bg-white transition-all duration-500 group-hover:w-6' />
							<FiArrowRight
								className='absolute right-0 opacity-100 lg:opacity-0 translate-x-2 lg:-translate-x-1 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500'
								size={14}
							/>
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Projects;
