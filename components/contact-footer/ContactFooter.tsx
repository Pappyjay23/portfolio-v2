"use client";

import { CONTACT_EMAIL, CONTACT_HREF, SOCIAL_LINKS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";

const ContactFooter = () => {
	const [copied, setCopied] = useState(false);
	const containerRef = useRef(null);
	const email = CONTACT_EMAIL;

	const copyToClipboard = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	useGSAP(
		() => {
			gsap.from(".contact-reveal", {
				y: 50,
				opacity: 0,
				duration: 1,
				stagger: 0.2,
				ease: "power4.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 90%",
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='bg-background text-foreground py-12 px-6 md:px-12 '>
			<div className='max-w-300 mx-auto'>
				{/* Header Tag */}
				<div className='flex items-center gap-2 mb-6 contact-reveal'>
					<div className='w-2 h-2 rounded-full bg-foreground animate-pulse' />
					<span className='text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400'>
						Available for Projects
					</span>
				</div>

				{/* Main CTA */}
				<div className='flex flex-col mb-8'>
					<h2 className='contact-reveal text-4xl lg:text-6xl font-medium tracking-tight mb-8'>
						{`Let's build`} <span className='text-gray-500'>together.</span>
					</h2>

					<div className='contact-reveal flex flex-col md:flex-row items-start md:items-center gap-6'>
						<a
							href={CONTACT_HREF}
							className='text-2xl md:text-2xl font-light hover:text-gray-400 transition-colors duration-300 border-b border-white/10 pb-2'>
							{email}
						</a>

						<button
							onClick={copyToClipboard}
							className='flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors cursor-pointer'>
							{copied ? (
								<Check className='w-3 h-3 text-green-500' />
							) : (
								<Copy className='w-3 h-3' />
							)}
							{copied ? "Copied" : "Copy Email"}
						</button>
					</div>
				</div>

				{/* Minimal Footer */}
				<footer className='contact-reveal border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
					<span className='text-[10px] uppercase tracking-widest font-bold text-gray-400'>
						© 2026, Peace Jinadu-Paul
					</span>

					<div className='flex items-center gap-6 md:gap-8'>
						{SOCIAL_LINKS.map((social) => (
							<a
								key={social.name}
								href={social.url}
								target='_blank'
								rel='noopener noreferrer'
								className='group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-gray-300 transition-all duration-300'>
								<span className='text-sm transition-all duration-500 ease-in-out group-hover:rotate-360 group-hover:scale-110 text-gray-500 group-hover:text-white'>
									{social.icon}
								</span>

								<span className='hidden sm:inline-block'>{social.name}</span>
							</a>
						))}
					</div>
				</footer>
			</div>
		</section>
	);
};

export default ContactFooter;
