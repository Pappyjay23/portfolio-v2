"use client";

import Loader from "@/components/Loader";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects/Projects";
import { globalState } from "@/lib/utils";
import { useState } from "react";

const Home = () => {
	const [showContent, setShowContent] = useState(globalState.hasPlayedIntro);

	const handleLoadComplete = () => {
		globalState.hasPlayedIntro = true;
		setShowContent(true);
	};

	return (
		<>
			{!showContent && <Loader onLoadComplete={handleLoadComplete} />}
			{showContent && (
				<main className='min-h-svh relative'>
					<Hero />
					<Projects />
					{/* Add more sections here */}
				</main>
			)}
		</>
	);
};

export default Home;
