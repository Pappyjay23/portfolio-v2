import { clsx, type ClassValue } from "clsx";
import { ScrollSmoother } from "gsap/ScrollSmoother";
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
	if (smoother) {
		smoother.scrollTo(`#${to}`, true, "top 0px");
	}
};
