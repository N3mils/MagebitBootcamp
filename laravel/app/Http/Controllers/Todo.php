<?php

namespace App\Http\Controllers;

use App\Models\Todos;
use Illuminate\Http\Request;

class Todo extends Controller
{
    public function save(int $id)
    {
        $todo = new Todos();
        $todo->task = $id;
        $todo->status = 0;
        $todo->save();
        var_dump($todo);
    }
}
