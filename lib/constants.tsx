import { DiJavascript1 } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import {
	SiFigma,
	SiFirebase,
	SiFramer,
	SiGit,
	SiGithub,
	SiJest,
	SiLinkedin,
	SiNextdotjs,
	SiReact,
	SiReactquery,
	SiRedux,
	SiSass,
	SiShadcnui,
	SiStyledcomponents,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscDebugAlt } from "react-icons/vsc";

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
		details: {
			summary:
				"OrbitDesk was engineered as a specialized command center for the modern global professional. In an era of decentralized work, managing international projects often involves friction—specifically around time-zone synchronization and financial tracking. This platform solves that by unifying workflow management with a real-time financial suite, providing a single source of truth for cross-border operations.",
			whatWasBuilt:
				"I developed a high-performance dashboard featuring real-time data synchronization and an active notification engine. Key implementations include custom hooks for live currency exchange rates, a robust project tracking system powered by Supabase, and an automated push notification system. This system utilizes Service Workers and Supabase Edge Functions to alert users of approaching deadlines, even when the application is not actively open.",
			theApproach:
				"My engineering philosophy for OrbitDesk centered on resilience and proactive utility. Beyond the PWA architecture for offline access, I implemented a custom notification pipeline that bridges the gap between the server and the browser's Push API. By offloading deadline monitoring to Supabase's real-time listeners and managing the event lifecycle through a dedicated Service Worker, I ensured the platform acts as a reliable assistant rather than a passive tool.",
			theResult:
				"The final product is a polished, proactive digital workspace that bridges the gap between traditional project management and global finance. By successfully merging a high-fidelity 'mobile-first' aesthetic with advanced technical features like background task notifications, OrbitDesk delivers a seamless, native-app experience that drives user accountability and operational efficiency.",
		},
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
		details: {
			summary:
				"Cinera was conceived as a high-fidelity media discovery engine designed to eliminate the 'interface friction' found in traditional streaming platforms. By prioritizing visual storytelling, the platform transforms the simple act of movie discovery into an immersive cinematic experience, bridging the gap between massive external metadata libraries and a curated, user-centric interface.",
			whatWasBuilt:
				"I engineered a 'Cinematic Hero Engine' that utilizes parallel pre-loading of backdrop and preview assets to eliminate progressive loading artifacts. The core features include a global search system with debounced queries, an infinite scroll architecture built on the Intersection Observer API, and a robust bookmarking system using a composite key architecture in Supabase to maintain strict data integrity.",
			theApproach:
				"My architectural approach focused on intelligent state management and fluid motion. I leveraged TanStack Query for sophisticated server-state caching and GSAP for a high-performance animation layer. To ensure a premium feel, I implemented 'binary' loading states—where assets only appear once fully decoded—preventing the visual stutter often seen in media-heavy web applications.",
			theResult:
				"The result is a Progressive Web App that mirrors the performance and aesthetic depth of a native OS application. Cinera successfully demonstrates how a scalable frontend architecture can handle high-density media environments while maintaining a polished, aesthetic integrity that keeps the user focused on discovery rather than the technology behind it.",
		},
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
		details: {
			summary:
				"Halo is an immersive digital odyssey designed for a fictional premium audio brand. The project served as a technical rigorous exercise in high-end brand storytelling, moving away from traditional static grids toward a fluid, scrolling narrative. Every aspect of the user journey—from the custom typography to the 3D asset integration—was meticulously planned to simulate a real-world high-budget client commission.",
			whatWasBuilt:
				"I developed a custom rendering pipeline that synchronizes a Three.js 3D environment with GSAP-driven scroll triggers. The experience features 3D model manipulation, custom shaders, and a responsive navigation system built on Next.js. To ensure an 'always-smooth' experience, I implemented optimized asset loading and frame-rate monitoring to handle the intensive 3D computations across various device tiers.",
			theApproach:
				"My engineering philosophy focused on the marriage of structural reliability and visual experimentation. I utilized Next.js for its robust routing and SEO capabilities, while layering a sophisticated animation controller on top to handle the 'scrollytelling' logic. The architecture was designed to be modular, allowing the 3D components to stay decoupled from the UI layer to maintain high performance and code maintainability.",
			theResult:
				"The final product is a buttery-smooth, interactive showcase that proves ambitious 3D web design is viable without sacrificing performance. Halo successfully delivered a high-fidelity visual experience, ultimately demonstrating my ability to bridge the gap between technical front-end engineering and meticulous UX/UI design.",
		},
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
		details: {
			summary:
				"ArtSphere was designed as a collaborative ecosystem for visual curators and digital artists. The primary objective was to create a frictionless 'discovery loop' where high-resolution imagery could be explored and shared without the typical performance bottlenecks associated with media-heavy galleries. It serves as a minimalist canvas that prioritizes content over interface noise.",
			whatWasBuilt:
				"I architected a collaborative image curation platform utilizing Vue 3’s Composition API and Firebase for real-time data persistence. A critical component of the build was the integration of Cloudinary for dynamic image transformation and optimization. This allowed for features like responsive image delivery and 'lazy-loading' strategies that ensure the UI remains snappy even when rendering hundreds of assets.",
			theApproach:
				"My approach centered on modularity and asset performance. By utilizing Pinia for centralized state management, I ensured that user curations and community feeds remained synchronized across the application. I prioritized a 'CSS-first' approach to layout using Tailwind, which kept the bundle size small while providing the flexibility needed to create a high-fidelity, grid-based aesthetic that feels both airy and structured.",
			theResult:
				"The final platform is a high-performance visual discovery tool that demonstrates a keen eye for aesthetics and technical efficiency. By offloading image processing to the edge via Cloudinary and maintaining a lean Vue-based architecture, ArtSphere delivers a premium gallery experience that balances high-density visual content with the rapid response times expected of modern web applications.",
		},
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
		details: {
			summary:
				"FlowBoard was engineered to optimize the cognitive load of task management through a highly tactile, reactive interface. The project addresses the need for a 'flow-state' workspace where users can organize complex projects without interface lag. It prioritizes immediate visual feedback and persistent state to ensure a reliable and frictionless productivity experience.",
			whatWasBuilt:
				"I developed a sophisticated Kanban-style dashboard utilizing @dnd-kit for high-performance drag-and-drop interactions. The system features a multi-context architecture for independent state management of tasks, modals, and themes. Key functionalities include real-time task filtering, priority indicators, and a robust localStorage persistence layer that ensures user data remains intact across sessions without the need for a traditional database overhead.",
			theApproach:
				"My engineering philosophy for FlowBoard centered on 'predictable state transitions.' By utilizing the React Context API with TypeScript, I created a strictly typed data flow that handles complex task movements between status columns. I focused on accessibility and performance, ensuring that the drag-and-drop logic remained lightweight and responsive on mobile devices while using Tailwind CSS to maintain a clean, architectural aesthetic.",
			theResult:
				"The final product is a high-utility dashboard that demonstrates a deep understanding of interactive UI patterns. FlowBoard successfully balances complex functional requirements with a minimalist design, resulting in a tool that feels both powerful and easy to navigate. The project stands as a testament to my ability to build scalable, component-based applications that prioritize the end-user's fluid workflow.",
		},
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
		details: {
			summary:
				"DevHire was engineered as a dual-sided marketplace designed to streamline the tech recruitment lifecycle. Recognizing the fragmentation in the job market, I built this platform to act as a bridge between high-tier developers and forward-thinking employers. The challenge was to create a unified interface that accommodates two distinct user journeys: talent acquisition for employers and career discovery for engineers.",
			whatWasBuilt:
				"I developed a robust hiring ecosystem featuring a multi-role authentication system. The application performs sophisticated data aggregation, merging real-time job listings from an external recruitment API with proprietary postings stored in a Firebase back-end. Key features include a dynamic job posting engine for employers, developer profile management, and a centralized dashboard for tracking applications.",
			theApproach:
				"My approach centered on creating a modular, scalable architecture using Vue 3 and Pinia. To handle the complexity of dual user roles, I implemented conditional rendering logic and secure route guards to ensure a tailored experience for both developers and recruiters. I utilized Axios for high-performance API integration and focused on a data-dense yet intuitive UI that enables quick scanning of job requirements and candidate skills.",
			theResult:
				"The final product is a comprehensive hiring platform that successfully manages complex data flows and user permissions. DevHire demonstrates my ability to architect professional-grade applications that solve real-world business needs. By combining a keen eye for aesthetics with functional depth, I delivered a marketplace that feels as premium as the talent it aims to connect.",
		},
	},
];

export const STACK_CATEGORIES = [
	{
		title: "Architecture",
		tools: [
			{ name: "TypeScript", icon: <SiTypescript /> },
			{ name: "JavaScript", icon: <DiJavascript1 /> },
			{ name: "Next.js", icon: <SiNextdotjs /> },
			{ name: "React", icon: <SiReact /> },
			{ name: "Vue", icon: <SiVuedotjs /> },
			{ name: "React Native", icon: <TbBrandReactNative /> },
		],
	},
	{
		title: "State & Backend",
		tools: [
			{ name: "React Query", icon: <SiReactquery /> },
			{ name: "Redux", icon: <SiRedux /> },
			{ name: "Supabase", icon: <SiSupabase /> },
			{ name: "Firebase", icon: <SiFirebase /> },
		],
	},
	{
		title: "Experience & Motion",
		tools: [
			{
				name: "GSAP",
				icon: <span className='text-[10px] font-bold'>GSAP</span>,
			},
			{ name: "Framer Motion", icon: <SiFramer /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
			{ name: "Sass", icon: <SiSass /> },
			{ name: "Styled Components", icon: <SiStyledcomponents /> },
			{ name: "ShadCN", icon: <SiShadcnui /> },
		],
	},
	{
		title: "Workflow, Design & Quality",
		tools: [
			{ name: "Git", icon: <SiGit /> },
			{ name: "GitHub", icon: <SiGithub /> },
			{ name: "Jest", icon: <SiJest /> },
			{ name: "Playwright", icon: <VscDebugAlt /> },
			{ name: "Figma", icon: <SiFigma /> },
		],
	},
];

export const EXPERIENCE = [
	{
		id: "techinnover",
		company: "Techinnover",
		role: "Frontend Engineer",
		period: "Mar 2025 — Jan 2026",
		location: "Lagos, Nigeria (Remote) ",
		description:
			"Architected scalable frontend solutions and complex user flows for high-stakes fintech and social ecosystems. ",
		details: [
			"Engineered a large-scale PWA with 20+ screens, bypassing native app store constraints for cross-platform accessibility. ",
			"Developed 15+ secure user flows, including BVN verification systems that reduced fraud risk for withdrawals. ",
			"Increased PWA adoption by 40% among iPhone users by implementing custom iOS installation prompts. ",
			"Collaborated with stakeholders to provide technical input on product roadmaps and business decisions. ",
		],
	},
	{
		id: "vinhood",
		company: "Vinhood",
		role: "Frontend Engineer",
		period: "Mar 2023 — Apr 2024",
		location: "Milan, Italy (Remote) ",
		description:
			"Led UI standardization and performance optimization for a global wine-tech platform. ",
		details: [
			"Delivered 20+ features for the V2 rollout adopted across 5+ countries with 98% responsive compliance. ",
			"Reduced load times on key pages by 35% through systematic optimization of reusable components. ",
			"Decreased design inconsistencies by 30% by bridging the gap between design systems and engineering. ",
			"Participated in rigorous code reviews to uphold frontend best practices and team code quality. ",
		],
	},
	{
		id: "hotels-ng",
		company: "Hotels.ng",
		role: "Frontend Engineer",
		period: "Oct 2022 — Dec 2022",
		location: "Lagos, Nigeria (Remote) ",
		description:
			"Rapidly developed and deployed live event-scheduling tools in a high-velocity team environment. ",
		details: [
			"Translated complex wireframes into 10+ production features with 95% implementation accuracy. ",
			"Debugged and resolved 30+ critical frontend issues, directly improving application stability. ",
			"Collaborated within a cross-functional team of 15+ members to deploy 'Catchup.' ",
			"Utilized Git-based version control to manage complex merges and maintain codebase integrity. ",
		],
	},
	{
		id: "fiverr",
		company: "Freelance",
		role: "Developer & Designer",
		period: "Dec 2021 — Feb 2022",
		location: "Remote ",
		description:
			"Delivered end-to-end digital solutions for diverse global clients, balancing technical performance with aesthetic goals. ",
		details: [
			"Built, debugged, and optimized custom web applications tailored to specific business requirements. ",
			"Managed the full project lifecycle, from requirement gathering to deployment and client handoff. ",
			"Delivered high-quality digital assets and codebases on schedule through effective project management. ",
			"Applied version control and performance best practices to ensure project reliability and maintainability. ",
		],
	},
];

export const SOCIAL_LINKS = [
	{
		name: "GitHub",
		url: "https://github.com/Pappyjay23",
		icon: <SiGithub />,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/pappyjay",
		icon: <SiLinkedin />,
	},
	{
		name: "Twitter",
		url: "https://x.com/_pappy_jay_",
		icon: <FaXTwitter />,
	},
];
