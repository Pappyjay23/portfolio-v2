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
	keywords: [
		"Peace Jinadu-Paul",
		"Front-End Engineer",
		"Software Engineer",
		"Next.js Developer",
		"Nigeria",
		"Lagos",
	],
	authors: [{ name: "Peace Jinadu-Paul" }],
	openGraph: {
		type: "website",
		url: "https://peacejp.dev",
		title: "Peace Jinadu-Paul | Front-End Engineer",
		description:
			"An innovative front-end engineer with a keen eye for aesthetics and experience building responsive, secure, and scalable digital products.",
		siteName: "Peace Jinadu-Paul Portfolio",
		images: [
			{
				url: "https://peacejp.dev/api/og", // Recommended size: 1200x630
				width: 1200,
				height: 630,
				alt: "Peace Jinadu-Paul | Frontend Engineer",
			},
		],
	},
	// Twitter
	twitter: {
		card: "summary_large_image",
		title: "Peace Jinadu-Paul | Front-End Engineer",
		description:
			"An innovative front-end engineer with a keen eye for aesthetics and experience building responsive, secure, and scalable web architectures.",
		creator: "@_pappy_jay_",
		site: "@_pappy_jay_",
		images: ["https://peacejp.dev/api/og"],
	},

	// Verification
	verification: {
		google: "BN7T6m4pluKzTeCdI1H9Jji5Zk0qPD8wFAgYkZJR9xw",
	},

	// Icons
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.png",
		apple: "/apple-touch-icon.png",
	},
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
