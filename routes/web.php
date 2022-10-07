<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('login');
});

Route::get('/encrypted/pass', [ AuthController::class, 'encrypted']);
Route::get('/login', function () { return view('login'); })->name('login');
Route::get('/logout',[ AuthController::class, 'logout']);

Route::post('/api/admin/auth',[ AuthController::class, 'authenticate']);
Route::post('/api/admin/register',[ AuthController::class, 'register']);

Route::get('/register', [AuthController::class, 'registerUser']);

Route::get('/pokemon', [AdminController::class, 'pokemon'])->middleware('auth');


