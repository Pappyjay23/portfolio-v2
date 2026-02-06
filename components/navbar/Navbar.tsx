"use client";

import { CONTACT_HREF } from "@/lib/constants";
import { globalState, handleScroll } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";

const navItemsList = [
	{
		icon: (
			<Image
				src='/profile.jpg'
				alt='Profile'
				fill
				className='object-cover object-top scale-[1.2] group-hover:scale-[1.4] border-0 outline-none transition-transform duration-500 ease-in-out rounded-full'
			/>
		),
		label: "Home",
		isAvatar: true,
		to: "hero",
	},
	{
		icon: <LuMonitor />,
		label: "Projects",
		to: "projects",
	},
	{
		icon: <GoPerson />,
		label: "About",
		to: "about",
	},
	{
		icon: <HiOutlineSquare3Stack3D />,
		label: "Stack",
		to: "stack",
	},
	{
		icon: <IoBriefcaseOutline />,
		label: "Experience",
		to: "experience",
	},
];

const NavItem = ({
	icon,
	label,
	to,
	isAvatar = false,
}: {
	icon: React.ReactNode;
	label: string;
	to: string;
	isAvatar?: boolean;
}) => {
	const [isActive, setIsActive] = useState(globalState.activeSection === to);

	useEffect(() => {
		const handleUpdate = () => setIsActive(globalState.activeSection === to);
		window.addEventListener("navUpdate", handleUpdate);
		return () => window.removeEventListener("navUpdate", handleUpdate);
	}, [to]);

	const handleClick = () => {
		handleScroll(to);

		const avatar = document.querySelector(".nav-avatar");

		if (isAvatar && avatar) {
			gsap.to(avatar, {
				rotation: "+=360",
				duration: 1.5,
				ease: "expo.out",
				overwrite: true,
			});
		}
	};

	return (
		<button
			onClick={handleClick}
			className='group relative flex items-center justify-center cursor-pointer outline-none'>
			<div
				className={`h-10 w-10 rounded-full flex justify-center items-center threed-effect active:scale-95 transform-gpu will-change-transform transition-all duration-500 ease-in-out group-hover:grayscale-0 outline-none border
					${isActive ? "bg-white/5! border-white/40 grayscale-0 text-white/80!" : "bg-transparent border-transparent grayscale text-white/50"}
                ${isAvatar ? "p-1" : "text-white/50 hover:text-white"}`}>
				{isAvatar ? (
					<div className='nav-avatar h-full w-full outline-none border border-white/50 rounded-full overflow-hidden relative'>
						{icon}
					</div>
				) : (
					<span className='text-lg'>{icon}</span>
				)}
			</div>

			{/* Tooltip */}
			<span className='absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-[9px] uppercase tracking-[0.2em] rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-medium'>
				{label}
			</span>
		</button>
	);
};

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);
	const pathname = usePathname();
	const isHome = pathname === "/";
	const router = useRouter();

	// Store the "current" pathname in state to compare it during render
	const [prevPath, setPrevPath] = useState(pathname);

	// If the pathname has changed since the last render, reset visibility immediately in the render loop.
	if (pathname !== prevPath) {
		setPrevPath(pathname);
		setIsVisible(false);
	}

	useEffect(() => {
		const delay = isHome && !globalState.hasPlayedIntro ? 7000 : 300;
		const timer = setTimeout(() => setIsVisible(true), delay);
		return () => clearTimeout(timer);
	}, [isHome, pathname]);

	const transitionClass = isVisible
		? "transition-all duration-1000 ease-out"
		: "transition-none";

	const handleBack = () => {
		const currentDomain = window.location.origin;
		const isInternalNavigation = document.referrer.startsWith(currentDomain);

		if (isInternalNavigation) {
			router.back();
		} else {
			router.push("/");
		}
	};

	if (!isHome) {
		return (
			<nav
				key='sub-nav'
				className={`w-full flex justify-between items-center px-3 md:px-12 ${transitionClass} ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}>
				<button
					onClick={handleBack}
					className='group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-foreground cursor-pointer backdrop-blur-md bg-background/5 p-2 md:p-1 rounded-full shadow-background/30 shadow-xs'>
					<span className='hidden md:block w-8 h-px bg-foreground transition-all duration-500 group-hover:w-12' />

					<span className='hidden md:block'>Go Back</span>

					<FiArrowLeft className='md:hidden' size={16} />
				</button>

				<Link
					href='/'
					className='absolute left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 ease-in-out backdrop-blur-md bg-background/5 p-2 px-4 md:p-1 md:px-3 rounded-full shadow-background/30 shadow-xs'>
					Index
				</Link>

				<a
					href={CONTACT_HREF}
					className='px-3 md:px-4 py-0.5 md:py-1.5 bg-foreground outline-0 border-0 text-black rounded-full font-bold transition-all duration-300 hover:bg-gray-200 active:scale-95 items-center justify-center flex gap-1 shadow-background/30 shadow-xs'>
					<span className='text-[10px] md:text-xs mt-0.5'>
						<span className='hidden xs:inline'>Reach out</span>
						<span className='xs:hidden'>Chat</span>
					</span>
					<span className='animate-wave text-lg md:text-xl -mt-0.5'>👋</span>
				</a>
			</nav>
		);
	}

	return (
		<nav
			key={`home-nav`}
			className={`p-1 rounded-[100px] border border-white/10 backdrop-blur-md w-fit flex items-center justify-center shadow-2xl ${transitionClass} ${
				isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
			}`}>
			<div className='bg-white/5 border border-white/10 h-full w-full rounded-full backdrop-blur-md py-1 px-3 flex gap-3 items-center'>
				{navItemsList.map((item, index) => (
					<NavItem
						key={index}
						to={item.to}
						label={item.label}
						isAvatar={item.isAvatar}
						icon={item.icon}
					/>
				))}

				{/* DIVIDER */}
				<div className='w-px h-6 bg-white/10 mx-1 hidden md:block' />

				{/* CTA */}
				<a
					href={CONTACT_HREF}
					className='px-4 py-1.5 bg-foreground outline-0 border-0 text-black rounded-full font-bold transition-all duration-300 hover:bg-gray-200 active:scale-95 items-center gap-1 hidden md:flex'>
					<span className='text-xs'>Reach out</span>
					<span className='animate-wave text-xl'>👋</span>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
