import { HOOK_Y } from "./Rope";

export default function Hook() {
    return (
        <group position={[0, HOOK_Y, -0.25]}>
            {/* Bar horizontal di puncak tali V */}
            <mesh position={[0, 0.04, 0]}>
                <boxGeometry args={[0.46, 0.035, 0.03]} />
                <meshStandardMaterial color="#1a3352" roughness={0.9} metalness={0.05} />
            </mesh>

            {/* Cincin metal */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
                <torusGeometry args={[0.07, 0.012, 16, 32]} />
                <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.15} />
            </mesh>
        </group>
    );
}
