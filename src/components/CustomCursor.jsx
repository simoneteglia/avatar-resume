import React, { useState, useEffect, useRef } from "react";

export default function CustomCursor({ setCursorCircleRef, setCursorDotRef }) {
	const [clientX, setClientX] = useState(-200);
	const [clientY, setClientY] = useState(-200);
	const [distanceX, setDistanceX] = useState(50);
	const [distanceY, setDistanceY] = useState(50);
	const [centerX, setCenterX] = useState(50);
	const [centerY, setCenterY] = useState(50);

	const cursorCircleRef = useRef();
	const cursorDotRef = useRef();

	useEffect(() => {
		document.body.style.cursor = "none";
		setCursorCircleRef(cursorCircleRef);
		setCursorDotRef(cursorDotRef);

		document.addEventListener("mousemove", (e) => {
			setClientX(e.clientX);
			setClientY(e.clientY);
			const { x, y } = e;
			let distanceX =
				(Math.abs(x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
			setDistanceX(distanceX);

			let distanceY =
				(Math.abs(y - window.innerHeight / 2) / (window.innerHeight / 2)) * 100;

			setDistanceY(distanceY);

			let centerX = (x / window.innerWidth) * 100;
			setCenterX(100 - centerX);

			let centerY = (y / window.innerHeight) * 100;
			setCenterY(100 - centerY);
		});

		document.addEventListener("mousedown", (e) => {
			cursorCircleRef.current.classList.add("smaller");
		});

		document.addEventListener("mouseup", (e) => {
			cursorCircleRef.current.classList.remove("smaller");
		});
	}, []);

	return (
		<div
			className="pointer"
			style={{
				position: "fixed",
				top: clientY,
				left: clientX,
				zIndex: 10,
				pointerEvents: "none",
				opacity: distanceX <= 95.0 ? 1 : 0,
				// transition: "opacity 0.5s ease-out",
			}}
		>
			<div ref={cursorDotRef} className="cursor-dot faded"></div>
			<div ref={cursorCircleRef} className="cursor-dot bigger"></div>
		</div>
	);
}
