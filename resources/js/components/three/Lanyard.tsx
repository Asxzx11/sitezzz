import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Card from "./Card";
import Hook from "./Hook";
import Rope from "./Rope";

const BASE_Y = 0.52;

export default function Lanyard() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) {
return;
}

        const t = state.clock.elapsedTime;
        const pointerX = state.pointer.x * 0.12;
        const pointerY = state.pointer.y * 0.12;

        groupRef.current.position.y = BASE_Y + Math.sin(t) * 0.05;

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            Math.sin(t * 0.4) * 0.18 + pointerY,
            0.05,
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            Math.cos(t * 0.3) * 0.18 + pointerX,
            0.05,
        );
    });

    return (
        <group ref={groupRef}>
            <Hook />
            <Rope />
            <Card />
        </group>
    );
}
