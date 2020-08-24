<?php

use Illuminate\Database\Seeder;

use App\RolesModel;

use Illuminate\Support\Str;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blog = RolesModel::create([
            'name' => 'Super Admin',
            'slug' => 'super-admin',
            'user_id' => 1,
        ]);
    }
}
