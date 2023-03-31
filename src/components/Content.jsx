import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content({
	handleMouseHoverClickable,
	handleMouseLeaveClickable,
}) {
	return (
		<div style={{ zIndex: 10 }}>
			<div
				id="filler"
				style={{
					height: "200vh",
					width: "100vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "40px",
					fontFamily: "Dongle-Regular",
					textAlign: "center",
				}}
			></div>
			<div
				id="whoami"
				style={{
					height: "100vh",
					width: "100vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "40px",
					fontFamily: "Dongle-Regular",
					textAlign: "center",
				}}
			>
				<h1>Whoami</h1>
				<p style={{ maxWidth: "60ch", fontSize: "42px", lineHeight: "55px" }}>
					Hi! I'm Simone Teglia, a front end enthusiast and software engineer.
					At Sapienza University in Rome, I'm now enrolled in my first year of
					the Master of Science in Engineering in Computer Science program. My
					main interests are machine learning and natural langage processing.
					Friends claim that I have a Formula 1 addiction.
				</p>
			</div>
			<div
				id="recent-works"
				style={{
					width: "100vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "40px",
					fontFamily: "Dongle-Regular",
					paddingTop: "100px",
					marginTop: "-100px",
					textAlign: "center",
				}}
			>
				<h1>Recent Works</h1>
				<p style={{ maxWidth: "60ch" }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure in quis
					rem maxime facilis error? Eligendi delectus perferendis, autem commodi
					nam similique minus voluptate illum accusantium magnam veritatis
					excepturi officiis.
				</p>
			</div>
			<div
				id="contact-me"
				style={{
					width: "100vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "35px",
					fontFamily: "Dongle-Regular",
					paddingTop: "100px",
					marginTop: "-100px",
					textAlign: "center",
					marginBottom: "300px",
				}}
			>
				<h1>Contact Me</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "50% 50%",
						width: "75vw",
					}}
				>
					<div>
						<p
							style={{
								fontFamily: "Aurora",
							}}
						>
							message me on my socials
						</p>
						<a
							href="https://www.linkedin.com/in/simone-teglia/"
							onMouseEnter={() => handleMouseHoverClickable()}
							onMouseLeave={() => handleMouseLeaveClickable()}
						>
							<FontAwesomeIcon
								icon={faLinkedinIn}
								style={{ marginRight: "50px" }}
							/>
						</a>
						<a
							href="https://twitter.com/Enimoss9"
							onMouseEnter={() => handleMouseHoverClickable()}
							onMouseLeave={() => handleMouseLeaveClickable()}
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</div>
					<div>
						<p
							style={{
								fontFamily: "Aurora",
							}}
						>
							or just send me an email
						</p>
						<a
							href="mailto:simone.teglia9@gmail.com"
							onMouseEnter={() => handleMouseHoverClickable()}
							onMouseLeave={() => handleMouseLeaveClickable()}
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
