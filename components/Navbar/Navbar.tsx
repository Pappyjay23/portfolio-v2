"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
				className='object-cover object-top scale-[1.2] group-hover:scale-[1.4] transition-all duration-500 ease-in-out grayscale group-hover:grayscale-0'
			/>
		),
		label: "Home",
		isAvatar: true,
	},
	{
		icon: <LuMonitor />,
		label: "Projects",
	},
	{
		icon: <GoPerson />,
		label: "About",
	},
	{
		icon: <HiOutlineSquare3Stack3D />,
		label: "Stack",
	},
	{
		icon: <IoBriefcaseOutline />,
		label: "Experience",
	},
];

const NavItem = ({
	icon,
	label,
	isAvatar = false,
}: {
	icon: React.ReactNode;
	label: string;
	isAvatar?: boolean;
}) => {
	return (
		<div className='group relative flex items-center justify-center'>
			<div
				className={`h-10 w-10 rounded-full flex justify-center items-center threed-effect active:scale-95 transform-gpu will-change-transform transition-all duration-500 ease-in-out cursor-pointer 
        ${isAvatar ? "p-1" : "text-white/50 hover:text-white"}`}>
				{isAvatar ? (
					<div className='h-full w-full border border-white/50 rounded-full overflow-hidden relative'>
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
		</div>
	);
};

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 300);
	}, []);

	return (
		<div
			className={`p-1 rounded-[100px] border border-white/10 backdrop-blur-md w-fit flex items-center justify-center shadow-2xl transition-all duration-1000 ${
				isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
			}`}>
			<div className='bg-white/5 border border-white/10 h-full w-full rounded-full backdrop-blur-md py-1 px-3 flex gap-3 items-center'>
				{navItemsList.map((item, index) => (
					<NavItem
						key={index}
						label={item.label}
						isAvatar={item.isAvatar}
						icon={item.icon}
					/>
				))}

				{/* DIVIDER */}
				<div className='w-px h-6 bg-white/10 mx-1 hidden md:block' />

				{/* CTA */}
				<a
					href='mailto:peace@example.com'
					className='px-4 py-1.5 bg-foreground text-black rounded-full font-bold transition-all duration-300 hover:bg-gray-200 active:scale-95 items-center gap-1 hidden md:flex'>
					<span className='text-xs'>Reach out</span>
					<span className='animate-wave text-xl'>👋</span>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
