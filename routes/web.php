<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::get('/blog', function () {
    return redirect('/');
});

Route::get('/page', function () {
    return redirect('/');
});

Route::get('/', 'BlogController@index')->name('blog.index');
Route::get('/page/{id}', 'BlogController@index')->name('blog.index');

Route::get('/blogs/get', 'BlogController@blogs')->name('blogs');
Route::get('/blogs/get/all', 'BlogController@get')->name('blogs.all');

Route::get('/blog/{slug}', 'BlogController@index')->name('blog');
Route::get('/blog/get/{slug}', 'BlogController@blog')->name('blog');


Route::get('/settings', function () {
    return view('layouts.admin');
});

Route::get('/settings/profile', function () {
    return view('layouts.admin');
});

Route::get('/profile', function () {
    return view('layouts.admin');
});

Route::get('/home', function () {
    return redirect('/dashboard');
});


Route::middleware(['auth'])->group(function()
{
	Route::get('/dashboard', function () {
		return view('layouts.admin');
	});

	Route::get('/logout', function () {
		return view('layouts.admin');
	});
});

Route::prefix('blog')->middleware(['auth'])->group(function()
{
	Route::prefix('post')->group(function()
	{
		Route::get('add', function () {
			return view('layouts.admin');
		});
		
		Route::post('add', 'BlogController@add')->name('blog.index');
		
		Route::get('view', 'BlogController@view')->name('blog.view');
		
	});
});

Route::prefix('user')->group(function()
{
	Route::get('add', function () {
		return view('layouts.admin');
	});
	Route::get('view', function () {
		return view('layouts.admin');
	});
});



