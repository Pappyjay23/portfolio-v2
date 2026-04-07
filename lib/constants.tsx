import { DiJavascript1 } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import {
	SiExpress,
	SiFigma,
	SiFirebase,
	SiFramer,
	SiGit,
	SiGithub,
	SiJest,
	SiLinkedin,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiReactquery,
	SiRedux,
	SiSass,
	SiShadcnui,
	SiStorybook,
	SiStyledcomponents,
	SiSupabase,
	SiTailwindcss,
	SiTestinglibrary,
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
		slug: "orbitdesk",
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
		title: "Memoir Notes",
		slug: "memoir-notes",
		description:
			"A secure full-stack note-taking application with real-time synchronization and JWT-based authentication.",
		category: "Note Management",
		image: "/memoir-notes.jpg",
		tech: ["React.js", "Node.js", "Express", "MongoDB", "Axios", "JWT"],
		link: "https://memoirnotes.vercel.app",
		repo: "https://github.com/Pappyjay23/memoir-notes",
		details: {
			summary:
				"Memoir Notes was engineered as a demonstration of full-stack architectural competency, bridging the gap between frontend state management and backend data persistence. The project addresses the fundamental challenge of building a secure, scalable note-taking system where user authentication, CRUD operations, and real-time data synchronization must work seamlessly across distributed environments. It serves as a technical proof-of-concept for end-to-end application development—from database schema design to production deployment.",
			whatWasBuilt:
				"I architected a complete full-stack application featuring a RESTful API backend built with Node.js and Express, paired with a React frontend utilizing Axios for efficient HTTP communication. The system implements JWT-based authentication with refresh token rotation for enhanced security, modular Express controllers for clean separation of concerns, and MongoDB for flexible document-based data storage. Key features include secure CRUD operations with protected routes, optimized data fetching with client-side state management, and persistent user sessions managed through HTTP-only cookies.",
			theApproach:
				"My engineering philosophy centered on building a production-grade architecture that balances security, performance, and maintainability. On the backend, I structured the Express API using a modular controller-service pattern with custom middleware for authentication and error handling. For the frontend, I implemented a clean component architecture with React's built-in state management, keeping the application lightweight while maintaining full reactivity. The authentication layer implements industry-standard practices: access tokens for API authorization and refresh tokens for session persistence, with automatic token rotation to mitigate security risks.",
			theResult:
				"The final product is a fully deployed, production-ready application that demonstrates a comprehensive understanding of modern full-stack development. By successfully integrating a Node.js backend with a React frontend and deploying them independently—backend on Railway, frontend on Vercel—Memoir Notes showcases my ability to architect, build, and ship complete web applications. The project stands as tangible evidence of my capability to handle both client-side and server-side development, manage complex data flows, and implement secure authentication systems from scratch.",
		},
	},
	{
		title: "Cinera",
		slug: "cinera",
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
		title: "DevHire",
		slug: "devhire",
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
	{
		title: "Halo",
		slug: "halo",
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
		slug: "artsphere",
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
];

export const STACK_CATEGORIES = [
	{
		title: "Languages & Frameworks",
		tools: [
			{ name: "TypeScript", icon: <SiTypescript /> },
			{ name: "JavaScript", icon: <DiJavascript1 /> },
			{ name: "React", icon: <SiReact /> },
			{ name: "Next.js", icon: <SiNextdotjs /> },
			{ name: "Vue", icon: <SiVuedotjs /> },
			{ name: "React Native", icon: <TbBrandReactNative /> },
		],
	},
	{
		title: "Styling & Animation",
		tools: [
			{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
			{ name: "Sass", icon: <SiSass /> },
			{ name: "Styled Components", icon: <SiStyledcomponents /> },
			{ name: "ShadCN", icon: <SiShadcnui /> },
			{ name: "Framer Motion", icon: <SiFramer /> },
			{
				name: "GSAP",
				icon: <span className='text-[10px] font-bold'>GSAP</span>,
			},
		],
	},
	{
		title: "State Management",
		tools: [
			{ name: "Redux", icon: <SiRedux /> },
			{ name: "React Query", icon: <SiReactquery /> },
		],
	},
	{
		title: "Backend & Database",
		tools: [
			{ name: "Node.js", icon: <SiNodedotjs /> },
			{ name: "Express.js", icon: <SiExpress /> },
			{ name: "MongoDB", icon: <SiMongodb /> },
			{ name: "Supabase", icon: <SiSupabase /> },
			{ name: "Firebase", icon: <SiFirebase /> },
		],
	},
	{
		title: "Tools & Testing",
		tools: [
			{ name: "Git", icon: <SiGit /> },
			{ name: "GitHub", icon: <SiGithub /> },
			{ name: "Jest", icon: <SiJest /> },
			{ name: "React Testing Library", icon: <SiTestinglibrary /> },
			{ name: "Playwright", icon: <VscDebugAlt /> },
			{ name: "Storybook", icon: <SiStorybook /> },
			{ name: "Figma", icon: <SiFigma /> },
		],
	},
];

export const EXPERIENCE = [
	{
		id: "ai-contractor",
		company: "Independent Contractor",
		role: "AI Model Evaluation Specialist",
		period: "Mar 2026 — Present",
		location: "Remote",
		description:
			"Evaluating and improving AI-generated code quality and model performance for large language models.",
		details: [
			"Authored adversarial prompts to identify AI model vulnerabilities and edge cases.",
			"Analyzed model-generated code for correctness, efficiency, and security best practices.",
			"Provided structured feedback to guide model fine-tuning and iterative development.",
		],
	},
	{
		id: "techinnover",
		company: "Techinnover",
		role: "Frontend Engineer",
		period: "Mar 2025 — Jan 2026",
		location: "Remote",
		description:
			"Architected scalable frontend solutions and complex user flows for fintech and social ecosystems.",
		details: [
			"Engineered a large-scale PWA with 20+ screens after App Store rejection, delivering cross-platform accessibility.",
			"Developed 15+ secure user flows with BVN verification, reducing fraud risk for withdrawals.",
			"Increased PWA adoption by 40% among iPhone users through custom iOS installation prompts.",
			"Collaborated with cross-functional teams to shape product roadmaps and business strategy.",
		],
	},
	{
		id: "vinhood",
		company: "Vinhood",
		role: "Frontend Engineer",
		period: "Mar 2023 — Apr 2024",
		location: "Milan, Italy (Remote)",
		description:
			"Led UI standardization and performance optimization for a global wine-tech platform.",
		details: [
			"Delivered 20+ production features for V2 rollout adopted across 5+ countries with 98% responsive compliance.",
			"Reduced load times on key pages by 35% through component optimization and API integration.",
			"Decreased design inconsistencies by 30% through systematic UI standardization.",
			"Participated in code reviews to uphold frontend best practices and team code quality.",
		],
	},
	{
		id: "hotels-ng",
		company: "Hotels.ng",
		role: "Frontend Engineer",
		period: "Oct 2022 — Dec 2022",
		location: "Remote",
		description:
			"Rapidly developed and deployed live event-scheduling features in a high-velocity team environment.",
		details: [
			"Translated complex wireframes into 10+ production features with 95% design-to-implementation accuracy.",
			"Debugged and resolved 30+ critical frontend issues, improving application stability.",
			"Collaborated with a cross-functional team of 8 developers, 3 PMs, and 5 designers to build 'Catchup.'",
			"Managed Git-based workflows to handle complex merges and maintain codebase integrity.",
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
