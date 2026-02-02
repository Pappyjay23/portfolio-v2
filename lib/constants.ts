export const CONTACT_EMAIL = "pjinadu02@gmail.com";

export const MAILTO_CONFIG = {
	subject: encodeURIComponent("Project Collaboration"),
	body: encodeURIComponent(
		"Hi Peace,\n\nI came across your portfolio and was impressed by your work. I’d love to talk about a potential project or collaboration.\n\nBest regards,",
	),
};

export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${MAILTO_CONFIG.subject}&body=${MAILTO_CONFIG.body}`;

export const PROJECTS = [
	{
		title: "OrbitDesk",
		description:
			"A centralized work command center designed for seamless cross-border team collaboration.",
		category: "Productivity",
		image: "/orbitdesk.jpg",
		tech: ["React.js", "TypeScript", "Supabase", "PWA", "Tailwind Css"],
		link: "https://orbit-desk-vp.vercel.app",
		repo: "https://github.com/Pappyjay23/OrbitDesk",
	},
	{
		title: "Cinera",
		description:
			"A motion-centric cinema platform delivering a high-fidelity movie discovery experience.",
		category: "Media Discovery",
		image: "/cinera.jpg",
		backupImage: "/cinera-backup.jpg",
		tech: [
			"React.js",
			"GSAP",
			"TanStack Query",
			"Supabase",
			"Axios",
			"PWA",
			"Tailwind Css",
		],
		link: "https://cinera-vp.vercel.app",
		repo: "https://github.com/Pappyjay23/Cinera",
	},
	{
		title: "Halo",
		description:
			"Immersive 3D audio-visual landing experience pushing the boundaries of web interactivity.",
		category: "Immersive Experience",
		image: "/halo.jpg",
		tech: ["Next.js", "Three.js", "GSAP", "TypeScript", "Tailwind Css"],
		link: "https://halo-vp.vercel.app",
		repo: "https://github.com/Pappyjay23/Halo",
	},
	{
		title: "ArtSphere",
		description:
			"A refined digital gallery focusing on visual storytelling and high-quality image discovery.",
		category: "Visual Curation",
		image: "/artsphere.jpg",
		tech: ["Vue.js", "Pinia", "Firebase", "Tailwind Css"],
		link: "https://art-sphere-gallery.vercel.app",
		repo: "https://github.com/Pappyjay23/ArtSphere",
	},
	{
		title: "FlowBoard",
		description:
			"A high-performance task management system featuring fluid drag-and-drop workflows.",
		category: "Task Workflow",
		image: "/flowboard.jpg",
		tech: ["React.js", "Dnd-Kit", "Context API", "Tailwind Css"],
		link: "https://flowboard-vp.vercel.app",
		repo: "https://github.com/Pappyjay23/FlowBoard",
	},
	{
		title: "DevHire",
		description:
			"Strategic hiring marketplace connecting top-tier tech talent with global opportunities.",
		category: "Hiring Platform",
		image: "/devhire.jpg",
		tech: ["Vue.js", "Pinia", "Firebase", "Axios", "Tailwind Css"],
		link: "https://dev-hire-vp.vercel.app",
		repo: "https://github.com/Pappyjay23/DevHire",
	},
];
