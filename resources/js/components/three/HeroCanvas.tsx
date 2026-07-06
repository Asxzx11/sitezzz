import { Canvas } from "@react-three/fiber";
import Lanyard from "./Lanyard";

export default function HeroCanvas() {
    return (
        <Canvas
            className="h-full w-full"
            gl={{ alpha: true, antialias: true }}
            camera={{ position: [0, -2.1, 8.2], fov: 35 }}
            style={{ background: "transparent" }}
        >
            <ambientLight intensity={1.8} />

            <directionalLight position={[5, 5, 5]} intensity={4} />

            <directionalLight position={[-5, 2, 2]} intensity={1} />

            <pointLight position={[0, -2, 2]} intensity={5} color="#2563eb" />

            <Lanyard />
        </Canvas>
    );
}
