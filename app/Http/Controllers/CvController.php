<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CvController extends Controller
{
    /**
     * Show CV management page.
     */
    public function index()
    {
        $cvExists = Storage::disk('public')->exists('cv/resume.pdf');
        $cvUrl = $cvExists ? asset('storage/cv/resume.pdf') : null;
        $cvSize = $cvExists
            ? round(Storage::disk('public')->size('cv/resume.pdf') / 1024, 1)
            : null;
        $cvUpdatedAt = $cvExists
            ? date('d M Y, H:i', Storage::disk('public')->lastModified('cv/resume.pdf'))
            : null;

        return Inertia::render('cv/index', [
            'cvUrl' => $cvUrl,
            'cvSize' => $cvSize,
            'cvUpdatedAt' => $cvUpdatedAt,
        ]);
    }

    /**
     * Upload / replace CV.
     */
    public function store(Request $request)
    {
        $request->validate([
            'cv' => 'required|file|mimes:pdf|max:5120',
        ]);

        // Delete old CV if exists
        if (Storage::disk('public')->exists('cv/resume.pdf')) {
            Storage::disk('public')->delete('cv/resume.pdf');
        }

        $request->file('cv')->storeAs('cv', 'resume.pdf', 'public');

        return redirect()->back()->with('success', 'CV berhasil diupload!');
    }

    /**
     * Delete CV.
     */
    public function destroy()
    {
        if (Storage::disk('public')->exists('cv/resume.pdf')) {
            Storage::disk('public')->delete('cv/resume.pdf');
        }

        return redirect()->back()->with('success', 'CV berhasil dihapus!');
    }

    /**
     * Public download CV.
     */
    public function download()
    {
        if (!Storage::disk('public')->exists('cv/resume.pdf')) {
            abort(404, 'CV belum diupload.');
        }

        return Storage::disk('public')->download('cv/resume.pdf', 'Agung_Setiawan_CV.pdf');
    }
}
