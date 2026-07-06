<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CertificateController extends Controller
{
    /**
     * Display a listing of certificates.
     */
    public function index()
    {
        return Inertia::render('certificates/index', [
            'certificates' => Certificate::orderBy('created_at', 'desc')->get(),
        ]);
    }

    /**
     * Store a newly created certificate.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'year' => 'required|string|max:10',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $path = $request->file('image')->store('certificates', 'public');

        Certificate::create([
            'title' => $request->title,
            'issuer' => $request->issuer,
            'year' => $request->year,
            'image' => $path,
        ]);

        return redirect()->back()->with('success', 'Certificate created successfully.');
    }

    /**
     * Remove the specified certificate.
     */
    public function destroy(Certificate $certificate)
    {
        Storage::disk('public')->delete($certificate->image);

        $certificate->delete();

        return redirect()->back()->with('success', 'Certificate deleted successfully.');
    }
}
