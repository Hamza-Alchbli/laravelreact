<?php

namespace App\Http\Controllers;

use App\Models\post as ModelsPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Post extends Controller
{
    function getPosts() {
        $posts = ModelsPost::with('User')->get();
        return $posts;
    }

    function store(Request $request) {
        $user = Auth::user();
        $post = new ModelsPost;
        $post->content = $request->content;
        $post->author_id = $user->id;
        $post->save();
    }
}
