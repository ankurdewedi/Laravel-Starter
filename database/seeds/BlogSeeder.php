<?php

use Illuminate\Database\Seeder;

use App\BlogModel;

use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blog = BlogModel::create([
            'slug' => Str::slug('Title of a longer featured blog post'),
            'heading' => 'Title of a longer featured blog post',
            'sub_heading' => '',
            'content' => 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.',
            'pinned_featured' => 'y',
            'pinned_featured_sub' => 'n',
            'user_id' => 1,
        ]);
        $blog = BlogModel::create([
            'slug' => Str::slug('Featured post'),
            'heading' => 'Featured post',
            'sub_heading' => '',
            'content' => 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            'pinned_featured' => 'n',
            'pinned_featured_sub' => 'y',
            'user_id' => 1,
        ]);
        $blog = BlogModel::create([
            'slug' => Str::slug('Featured post'),
            'heading' => 'Featured post',
            'sub_heading' => '',
            'content' => 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            'pinned_featured' => 'n',
            'pinned_featured_sub' => 'y',
            'user_id' => 1,
        ]);
        for($i=0;$i<100;$i++){
			$blog = BlogModel::create([
				'slug' => Str::slug('New feature'),
				'heading' => 'New feature',
				'sub_heading' => '',
				'content' => 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

		Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
		Donec id elit non mi porta gravida at eget metus.
		Nulla vitae elit libero, a pharetra augue.

	Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

	Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.',
				'pinned_featured' => '',
				'pinned_featured_sub' => '',
				'user_id' => 1,
			]);
		}
    }
}
