import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6"
        >
            {/* Background Glow */}
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative z-10 max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-4 text-lg text-cyan-400"
                >
                    Halo, saya
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mb-4 text-5xl font-black md:text-7xl"
                >
                    Agung Setiawan
                </motion.h1>

                <TypeAnimation
                    sequence={[
                        "Junior Web Developer",
                        2000,
                        "Laravel Developer",
                        2000,
                        "React Developer",
                        2000,
                        "AI Enthusiast",
                        2000,
                    ]}
                    wrapper="h2"
                    speed={40}
                    repeat={Infinity}
                    className="mb-8 text-2xl font-semibold text-slate-300"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-400"
                >
                    Saya membangun aplikasi web modern menggunakan Laravel,
                    React, TypeScript, dan Kecerdasan Buatan untuk
                    menciptakan solusi yang cepat, skalabel, dan ramah pengguna.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400">
                        Hubungi Saya
                    </button>

                    <button className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white">
                        Download CV
                    </button>
                </motion.div>

                <div className="mt-12 flex justify-center gap-8 text-2xl text-slate-400">
                    <a href="https://github.com/Asxzx11" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/agung-setiawan-as/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://www.instagram.com/as.setiawanxz_" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                    }}
                    className="mt-16 text-slate-500"
                >
                    ↓ Scroll Down
                </motion.div>
            </div>
        </section>
    );
}