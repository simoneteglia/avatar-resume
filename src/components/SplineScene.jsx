import React, { useEffect, useRef, useState } from "react";
import { OrthographicCamera, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useSpline from "@splinetool/r3f-spline";
import { useSpring, animated } from "@react-spring/three";

/**
 * @author Simone Teglia
 * @returns 3d animated head
 */

// BISOGNA FARE MOLTE MEDIA QUERY PER RIDIMENSIONARE LA TESTA IN ORIZZONTALE

export default function SplineScene() {
	const [scroll, setScroll] = useState(window.scrollY / window.innerHeight);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	const handleScroll = (e) => {
		let percentageScroll = window.scrollY / window.innerHeight; //[0-1]
		if (percentageScroll < 1.0) {
			setScroll(percentageScroll);
		} else {
			setScroll(1);
		}
	};

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				pointerEvents: "none",
				zIndex: 9,
			}}
		>
			<Canvas
				style={{
					pointerEvents: scroll > 0.3 ? "none" : "initial",
					width: "600px", //cambiare a 1380px di larghezza schermo
				}}
			>
				<Scene scroll={scroll} />
			</Canvas>
		</div>
	);
}

function Scene({ scroll, ...props }) {
	const [distanceX, setDistanceX] = useState(0);
	const [distanceY, setDistanceY] = useState(0);
	const [horizontalScale, setHorizontalScale] = useState(
		window.innerWidth / 1380
	);
	const [wink, setWink] = useState(false);

	const eyeRightRef = useRef();
	const eyeLeftRef = useRef();

	const { nodes, materials } = useSpline(
		"https://prod.spline.design/9YUDlXbugzIgR5GW/scene.splinecode"
	);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", handleResize);
	});

	const handleResize = () => {
		let horizontalScale = window.innerWidth / 1380;
		setHorizontalScale(horizontalScale);
	};

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		let distanceX =
			((clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;

		let distanceY =
			((clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * 100;

		setDistanceX(distanceX);
		setDistanceY(distanceY);
	};

	const springs = useSpring({
		eyeScale: wink ? [1, 0.55, 1] : [1, 1, 1],
		config: {
			mass: 1,
			friction: 15,
			tension: 200,
		},
	});

	const eyeMaterial = (
		<meshStandardMaterial
			attach="material"
			color="white"
			roughness={0.3}
			metalness={1.0}
		/>
	);

	const hairMaterial = (
		<meshStandardMaterial
			attach="material"
			color={"saddlebrown"}
			roughness={0.8}
			metalness={0.4}
		/>
	);

	return (
		<>
			<group>
				<group
					name="Head 2"
					rotation={[(distanceY / 100) * 0.5, (distanceX / 100) * 0.6, 0]}
					scale={(0.8 * (1 - scroll) + 0.2) * horizontalScale}
					position={[0, (window.innerHeight / 2) * scroll - 70 * scroll, 0]}
					onPointerEnter={() => {
						setWink(true);
					}}
					onPointerLeave={() => {
						setWink(false);
					}}
				>
					<group
						name="Glasses"
						position={[-0.22, -8.86, 224.15]}
						rotation={[0.11, 0, 0]}
					>
						<mesh
							name="Cube"
							geometry={nodes.Cube.geometry}
							material={materials.Glasses}
							castShadow
							receiveShadow
							position={[0.88, 29.52, 5.77]}
							scale={[1, 1, 0.13]}
						/>
						<mesh
							name="Torus 2"
							geometry={nodes["Torus 2"].geometry}
							material={materials.Glasses}
							castShadow
							receiveShadow
							position={[102.43, -2.88, 0]}
							rotation={[-0.22, 0.17, 0]}
							scale={1}
						/>
						<mesh
							name="Torus"
							geometry={nodes.Torus.geometry}
							material={materials.Glasses}
							castShadow
							receiveShadow
							position={[-102.39, 3.67, 0.21]}
							rotation={[-0.22, -0.12, 0]}
						/>
					</group>
					<mesh
						name="Ear Left"
						geometry={nodes["Ear Left"].geometry}
						material={materials.Skin}
						castShadow
						receiveShadow
						position={[-177.23, -15.83, 26.21]}
						rotation={[0, -0.17, 0]}
						scale={1}
					/>
					<mesh
						name="Eear Right"
						geometry={nodes["Eear Right"].geometry}
						material={materials.Skin}
						castShadow
						receiveShadow
						position={[173.66, -15.83, 26.21]}
						rotation={[0, 0.17, 0]}
						scale={1}
					/>
					<mesh
						name="Hair Short"
						geometry={nodes["Hair Short"].geometry}
						castShadow
						receiveShadow
						position={[-6.02, 138.19, -18.14]}
					>
						{hairMaterial}
					</mesh>
					<mesh
						name="Mouth"
						geometry={nodes.Mouth.geometry}
						material={materials.Mouth}
						castShadow
						receiveShadow
						position={[-0.24, -61.63, 208.25]}
						rotation={[0, 0, 2.67]}
						scale={1}
					/>
					<mesh
						name="Nose"
						geometry={nodes.Nose.geometry}
						material={materials["Nose Material"]}
						castShadow
						receiveShadow
						position={[-0.02, -40.21, 205.94]}
					/>
					<mesh
						name="Eyebrows Right"
						geometry={nodes["Eyebrows Right"].geometry}
						material={materials.Eyebrows}
						castShadow
						receiveShadow
						position={[-92.47, 47.92, 180.33]}
						rotation={[0.02, -0.37, 1.48]}
						scale={1}
					/>
					<mesh
						name="Eyebrows Left"
						geometry={nodes["Eyebrows Left"].geometry}
						material={materials.Eyebrows}
						castShadow
						receiveShadow
						position={[98.53, 44.92, 180.33]}
						rotation={[-0.03, 0.29, 1.64]}
						scale={1}
					/>
					<group name="Eyes" position={[0.47, -12.98, 183.26]}>
						<animated.mesh
							name="Eye Right"
							geometry={nodes["Eye Right"].geometry}
							castShadow
							receiveShadow
							position={[103.61, 0, 0]}
							rotation={[-0.06, 0, 0]}
							ref={eyeRightRef}
							scale={springs.eyeScale}
						>
							{eyeMaterial}
						</animated.mesh>
						<animated.mesh
							name="Eye Left"
							geometry={nodes["Eye Left"].geometry}
							castShadow
							receiveShadow
							position={[-103.61, 0, 0]}
							rotation={[-0.06, 0, 0]}
							scale={springs.eyeScale}
							ref={eyeLeftRef}
						>
							{eyeMaterial}
						</animated.mesh>
					</group>
					<mesh
						name="Face"
						geometry={nodes.Face.geometry}
						material={materials.Skin}
						castShadow
						receiveShadow
						position={[0, -46.29, 14.72]}
						scale={[1, 0.88, 1]}
					/>
				</group>
				<directionalLight
					name="Directional Light"
					castShadow
					intensity={1}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-near={-10000}
					shadow-camera-far={100000}
					shadow-camera-left={-500}
					shadow-camera-right={500}
					shadow-camera-top={500}
					shadow-camera-bottom={-500}
					position={[-359.67, 278.45, 438.78]}
				/>
				<OrthographicCamera
					makeDefault={true}
					position={[0, 0, 300]}
					zoom={1}
				/>
				<hemisphereLight
					name="Default Ambient Light"
					intensity={1}
					color="#eaeaea"
				/>
				<pointLight
					name="Point Light"
					intensity={3.3}
					distance={400}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-near={100}
					shadow-camera-far={2500}
					color="#feaeae"
					position={[distanceX * 5, -distanceY * 5, 300]}
				/>
			</group>
		</>
	);
}
