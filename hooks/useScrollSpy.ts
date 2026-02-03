import { globalState } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useScrollSpy = (id: string) => {
	useGSAP(() => {
		const trigger = ScrollTrigger.create({
			trigger: `#${id}`,
			start: "top 40%",
			end: "bottom 40%",
			onToggle: (self) => {
				if (self.isActive && globalState.activeSection !== id) {
					globalState.activeSection = id;
					window.dispatchEvent(new Event("navUpdate"));
				}
			},
		});
		return () => trigger.kill();
	}, [id]);
};
