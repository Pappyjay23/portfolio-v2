"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

const Home = () => {
	const [showContent, setShowContent] = useState(false);

	return (
		<>
			{!showContent && <Loader onLoadComplete={() => setShowContent(true)} />}
			{showContent && (
				<main className='min-h-screen'>
					<Hero />
					{/* Add more sections here */}
				</main>
			)}
		</>
	);
};

export default Home;