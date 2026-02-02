import { globalState } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useScrollSpy = (id: string) => {
    useGSAP(() => {
        const trigger = gsap.to(window, {
            scrollTrigger: {
                trigger: `#${id}`,
                start: "top 40%", // Trigger when section hits 40% from top
                end: "bottom 40%",
                onToggle: (self) => {
                    if (self.isActive) {
                        globalState.activeSection = id;
                        // Dispatch event to let the Navbar know
                        window.dispatchEvent(new Event("navUpdate"));
                    }
                },
            },
        });
        return () => trigger.kill();
    }, [id]);
};