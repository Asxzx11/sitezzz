import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import HeroCanvas from "@/components/three/HeroCanvas";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

const textReveal: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24"
        >
            {/* Background Blur */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-0 top-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
            ></motion.div>
            
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-8 pt-2 lg:grid-cols-2 lg:pt-0">
            
                {/* LEFT */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="z-10"
                >
                    <motion.p variants={itemVariants} className="mb-4 font-medium tracking-wide text-cyan-400">
                        Hallo, Saya
                    </motion.p>

                    <div className="overflow-hidden">
                        <motion.h1 variants={textReveal} className="text-6xl font-black leading-tight text-white lg:text-8xl">
                            Agung
                            <br />
                            Setiawan
                        </motion.h1>
                    </div>

                    <motion.h2 variants={itemVariants} className="mt-6 text-3xl font-semibold text-cyan-400">
                        Junior Web Developer
                    </motion.h2>

                    <motion.p variants={itemVariants} className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                        Saya adalah Junior Web Developer yang berfokus pada
                        Laravel Inertia dan React
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-10 flex gap-5">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-400"
                        >
                            Explore
                        </motion.button>
                        <motion.a
                            href="/cv/download"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,1)", color: "white" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex items-center justify-center rounded-xl border border-cyan-500 px-8 py-4 text-cyan-400"
                        >
                            Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* RIGHT — lanyard menempel di bawah navbar */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    className="relative h-[calc(100vh-6rem)] min-h-120 w-full pt-1 lg:sticky lg:top-24 lg:pt-2"
                >
                    <HeroCanvas />
                </motion.div>

            </div>
        </section>
    );
}