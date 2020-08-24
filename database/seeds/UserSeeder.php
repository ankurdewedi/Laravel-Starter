<?php

use Illuminate\Database\Seeder;

use App\User;

use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blog = User::create([
            'name' => 'user',
            'email' => 'q@q.com',
            'password' => Hash::make('12345678'),
        ]);
    }
}
