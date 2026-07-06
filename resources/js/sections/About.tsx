import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { FaLaravel, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiInertia } from "react-icons/si";

const techStack = [
    { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiInertia, name: "Inertia", color: "#9553E9" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
];

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 15 },
    },
};

const textFade: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const rotateGlow = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-slate-950 py-28 lg:py-36"
        >
            {/* Parallax Background Glows */}
            <motion.div style={{ y: yBackground, rotate: rotateGlow }} className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
            <motion.div style={{ y: yBackground }} className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-8">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="mb-20 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Tentang Saya
                    </p>
                    <h2 className="text-4xl font-black text-white lg:text-5xl">
                        Siapa <span className="text-cyan-400">Saya?</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                    />
                </motion.div>

                {/* ── Content Grid ── */}
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

                    {/* LEFT — Bio */}
                    <motion.div
                        initial={{ opacity: 0, rotateY: 30, x: -50, z: -100 }}
                        whileInView={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ perspective: 1000 }}
                    >
                        <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm lg:p-10 transition-transform duration-500 hover:scale-[1.02] hover:bg-white/[0.04]">

                            {/* Glow dot */}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-1 left-8 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" 
                            />

                            <h3 className="mb-6 text-2xl font-bold text-white">
                                Agung Setiawan
                            </h3>

                            <motion.div 
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-4 text-[15px] leading-7 text-slate-400"
                            >
                                <motion.p variants={textFade}>
                                    Saya adalah seorang <span className="text-cyan-400 font-medium">Fresh Graduete</span> Program Studi
                                    D3 Manajemen Informatika yang memiliki passion dalam membangun aplikasi web modern dan responsif.
                                    Berfokus pada ekosistem <span className="text-white font-medium">Laravel</span> dan <span className="text-white font-medium">React</span> dengan
                                    Inertia.js sebagai jembatan antara backend dan frontend.
                                </motion.p>
                                <motion.p variants={textFade}>
                                    Saya percaya bahwa kode yang baik bukan hanya tentang fungsionalitas,
                                    tetapi juga tentang pengalaman pengguna yang luar biasa. Setiap project
                                    yang saya kerjakan selalu mengedepankan performa, estetika, dan
                                    kemudahan penggunaan.
                                </motion.p>
                                <motion.p variants={textFade}>
                                    Saat ini saya terus belajar dan mengeksplorasi teknologi baru,
                                    termasuk <span className="text-white font-medium">TypeScript</span>, <span className="text-white font-medium">Three.js</span>,
                                    dan <span className="text-white font-medium">AI integration</span> untuk meningkatkan kualitas
                                    aplikasi yang saya bangun.
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT — Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, rotateY: -30, x: 50, z: -100 }}
                        whileInView={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{ perspective: 1000 }}
                    >
                        <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm lg:p-10 transition-transform duration-500 hover:scale-[1.02] hover:bg-white/[0.04]">

                            {/* Glow dot */}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                                className="absolute -top-1 left-8 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]" 
                            />

                            <h3 className="mb-3 text-2xl font-bold text-white">
                                Tech Stack
                            </h3>
                            <p className="mb-8 text-sm text-slate-500">
                                Teknologi yang saya gunakan sehari-hari
                            </p>

                            <motion.div 
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-3 gap-4"
                            >
                                {techStack.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={popIn}
                                        whileHover={{ scale: 1.1, y: -5, rotate: [-1, 1, -1, 0] }}
                                        className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-cyan-500/20 hover:bg-white/[0.05] hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                                    >
                                        <tech.icon
                                            className="text-3xl transition-transform duration-300"
                                            style={{ color: tech.color }}
                                        />
                                        <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
