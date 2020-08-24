<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogModel extends Model
{
    protected $table = 'blogs';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'slug', 'heading', 'sub_heading', 
        'content', 'pinned_featured', 
        'pinned_featured_sub', 'user_id',
    ];
    
	public function user()
	{
		return $this->belongsTo('App\User');
	}
    
	public function blogs()
	{
		$b = [];
		$blogs = $this->all();
		for($i=0;$i<count($blogs);$i++){
			$blogs[$i]->author = $blogs[$i]->user;
			$b[] = $blogs[$i];
		}
		return $b;
	}
    
}
