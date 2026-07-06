import { Text } from "@react-three/drei";
import { useMemo } from "react";
import { CARD_TOP } from "./Card";
import { createFabricTexture } from "./fabricTexture";

export const HOOK_Y = 2.55;
const CLIP_Y = CARD_TOP + 0.02;
const STRAP_LEN = 1.75;
const STRAP_RADIUS = 0.034;

const fabricProps = {
    roughness: 0.95,
    metalness: 0.02,
    color: "#1a3352",
} as const;

function Strap({
    x,
    rotationZ,
    fabricMap,
    centerY,
}: {
    x: number;
    rotationZ: number;
    fabricMap: ReturnType<typeof createFabricTexture>;
    centerY: number;
}) {
    return (
        <mesh position={[x, centerY, 0]} rotation={[0, 0, rotationZ]}>
            <cylinderGeometry args={[STRAP_RADIUS, STRAP_RADIUS, STRAP_LEN, 32]} />
            <meshStandardMaterial map={fabricMap} {...fabricProps} />
        </mesh>
    );
}

export default function Rope() {
    const fabricMap = useMemo(() => createFabricTexture("#1a3352"), []);

    const strapTop = HOOK_Y - 0.08;
    const strapBottom = CLIP_Y + 0.04;
    const strapCenterY = (strapTop + strapBottom) / 2;

    return (
        <group position={[0, 0, -0.25]}>
            {/* Tali V — kiri & kanan dari hook ke klip */}
            <Strap x={-0.22} rotationZ={0.28} fabricMap={fabricMap} centerY={strapCenterY} />
            <Strap x={0.22} rotationZ={-0.28} fabricMap={fabricMap} centerY={strapCenterY} />

            {/* Tulisan di tengah tali V */}
            <Text
                position={[0, 2.38, 0.04]}
                fontSize={0.085}
                color="#ffffff"
                anchorX="center"
                maxWidth={0.42}
                textAlign="center"
            >
                Agung Setiawan
            </Text>

            <Text
                position={[0, 2.05, 0.04]}
                fontSize={0.055}
                color="#94a3b8"
                anchorX="center"
                maxWidth={0.42}
                textAlign="center"
            >
                junior web developer
            </Text>

            <Text position={[0, 1.72, 0.04]} fontSize={0.085} color="#22d3ee" anchorX="center">
                {"</>"}
            </Text>

            {/* Klip metal — titik pertemuan V */}
            <mesh position={[0, CLIP_Y, 0.03]}>
                <boxGeometry args={[0.12, 0.07, 0.05]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
            </mesh>
        </group>
    );
}
