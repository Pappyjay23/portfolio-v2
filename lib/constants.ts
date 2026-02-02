export const CONTACT_EMAIL = "pjinadu02@gmail.com";

export const MAILTO_CONFIG = {
    subject: encodeURIComponent("Project Collaboration"),
    body: encodeURIComponent(
        "Hi Peace,\n\nI came across your portfolio and was impressed by your work. I’d love to talk about a potential project or collaboration.\n\nBest regards,"
    ),
};

export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${MAILTO_CONFIG.subject}&body=${MAILTO_CONFIG.body}`;