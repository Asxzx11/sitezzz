import * as THREE from "three";

export function createFabricTexture(baseColor = "#1e3a5f") {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, 256, 256);

    for (let i = -256; i < 512; i += 6) {
        ctx.strokeStyle = `rgba(255,255,255,${0.025 + Math.random() * 0.025})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 256, 256);
        ctx.stroke();
    }

    for (let i = -256; i < 512; i += 6) {
        ctx.strokeStyle = `rgba(0,0,0,${0.04 + Math.random() * 0.03})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(i, 256);
        ctx.lineTo(i + 256, 0);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 6);
    texture.colorSpace = THREE.SRGBColorSpace;

    return texture;
}

export function createCardBackgroundTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 700;
    const ctx = canvas.getContext("2d")!;

    /* Premium gradient */
    const gradient = ctx.createLinearGradient(0, 0, 0, 700);
    gradient.addColorStop(0, "#1a3d5c");
    gradient.addColorStop(0.4, "#152d48");
    gradient.addColorStop(0.8, "#0f2035");
    gradient.addColorStop(1, "#0a1628");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 700);

    /* Radial glow di area tengah atas (di belakang foto) */
    const radial = ctx.createRadialGradient(256, 200, 20, 256, 200, 220);
    radial.addColorStop(0, "rgba(34, 211, 238, 0.06)");
    radial.addColorStop(1, "rgba(34, 211, 238, 0)");
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, 512, 700);

    /* Circuit traces */
    ctx.strokeStyle = "rgba(34, 211, 238, 0.12)";
    ctx.lineWidth = 1;
    const drawCircuit = (ox: number, oy: number, flip = false) => {
        const dir = flip ? -1 : 1;
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(ox + 50 * dir, oy);
        ctx.lineTo(ox + 50 * dir, oy + 30);
        ctx.lineTo(ox + 25 * dir, oy + 30);
        ctx.lineTo(ox + 25 * dir, oy + 60);
        ctx.lineTo(ox + 70 * dir, oy + 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ox + 70 * dir, oy + 60, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.15)";
        ctx.fill();
    };
    drawCircuit(20, 20);
    drawCircuit(492, 20, true);
    drawCircuit(20, 580);
    drawCircuit(492, 580, true);

    /* Dot grid */
    ctx.fillStyle = "rgba(34, 211, 238, 0.035)";

    for (let x = 0; x < 512; x += 22) {
        for (let y = 0; y < 700; y += 22) {
            ctx.beginPath();
            ctx.arc(x, y, 0.8, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    /* Bottom accent gradient */
    const footerGrad = ctx.createLinearGradient(0, 650, 0, 700);
    footerGrad.addColorStop(0, "rgba(6, 182, 212, 0)");
    footerGrad.addColorStop(1, "rgba(6, 182, 212, 0.1)");
    ctx.fillStyle = footerGrad;
    ctx.fillRect(0, 650, 512, 50);

    /* Vignette */
    const vignette = ctx.createRadialGradient(256, 350, 120, 256, 350, 360);
    vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
    vignette.addColorStop(1, "rgba(0, 0, 0, 0.12)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, 512, 700);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    return texture;
}
