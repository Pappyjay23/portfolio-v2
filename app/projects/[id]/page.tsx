"use client";

import { PROJECTS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useRef } from "react";
import {
	FiArrowLeft,
	FiArrowRight,
	FiArrowUpRight,
	FiGithub,
} from "react-icons/fi";

const ProjectDetail = () => {
	const { id } = useParams();
	const containerRef = useRef(null);

	const currentIndex = PROJECTS.findIndex((p) => p.slug === id);
	const project = PROJECTS[currentIndex];

	const prevProject = PROJECTS[currentIndex - 1] || null;
	const nextProject = PROJECTS[currentIndex + 1] || null;

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from(".hero-content > *", {
				y: 40,
				opacity: 0,
				duration: 1,
				stagger: 0.1,
				ease: "power4.out",
			})
				.from(
					".hero-image",
					{ scale: 1.05, opacity: 0, duration: 1.5, ease: "expo.out" },
					"-=0.9",
				)
				.from(
					".case-study-section",
					{
						y: 40,
						opacity: 0,
						duration: 1,
						stagger: 0.15,
						ease: "power3.out",
					},
					"<=0.2",
				);
		},
		{ scope: containerRef },
	);

	if (!project) return notFound();

	return (
		<main ref={containerRef} className='bg-background min-h-svh'>
			{/* Hero Section */}
			<section className='pt-20 md:pt-24 px-6 md:px-12 max-w-300 mx-auto'>
				<div className='hero-content mb-8 md:mb-12'>
					<div className='flex items-center gap-2 mb-4'>
						<span className='text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400'>
							0{currentIndex + 1} — {project.category}
						</span>
					</div>

					<h1 className='text-4xl lg:text-5xl font-medium tracking-tighter leading-none mb-4 lg:mb-2'>
						{project.title}
					</h1>

					<div className='flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center gap-8'>
						<p className='max-w-lg text-sm md:text-base text-gray-400 tracking-wide md:tracking-normal'>
							{project.description}
						</p>

						<div className='flex gap-3'>
							<a
								href={project.link}
								target='_blank'
								rel='noreferrer'
								className='flex items-center gap-2 px-6 py-3 outline-none bg-foreground text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 active:scale-98 transition-all duration-500 group'>
								<span>Live Demo</span>{" "}
								<FiArrowUpRight
									size={16}
									className='-mt-0.5 group-hover:rotate-45 transition-all duration-500 ease-in-out'
								/>
							</a>
							<a
								href={project.repo}
								target='_blank'
								rel='noreferrer'
								className='p-3.5 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-500 ease-in-out active:scale-95'>
								<FiGithub size={16} />
							</a>
						</div>
					</div>
				</div>

				<div className='hero-image relative aspect-video w-full overflow-hidden rounded-[15px] md:rounded-[30px] bg-foreground/5 shadow-2xl'>
					<Image
						src={project.backupImage || project.image}
						alt={project.title}
						fill
						priority
						className='object-cover'
					/>
				</div>
			</section>

			{/* Case Study Detail Grid */}
			<section className='case-study-grid mt-12 md:mt-24 pb-32 px-6 md:px-12 max-w-300 mx-auto grid grid-cols-1 md:grid-cols-12 gap-16'>
				{/* Sidebar: Tech & Summary */}
				<div className='md:col-span-4 space-y-10 md:space-y-14'>
					<div className='case-study-section'>
						<h4 className='text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-4 font-bold'>
							The Stack
						</h4>
						<div className='flex flex-wrap gap-x-6 gap-y-3'>
							{project.tech.map((item, i) => (
								<span
									key={i}
									className='text-[9px] uppercase tracking-[0.15em] font-bold text-gray-500'>
									{item}
								</span>
							))}
						</div>
					</div>

					<div className='case-study-section'>
						<h4 className='text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-4 font-bold'>
							Summary
						</h4>
						<p className='text-xs text-gray-400 leading-relaxed tracking-wide'>
							{project.details.summary}
						</p>
					</div>
				</div>

				{/* Main Content: The Detail */}
				<div className='md:col-span-8 space-y-10'>
					<div className='case-study-section'>
						{/* <h3 className='text-xl font-semibold mb-3'> */}
						<h4 className='text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 mb-4 font-bold'>
							What I Built
						</h4>
						{/* </h3> */}
						<p className='text-xs md:text-sm text-gray-400 leading-relaxed tracking-wide'>
							{project.details.whatWasBuilt}
						</p>
					</div>

					<div className='case-study-section'>
						<h4 className='text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 mb-4 font-bold'>
							The Approach
						</h4>
						<p className='text-xs md:text-sm text-gray-400 leading-relaxed'>
							{project.details.theApproach}
						</p>
					</div>

					<div className='case-study-section'>
						<h4 className='text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 mb-4 font-bold'>
							The Result
						</h4>
						<p className='text-xs md:text-sm text-gray-400 leading-relaxed'>
							{project.details.theResult}
						</p>
					</div>
				</div>
			</section>

			{/* Navigation Footer */}
			<footer className='border-t border-white/5 px-6 md:px-12 py-6'>
				<div className='max-w-300 mx-auto flex justify-between items-center'>
					{prevProject ? (
						<Link
							href={`/projects/${prevProject.slug}`}
							className='group flex flex-col items-start gap-1'>
							<span className='flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors'>
								<FiArrowLeft /> Previous
							</span>
							<span className='text-base md:text-lg font-medium'>
								{prevProject.title}
							</span>
						</Link>
					) : (
						<div />
					)}

					{nextProject ? (
						<Link
							href={`/projects/${nextProject.slug}`}
							className='group flex flex-col items-end gap-1 text-right'>
							<span className='flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors'>
								Next <FiArrowRight />
							</span>
							<span className='text-base md:text-lg font-medium'>
								{nextProject.title}
							</span>
						</Link>
					) : (
						<div />
					)}
				</div>
			</footer>
		</main>
	);
};

export default ProjectDetail;
