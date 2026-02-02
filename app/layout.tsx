import type { Metadata } from "next";
import { Great_Vibes, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const greatVibes = Great_Vibes({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-great-vibes",
});

const urbanist = Urbanist({
	subsets: ["latin"],
	variable: "--font-urbanist",
});

export const metadata: Metadata = {
	title: "Peace Jinadu-Paul | Frontend Engineer",
	description:
		"An innovative front-end engineer with a keen eye for aesthetics as well as experience building and maintaining responsive, functional, interactive and scalable web architectures.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${urbanist.variable} ${greatVibes.variable} font-sans antialiased`}>
				<div className='fixed top-0 left-0 w-full z-50 py-4 flex justify-center'>
					<Navbar />
				</div>

				<SmoothScrollProvider>{children}</SmoothScrollProvider>
			</body>
		</html>
	);
}
