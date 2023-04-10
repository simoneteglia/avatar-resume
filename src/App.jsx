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
					windowSize={windowSize}
				/>
				<SplineScene windowSize={windowSize} />
				<Content
					handleMouseHoverClickable={handleMouseHoverClickable}
					handleMouseLeaveClickable={handleMouseLeaveClickable}
					windowSize={windowSize}
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
				<Navbar windowSize={windowSize} />
				<SplineScene windowSize={windowSize} />
				<Content
					handleMouseHoverClickable={handleMouseHoverClickable}
					handleMouseLeaveClickable={handleMouseLeaveClickable}
					windowSize={windowSize}
				/>
			</>
		);
	}
}

export default App;
