import { usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaAward } from "react-icons/fa";

interface CertificateItem {
    id: number;
    title: string;
    issuer: string;
    year: string;
    image: string;
}


export default function Certificate() {
    const { certificates } = usePage<{ certificates: CertificateItem[] }>().props;
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % certificates.length);
        }
    };

    const goPrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                (selectedIndex - 1 + certificates.length) % certificates.length
            );
        }
    };

    if (certificates.length === 0) {
        return (
            <section
                id="certificate"
                className="relative overflow-hidden bg-slate-950 py-28 lg:py-36"
            >
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                <div className="mx-auto max-w-7xl px-8 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Sertifikasi
                    </p>
                    <h2 className="text-4xl font-black text-white lg:text-5xl">
                        Sertifikat & <span className="text-cyan-400">Pencapaian</span>
                    </h2>
                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    <p className="mx-auto mt-10 text-slate-500">
                        Sertifikat akan segera ditambahkan.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="certificate"
            className="relative overflow-hidden bg-slate-950 py-28 lg:py-36"
        >
            {/* Background Glows */}
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/5 blur-[120px]" />

            {/* Divider line top */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-8">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Sertifikasi
                    </p>
                    <h2 className="text-4xl font-black text-white lg:text-5xl">
                        Sertifikat & <span className="text-cyan-400">Pencapaian</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                    />
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mx-auto mt-6 max-w-xl text-sm leading-6 text-slate-500"
                    >
                        Berikut sertifikat profesional yang telah saya peroleh selama
                        perjalanan belajar di bidang web development.
                    </motion.p>
                </motion.div>

                {/* ── Certificate Gallery Grid ── */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                            }
                        }
                    }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 20 },
                                visible: { 
                                    opacity: 1, 
                                    y: 0, 
                                    scale: 1, 
                                    rotateX: 0,
                                    transition: { type: "spring", stiffness: 100, damping: 15 } 
                                }
                            }}
                            className="group cursor-pointer"
                            onClick={() => openLightbox(i)}
                            style={{ perspective: 1000 }}
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]">

                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                                    <img
                                        src={`/storage/${cert.image}`}
                                        alt={cert.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                                        <div className="rounded-full bg-cyan-500/90 p-3 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                                        <FaAward className="text-cyan-500/50" />
                                        <span>{cert.issuer}</span>
                                        <span className="h-1 w-1 rounded-full bg-slate-600" />
                                        <span>{cert.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Stats ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
                    className="mt-16 flex flex-wrap justify-center gap-8"
                >
                    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-4 shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-colors hover:border-cyan-500/20">
                        <p className="text-xl font-black text-cyan-400">{certificates.length}</p>
                        <p className="text-xs text-slate-500">Sertifikat Diperoleh</p>
                    </div>
                </motion.div>
            </div>

            {/* ── Lightbox Modal ── */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close */}
                        <button
                            onClick={closeLightbox}
                            className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                        >
                            <FaTimes className="text-lg" />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => {
 e.stopPropagation(); goPrev(); 
}}
                            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-8"
                        >
                            <FaChevronLeft className="text-lg" />
                        </button>

                        {/* Next */}
                        <button
                            onClick={(e) => {
 e.stopPropagation(); goNext(); 
}}
                            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-8"
                        >
                            <FaChevronRight className="text-lg" />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="max-h-[85vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`/storage/${certificates[selectedIndex].image}`}
                                alt={certificates[selectedIndex].title}
                                className="max-h-[75vh] w-auto rounded-lg object-contain shadow-2xl"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-bold text-white">
                                    {certificates[selectedIndex].title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    {certificates[selectedIndex].issuer} — {certificates[selectedIndex].year}
                                </p>
                                <p className="mt-2 text-xs text-slate-600">
                                    {selectedIndex + 1} / {certificates.length}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
