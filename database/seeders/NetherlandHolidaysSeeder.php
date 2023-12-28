<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Holiday;

class NetherlandHolidaysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $holidays = [
            ['name' => 'New Year\'s Day'],
            ['name' => 'Easter Sunday'],
            ['name' => 'Easter Monday'],
            ['name' => 'King\'s Day'],
            ['name' => 'Liberation Day'],
            ['name' => 'Ascension Day'],
            ['name' => 'Whit Sunday'],
            ['name' => 'Whit Monday'],
            ['name' => 'Christmas Day'],
            // Add more holidays here...
        ];

        foreach ($holidays as $holiday) {
            Holiday::create($holiday);
        }
    }
}
