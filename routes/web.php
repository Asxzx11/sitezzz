<?php

use App\Http\Controllers\CertificateController;
use App\Http\Controllers\CvController;
use App\Models\Certificate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('portofolio', [
        'certificates' => Certificate::orderBy('created_at', 'desc')->get(),
    ]);
})->name('home');

// Public CV download
Route::get('cv/download', [CvController::class, 'download'])->name('cv.download');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get('certificates', [CertificateController::class, 'index'])->name('certificates.index');
    Route::post('certificates', [CertificateController::class, 'store'])->name('certificates.store');
    Route::delete('certificates/{certificate}', [CertificateController::class, 'destroy'])->name('certificates.destroy');

    Route::get('cv', [CvController::class, 'index'])->name('cv.index');
    Route::post('cv', [CvController::class, 'store'])->name('cv.store');
    Route::delete('cv', [CvController::class, 'destroy'])->name('cv.destroy');
});

require __DIR__.'/settings.php';
