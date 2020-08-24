<?php

namespace App\Http\Controllers;

use App\BlogModel;
use Illuminate\Http\Request;

use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$blog = BlogModel::where('pinned_featured', 'y')->first();
		return view('front', array('featured' => $blog,'featured_sub' => [$blog, $blog],'blogs' => $blog ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BlogModel  $blogModel
     * @return \Illuminate\Http\Response
     */
    public function show(BlogModel $blogModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BlogModel  $blogModel
     * @return \Illuminate\Http\Response
     */
    public function edit(BlogModel $blogModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BlogModel  $blogModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BlogModel $blogModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BlogModel  $blogModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(BlogModel $blogModel)
    {
        //
    }
    
    function blogs(Request $r)
    {
		$featured = BlogModel::where('pinned_featured', 'y')->first();
		$featured->author = $featured->user;
		$featured_sub = BlogModel::where('pinned_featured_sub', 'y')->get();
		$blogs = BlogModel::orderBy('id', 'desc')->paginate(10);
		for($i=0;$i<count($featured_sub); $i++)
		{
			$featured_sub[$i]->date = date('M d', strtotime($featured_sub[$i]->created_at));
			$featured_sub[$i]->date = date('M d', strtotime($featured_sub[$i]->created_at));	
			$featured_sub[$i]->author = $featured_sub[$i]->user;
		}
		for($i=0;$i<count($blogs); $i++)
		{
			$blogs[$i]->date = date('F d, Y', strtotime($blogs[$i]->created_at));
			$blogs[$i]->author = $blogs[$i]->user;
		}
		return ['data'=>array('featured' => $featured,'featured_sub' => $featured_sub,'blogs' => $blogs )];
	}
    function get(Request $r)
    {
		$blogs = BlogModel::orderBy('id', 'desc')->get();
		return ['data'=>array('blogs' => $blogs )];
	}
    function blog(Request $r, $slug)
    {
		$blog = BlogModel::where('slug', '=', $slug)->first();
		$blog->date = date('F d, Y', strtotime($blog->created_at));
		return ['data'=>array('blog' => $blog)];
	}
    function add(Request $r)
    {
        $blog = BlogModel::create([
            'slug' => Str::slug($r->title),
            'heading' => $r->title,
            'sub_heading' => $r->title,
            'content' => $r->content,
            'pinned_featured' => 'y',
            'pinned_featured_sub' => 'n',
            'user_id' => 1,
        ]);
		
		return redirect()->back();
	}
    function view(Request $r)
    {
		$blogs = BlogModel::all();
		
		return view('layouts.admin', array('blogs' => $blogs ));
	}
    
}
