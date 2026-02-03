"use client";

import Loader from "@/components/Loader";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects/Projects";
import Stack from "@/components/stack/Stack";
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
					<About />
					<Stack />
					<Experience />
				</main>
			)}
		</>
	);
};

export default Home;
