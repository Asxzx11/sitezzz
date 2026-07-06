import { Head, useForm, router } from "@inertiajs/react";
import type { FormEvent} from "react";
import { useRef, useState } from "react";
import { FaPlus, FaTrash, FaAward, FaUpload } from "react-icons/fa";

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    year: string;
    image: string;
}

interface Props {
    certificates: Certificate[];
}

export default function CertificatesIndex({ certificates }: Props) {
    const fileRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [deleting, setDeleting] = useState<number | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        issuer: "",
        year: new Date().getFullYear().toString(),
        image: null as File | null,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setData("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post("/certificates", {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setPreview(null);

                if (fileRef.current) {
fileRef.current.value = "";
}
            },
        });
    };

    const handleDelete = (id: number) => {
        if (!confirm("Yakin ingin menghapus sertifikat ini?")) {
return;
}

        setDeleting(id);
        router.delete(`/certificates/${id}`, {
            onFinish: () => setDeleting(null),
        });
    };

    return (
        <>
            <Head title="Kelola Sertifikat" />

            <div className="mx-auto max-w-5xl px-4 py-8">
                <div className="mb-8 flex items-center gap-3">
                    <FaAward className="text-2xl text-cyan-500" />
                    <h1 className="text-2xl font-bold text-foreground">
                        Kelola Sertifikat
                    </h1>
                </div>

                {/* ── Upload Form ── */}
                <div className="mb-10 rounded-xl border bg-card p-6 shadow-sm">
                    <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                        <FaPlus className="text-cyan-500" /> Tambah Sertifikat Baru
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {/* Title */}
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Judul Sertifikat
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                    placeholder="Contoh: Laravel Developer"
                                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                                {errors.title && (
                                    <p className="mt-1 text-xs text-red-500">{errors.title}</p>
                                )}
                            </div>

                            {/* Issuer */}
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Penerbit
                                </label>
                                <input
                                    type="text"
                                    value={data.issuer}
                                    onChange={(e) => setData("issuer", e.target.value)}
                                    placeholder="Contoh: Udemy"
                                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                                {errors.issuer && (
                                    <p className="mt-1 text-xs text-red-500">{errors.issuer}</p>
                                )}
                            </div>

                            {/* Year */}
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Tahun
                                </label>
                                <input
                                    type="text"
                                    value={data.year}
                                    onChange={(e) => setData("year", e.target.value)}
                                    placeholder="2024"
                                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                                {errors.year && (
                                    <p className="mt-1 text-xs text-red-500">{errors.year}</p>
                                )}
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Gambar Sertifikat
                            </label>
                            <div className="flex items-start gap-4">
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-dashed border-gray-300 px-6 py-4 transition hover:border-cyan-500 dark:border-gray-600 dark:hover:border-cyan-500">
                                    <FaUpload className="text-gray-400" />
                                    <span className="text-sm text-gray-500">
                                        {data.image ? data.image.name : "Pilih gambar..."}
                                    </span>
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        accept="image/jpeg,image/png,image/jpg,image/webp"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>

                                {preview && (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="h-20 w-28 rounded-lg border object-cover"
                                    />
                                )}
                            </div>
                            {errors.image && (
                                <p className="mt-1 text-xs text-red-500">{errors.image}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"
                        >
                            <FaPlus />
                            {processing ? "Mengupload..." : "Tambah Sertifikat"}
                        </button>
                    </form>
                </div>

                {/* ── Certificate List ── */}
                <div className="rounded-xl border bg-card shadow-sm">
                    <div className="border-b px-6 py-4">
                        <h2 className="text-lg font-semibold">
                            Daftar Sertifikat ({certificates.length})
                        </h2>
                    </div>

                    {certificates.length === 0 ? (
                        <div className="flex flex-col items-center gap-3 py-16 text-gray-400">
                            <FaAward className="text-4xl" />
                            <p className="text-sm">Belum ada sertifikat. Upload sertifikat pertamamu!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
                            {certificates.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="group relative overflow-hidden rounded-xl border bg-background transition hover:shadow-md"
                                >
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <img
                                            src={`/storage/${cert.image}`}
                                            alt={cert.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="p-4">
                                        <h3 className="text-sm font-bold">{cert.title}</h3>
                                        <p className="mt-1 text-xs text-gray-500">
                                            {cert.issuer} — {cert.year}
                                        </p>
                                    </div>

                                    {/* Delete button */}
                                    <button
                                        onClick={() => handleDelete(cert.id)}
                                        disabled={deleting === cert.id}
                                        className="absolute right-2 top-2 rounded-lg bg-red-500/90 p-2 text-white opacity-0 transition-all hover:bg-red-600 group-hover:opacity-100 disabled:opacity-50"
                                    >
                                        <FaTrash className="text-xs" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

CertificatesIndex.layout = {
    breadcrumbs: [
        { title: "Dashboard", href: "/dashboard" },
        { title: "Sertifikat", href: "/certificates" },
    ],
};
