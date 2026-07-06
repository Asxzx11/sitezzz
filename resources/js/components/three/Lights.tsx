export default function Lights() {
    return (
        <>

        <ambientLight intensity={1.5} />

        <directionalLight
        castShadow
        position={[5, 5, 5,]}
        intensity={3}
        />

        <directionalLight
        position={[5, 2, 5]}
        intensity={1}
        />
        </>
    )
}