import { clsx, type ClassValue } from "clsx";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const globalState = {
	hasPlayedIntro: false,
	activeSection: "hero",
};

export const handleScroll = (to: string) => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    gsap.killTweensOf(window);
    gsap.killTweensOf(smoother);

    globalState.activeSection = to;
    window.dispatchEvent(new Event("navUpdate"));

    smoother.paused(false);

    const target = `#${to}`;
    if (document.querySelector(target)) {
        ScrollTrigger.refresh(); 
        
        smoother.scrollTo(target, true, "top 50px");
    }
};
