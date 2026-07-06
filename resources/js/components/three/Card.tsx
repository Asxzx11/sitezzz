import { RoundedBox, Text, Image, Edges } from "@react-three/drei";
import { useMemo } from "react";
import { createCardBackgroundTexture } from "./fabricTexture";

const CARD_TOP = 0.85;

export default function Card() {
    const cardBgMap = useMemo(() => createCardBackgroundTexture(), []);

    return (
        <group position={[0, -0.35, 0]}>
            {/* ── Background card ── */}
            <RoundedBox
                args={[1.75, 2.4, 0.03]}
                radius={0.1}
                smoothness={8}
                position={[0, 0.05, 0.01]}
            >
                <meshStandardMaterial
                    map={cardBgMap}
                    roughness={0.7}
                    metalness={0.1}
                />
            </RoundedBox>

            {/* ── Glow line atas ── */}
            <mesh position={[0, 1.22, 0.026]}>
                <boxGeometry args={[1.2, 0.008, 0.003]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    emissive="#06b6d4"
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.7}
                />
            </mesh>

            {/* ── Accent corner kiri atas ── */}
            <mesh position={[-0.74, 1.0, 0.026]} rotation={[0, 0, 0.5]}>
                <boxGeometry args={[0.25, 0.008, 0.005]} />
                <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.4} transparent opacity={0.5} />
            </mesh>

            {/* ── Accent corner kanan atas ── */}
            <mesh position={[0.74, 1.0, 0.026]} rotation={[0, 0, -0.5]}>
                <boxGeometry args={[0.25, 0.008, 0.005]} />
                <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.4} transparent opacity={0.5} />
            </mesh>

            {/* ── Frame holder edge ── */}
            <RoundedBox
                args={[1.75, 2.4, 0.03]}
                radius={0.1}
                smoothness={8}
                position={[0, 0.05, 0.03]}
            >
                <meshBasicMaterial transparent opacity={0} depthWrite={false} />
                <Edges linewidth={1} color="#475569" transparent opacity={0.4} />
            </RoundedBox>

            {/* ── Foto ── */}
            <Image
                url="/images/as.jpeg"
                position={[0, 0.38, 0.04]}
                scale={[1.3, 1.3]}
                radius={0.06}
            />

            {/* ── Thin line separator di bawah foto ── */}
            <mesh position={[0, -0.38, 0.04]}>
                <boxGeometry args={[1.1, 0.006, 0.002]} />
                <meshStandardMaterial
                    color="#22d3ee"
                    emissive="#22d3ee"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.4}
                />
            </mesh>

            {/* ── Nama ── */}
            <Text position={[0, -0.55, 0.045]} fontSize={0.14} color="#ffffff" anchorX="center">
                Agung Setiawan
            </Text>

            {/* ── Jabatan ── */}
            <Text position={[0, -0.76, 0.045]} fontSize={0.075} color="#22d3ee" anchorX="center">
                Junior Web Developer
            </Text>

            {/* ── Bottom accent bar ── */}
            <mesh position={[0, -1.1, 0.04]}>
                <boxGeometry args={[1.75, 0.06, 0.01]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    emissive="#06b6d4"
                    emissiveIntensity={0.3}
                />
            </mesh>

            {/* ── Code icon di tengah bottom bar ── */}
            <Text position={[0, -1.1, 0.05]} fontSize={0.04} color="#ffffff" anchorX="center">
                {"</>"}
            </Text>
        </group>
    );
}

export { CARD_TOP };
