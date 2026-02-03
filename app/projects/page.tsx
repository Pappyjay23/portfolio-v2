"use client";

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
	const containerRef = useRef(null);

	useGSAP(
		() => {
			gsap.from(".projects-header", {
				y: 40,
				opacity: 0,
				duration: 1.2,
				stagger: 0.25,
				ease: "power4.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
				},
			});
			gsap.from(".project-item", {
				y: 80,
				opacity: 0,
				duration: 1.2,
				stagger: 0.25,
				ease: "power4.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<main
			ref={containerRef}
			className='py-20 md:py-24 px-6 md:px-12 bg-background min-h-svh'>
			<div className='max-w-300 mx-auto'>
				{/* Header */}
				<header className='projects-header mb-10 md:mb-16 max-w-3xl'>
					<div className='flex items-center gap-2 mb-4'>
						<div className='w-2 h-2 rounded-full bg-foreground animate-pulse' />
						<span className='text-[10px] uppercase tracking-[0.3em] font-bold'>
							Full Archive
						</span>
					</div>

					<h1 className='text-4xl lg:text-6xl font-medium tracking-tight leading-[1.2] mb-4'>
						Projects <br /> & Case Studies
					</h1>

					<p className='text-sm text-gray-500 leading-relaxed max-w-xl'>
						A focused collection of product work—spanning concept, design, and
						engineering.
					</p>
				</header>

				{/* Projects */}
				<div className='space-y-24 md:space-y-24'>
					{PROJECTS.map((project, index) => (
						<article
							key={project.title}
							className={`project-item flex flex-col ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							} gap-10 md:gap-24 items-center`}>
							{/* Image */}
							<div
								onClick={() =>
									router.push(`/projects/${project.title.toLowerCase()}`)
								}
								className='group relative w-full md:w-3/5 aspect-4/3 overflow-hidden rounded-[15px] md:rounded-[25px] bg-foreground/5 cursor-pointer'>
								<div
									className='absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shimmer'
									style={{ backgroundSize: "200% 100%" }}
								/>
								<Image
									src={project.backupImage || project.image}
									alt={project.title}
									width={1200}
									height={800}
									className='object-cover aspect-4/3 transition-transform duration-1000 ease-out group-hover:scale-105 relative z-10'
								/>

								{/* Overlay */}
								<div className='absolute z-15 inset-0 bg-linear-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

								{/* Corner affordance */}
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									onClick={(e) => e.stopPropagation()}
									className='absolute z-20 bottom-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500  hover:text-foreground -translate-y-2 group-hover:translate-y-0 flex items-center gap-2 lg:gap-0 lg:hover:gap-2 group/btn'>
									<span className='text-[10px] font-bold capitalize max-w-25 lg:max-w-0 overflow-hidden group-hover/btn:max-w-25 transition-all duration-500 ease-in-out whitespace-nowrap'>
										Live Demo
									</span>
									<FiArrowUpRight
										size={15}
										className='drop-shadow-lg group-hover/btn:rotate-45 transition-all duration-500 ease-in-out'
									/>
								</a>
							</div>

							{/* Content */}
							<div className='w-full md:w-2/5 flex flex-col space-y-3'>
								<span className='text-[10px] uppercase tracking-[0.25em] text-gray-400'>
									0{index + 1} — {project.category}
								</span>

								<h2 className='text-2xl lg:text-4xl font-medium tracking-tight'>
									{project.title}
								</h2>

								<p className='text-gray-500 leading-relaxed text-sm'>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2 pt-2'>
									{project.tech.map((t) => (
										<span
											key={t}
											className='text-[9px] uppercase tracking-[0.15em] font-bold text-gray-400'>
											{t}
										</span>
									))}
								</div>

								{/* Subtle CTA */}
								<div className='pt-4 mt-0 md:mt-4'>
									<Link
										href={`/projects/${project.title.toLowerCase()}`}
										className='group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]'>
										<span>View case study</span>
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
						</article>
					))}
				</div>
			</div>
		</main>
	);
};

export default Projects;
