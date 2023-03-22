import { useState, useEffect } from "react";
import "./App.css";
import Content from "./components/Content";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import SplineScene from "./components/SplineScene";

function App() {
	const [cursorCircleRef, setCursorCircleRef] = useState(null);
	const [cursorDotRef, setCursorDotRef] = useState(null);
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		window.scrollTo(0, 0);
		window.addEventListener("resize", handleResize);
	}, []);

	const handleResize = () => {
		setWindowSize(window.innerWidth);
	};

	const handleMouseHoverClickable = () => {
		if (cursorDotRef && cursorCircleRef) {
			cursorCircleRef.current.classList.add("blurred");
			cursorDotRef.current.style.display = "none";
		}
	};

	const handleMouseLeaveClickable = () => {
		if (cursorDotRef && cursorCircleRef) {
			cursorCircleRef.current.classList.remove("blurred");
			cursorDotRef.current.style.display = "initial";
		}
	};

	if (windowSize > 900) {
		return (
			<>
				<Navbar
					cursorCircleRef={cursorCircleRef}
					cursorDotRef={cursorDotRef}
					handleMouseHoverClickable={handleMouseHoverClickable}
					handleMouseLeaveClickable={handleMouseLeaveClickable}
				/>
				<SplineScene />
				<Content
					handleMouseHoverClickable={handleMouseHoverClickable}
					handleMouseLeaveClickable={handleMouseLeaveClickable}
				/>
				<CustomCursor
					setCursorCircleRef={setCursorCircleRef}
					setCursorDotRef={setCursorDotRef}
				/>
			</>
		);
	} else {
		return (
			<>
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						display: "grid",
						placeItems: "center",
					}}
				>
					<p
						style={{
							fontFamily: "Aurora",
							fontSize: "30px",
							textAlign: "center",
						}}
					>
						Please open this website <br /> on a larger screen
					</p>
				</div>
				<CustomCursor
					setCursorCircleRef={setCursorCircleRef}
					setCursorDotRef={setCursorDotRef}
				/>
			</>
		);
	}
}

export default App;
