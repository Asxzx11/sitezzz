import { Head, useForm, router } from "@inertiajs/react";
import type { FormEvent} from "react";
import { useRef } from "react";
import { FaFilePdf, FaUpload, FaDownload, FaTrash, FaCheckCircle } from "react-icons/fa";

interface Props {
    cvUrl: string | null;
    cvSize: number | null;
    cvUpdatedAt: string | null;
}

export default function CvIndex({ cvUrl, cvSize, cvUpdatedAt }: Props) {
    const fileRef = useRef<HTMLInputElement>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        cv: null as File | null,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setData("cv", file);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post("/cv", {
            forceFormData: true,
            onSuccess: () => {
                reset();

                if (fileRef.current) {
fileRef.current.value = "";
}
            },
        });
    };

    const handleDelete = () => {
        if (!confirm("Yakin ingin menghapus CV?")) {
return;
}

        router.delete("/cv");
    };

    return (
        <>
            <Head title="Kelola CV" />

            <div className="mx-auto max-w-3xl px-4 py-8">
                <div className="mb-8 flex items-center gap-3">
                    <FaFilePdf className="text-2xl text-red-500" />
                    <h1 className="text-2xl font-bold text-foreground">Kelola CV</h1>
                </div>

                {/* ── Current CV Status ── */}
                <div className="mb-8 rounded-xl border bg-card p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold">Status CV</h2>

                    {cvUrl ? (
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10">
                                    <FaFilePdf className="text-2xl text-red-500" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <FaCheckCircle className="text-sm text-emerald-500" />
                                        <p className="font-semibold text-foreground">CV Tersedia</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-muted-foreground">
                                        {cvSize} KB • Diupdate {cvUpdatedAt}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <a
                                    href="/cv/download"
                                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
                                >
                                    <FaDownload /> Download
                                </a>
                                <button
                                    onClick={handleDelete}
                                    className="inline-flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500/20"
                                >
                                    <FaTrash /> Hapus
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3 py-8 text-muted-foreground">
                            <FaFilePdf className="text-4xl opacity-30" />
                            <p className="text-sm">Belum ada CV yang diupload.</p>
                        </div>
                    )}
                </div>

                {/* ── Upload Form ── */}
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold">
                        {cvUrl ? "Ganti CV" : "Upload CV"}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                File CV (PDF, maks 5MB)
                            </label>
                            <label className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed border-gray-300 px-6 py-8 transition hover:border-cyan-500 dark:border-gray-600 dark:hover:border-cyan-500">
                                <FaUpload className="text-2xl text-gray-400" />
                                <span className="text-sm text-gray-500">
                                    {data.cv ? data.cv.name : "Klik untuk memilih file PDF..."}
                                </span>
                                {data.cv && (
                                    <span className="text-xs text-cyan-500">
                                        {(data.cv.size / 1024).toFixed(1)} KB
                                    </span>
                                )}
                                <input
                                    ref={fileRef}
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                            {errors.cv && (
                                <p className="mt-2 text-xs text-red-500">{errors.cv}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing || !data.cv}
                            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"
                        >
                            <FaUpload />
                            {processing ? "Mengupload..." : "Upload CV"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

CvIndex.layout = {
    breadcrumbs: [
        { title: "Dashboard", href: "/dashboard" },
        { title: "CV", href: "/cv" },
    ],
};
