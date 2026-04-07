import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
	const urbanistRegular = fetch(
		new URL(
			"https://cdn.jsdelivr.net/fontsource/fonts/urbanist@latest/latin-400-normal.ttf",
		),
	).then((res) => res.arrayBuffer());

	const urbanistBold = fetch(
		new URL(
			"https://cdn.jsdelivr.net/fontsource/fonts/urbanist@latest/latin-700-normal.ttf",
		),
	).then((res) => res.arrayBuffer());

	const greatVibes = fetch(
		new URL(
			"https://cdn.jsdelivr.net/fontsource/fonts/great-vibes@latest/latin-400-normal.ttf",
		),
	).then((res) => res.arrayBuffer());

	const [urbanistData, urbanistBoldData, greatVibesData] = await Promise.all([
		urbanistRegular,
		urbanistBold,
		greatVibes,
	]);

	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#000",
				position: "relative",
				overflow: "hidden",
			}}>
			{/* 1. Satori-Compatible Dot Grid */}
			{/* We use an SVG background because radial-gradient is unreliable in OG */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					display: "flex",
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%231a1a1a' /%3E%3C/svg%3E\")",
					opacity: 0.8,
				}}
			/>

			{/* 2. Massive Background Name */}
			<div
				style={{
					position: "absolute",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
				}}>
				<span
					style={{
						fontSize: "200px",
						fontFamily: "Urbanist",
						fontWeight: 600,
						WebkitTextStroke: "1px rgba(255,255,255,0.08)",
						letterSpacing: "-0.05em",
						textTransform: "capitalize",
						textAlign: "center",
						display: "flex",
					}}>
					Peace Jinadu-Paul
				</span>
			</div>

			{/* 3. Main Content Layer */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "relative",
					zIndex: 10, 
				}}>
				{/* Role Badge */}
				<div
					style={{
						display: "flex", // Added explicit flex
						padding: "8px 24px",
						borderRadius: "100px",
						border: "1px solid rgba(255,255,255,0.2)",
						backgroundColor: "rgba(0,0,0,0.8)",
						marginBottom: "24px",
					}}>
					<span
						style={{
							fontFamily: "Urbanist",
							fontSize: 14,
							letterSpacing: "0.1em",
							color: "#9ca3af",
							textTransform: "uppercase",
							display: "flex",
						}}>
						Software Engineer
					</span>
				</div>

				{/* Main Signature Heading */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<span
						style={{
							fontFamily: "Great Vibes",
							fontSize: 80,
							color: "#fff",
							display: "flex",
						}}>
						Peace Jinadu-Paul
					</span>
				</div>

				{/* Tagline */}
				<p
					style={{
						fontFamily: "Urbanist",
						fontSize: 14,
						letterSpacing: "0.3px",
						textTransform: "uppercase",
						color: "#5d6776",
						marginTop: "24px",
						fontWeight: 400,
						textAlign: "center",
						display: "flex",
					}}>
					Building elegant solutions for complex problems.
				</p>

				{/* Tech Stack Pills */}
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						gap: "12px",
						marginTop: "24px",
						justifyContent: "center",
					}}>
					{["React", "TypeScript", "Next.js", "Tailwind", "Node.js"].map((tech) => (
						<div
							key={tech}
							style={{
								display: "flex", // Added explicit flex
								padding: "8px 20px",
								borderRadius: "100px",
								border: "1px solid rgba(255,255,255,0.08)",
								backgroundColor: "rgba(255,255,255,0.03)",
								color: "#4b5563",
								fontSize: 12,
								fontWeight: 400,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
							}}>
							{tech}
						</div>
					))}
				</div>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: "Urbanist", data: urbanistData, weight: 400, style: "normal" },
				{
					name: "Urbanist",
					data: urbanistBoldData,
					weight: 700,
					style: "normal",
				},
				{
					name: "Great Vibes",
					data: greatVibesData,
					weight: 400,
					style: "normal",
				},
			],
		},
	);
}
