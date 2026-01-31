"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
	const [showContent, setShowContent] = useState(false);

	return (
		<>
			{!showContent && <Loader onLoadComplete={() => setShowContent(true)} />}
			{showContent && (
				<main className='min-h-svh relative'>
					<div className='fixed top-0 left-0 w-full z-50 py-4 flex justify-center'>
						<Navbar />
					</div>
					<Hero />
					{/* Add more sections here */}
				</main>
			)}
		</>
	);
};

export default Home;
