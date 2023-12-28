<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\post as ModelsPost;

class Dashboard extends Controller
{
    function index()
    {
        $posts = ModelsPost::with('User')->get();
        return inertia ('Dashboard', ['posts' => $posts]);
    }
}
