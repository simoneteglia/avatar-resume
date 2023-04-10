import React, { useEffect, useState } from "react";
import "../resources/navbar.css";

//media query at 900px

export default function Navbar({
	cursorCircleRef,
	cursorDotRef,
	handleMouseHoverClickable,
	handleMouseLeaveClickable,
	windowSize,
}) {
	if (windowSize > 900) {
		return (
			<nav className="navbar">
				<h1
					onMouseEnter={() => handleMouseHoverClickable()}
					onMouseLeave={() => handleMouseLeaveClickable()}
				>
					<a href="#whoami">Simone Teglia</a>
				</h1>
				<ul>
					<li
						onMouseEnter={() => handleMouseHoverClickable()}
						onMouseLeave={() => handleMouseLeaveClickable()}
					>
						<a className="navbar-item" href="#recent-works">
							Recent Works
						</a>
					</li>
					<li
						onMouseEnter={() => handleMouseHoverClickable()}
						onMouseLeave={() => handleMouseLeaveClickable()}
					>
						<a className="navbar-item" href="#contact-me">
							Contact me
						</a>
					</li>
				</ul>
			</nav>
		);
	} else {
		return (
			<nav className="navbar-mobile">
				<h1>
					<a href="#whoami">Simone Teglia</a>
				</h1>
			</nav>
		);
	}
}
