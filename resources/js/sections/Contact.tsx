import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaCheckCircle,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "agungawan355@gmail.com",
        href: "mailto:agungawan355@gmail.com",
        color: "#22d3ee",
    },
    {
        icon: FaMapMarkerAlt,
        label: "Lokasi",
        value: "Pekanbaru",
        href: null,
        color: "#f472b6",
    },
];

const socialLinks = [
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/Asxzx11",
        color: "#ffffff",
        hoverBg: "hover:bg-white/10",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/agung-setiawan-as/",
        color: "#0A66C2",
        hoverBg: "hover:bg-[#0A66C2]/10",
    },
    {
        icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/as.setiawanxz_",
        color: "#E4405F",
        hoverBg: "hover:bg-[#E4405F]/10",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [sent, setSent] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Buka mailto link dengan data form
        const mailtoLink = `mailto:agungsetiawan@mail.com?subject=${encodeURIComponent(
            formData.subject || "Pesan dari Portfolio"
        )}&body=${encodeURIComponent(
            `Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.open(mailtoLink, "_blank");

        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-slate-950 py-28 lg:py-36"
        >
            {/* Background Glows */}
            <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/5 blur-[120px]" />

            {/* Divider top */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-8">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Hubungi Saya
                    </p>
                    <h2 className="text-4xl font-black text-white lg:text-5xl">
                        Mari <span className="text-cyan-400">Bekerja Sama</span>
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
                        Punya project menarik atau ingin berkolaborasi?
                        Jangan ragu untuk menghubungi saya!
                    </motion.p>
                </motion.div>

                {/* ── Content Grid ── */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

                    {/* LEFT — Info & Social (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: 20 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ perspective: 1000 }}
                        className="lg:col-span-2"
                    >
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >

                            {/* Contact cards */}
                            {contactInfo.map((info) => (
                                <motion.div
                                    key={info.label}
                                    variants={{
                                        hidden: { opacity: 0, x: -30, scale: 0.9 },
                                        visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 120 } }
                                    }}
                                >
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.04]"
                                        >
                                            <div
                                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.04]"
                                            >
                                                <info.icon className="text-xl" style={{ color: info.color }} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-medium text-slate-500">{info.label}</p>
                                                <p className="mt-0.5 text-sm font-semibold text-white">{info.value}</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                                            <div
                                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.04]"
                                            >
                                                <info.icon className="text-xl" style={{ color: info.color }} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-medium text-slate-500">{info.label}</p>
                                                <p className="mt-0.5 text-sm font-semibold text-white">{info.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Social links */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30, scale: 0.9 },
                                    visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 120 } }
                                }}
                                className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
                            >
                                <p className="mb-4 text-xs font-medium text-slate-500">
                                    Temukan saya di
                                </p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.15, y: -5, rotate: [-2, 2, -2, 0] }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] transition-colors duration-300 ${social.hoverBg}`}
                                            title={social.label}
                                        >
                                            <social.icon
                                                className="text-xl"
                                                style={{ color: social.color }}
                                            />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Availability badge */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -30, scale: 0.9 },
                                    visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 120 } }
                                }}
                                className="flex items-center gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-5 py-4"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                                </span>
                                <p className="text-sm text-slate-400">
                                    <span className="font-medium text-emerald-400">Available</span> untuk project freelance
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Contact Form (3 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -20 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{ perspective: 1000 }}
                        className="lg:col-span-3"
                    >
                        <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm lg:p-10 transition-transform duration-500 hover:scale-[1.01] hover:bg-white/[0.03]">

                            {/* Glow dot */}
                            <div className="absolute -top-1 left-8 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

                            <h3 className="mb-6 text-xl font-bold text-white">
                                Kirim Pesan
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label className="mb-1.5 block text-xs font-medium text-slate-400">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.05]"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="mb-1.5 block text-xs font-medium text-slate-400">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.05]"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-slate-400">
                                        Subjek
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project Collaboration"
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.05]"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-1.5 block text-xs font-medium text-slate-400">
                                        Pesan
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Ceritakan tentang project Anda..."
                                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.05]"
                                    />
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] sm:w-auto"
                                >
                                    <FaPaperPlane />
                                    Kirim Pesan
                                </motion.button>

                                {/* Success message */}
                                {sent && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                                    >
                                        <FaCheckCircle />
                                        Pesan terkirim! Terima kasih telah menghubungi saya.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* ── Footer credit ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 border-t border-white/5 pt-8 text-center"
                >
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} Agung Setiawan. Built with{" "}
                        <span className="text-cyan-500">Laravel</span>,{" "}
                        <span className="text-cyan-500">React</span> &{" "}
                        <span className="text-cyan-500">Three.js</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
