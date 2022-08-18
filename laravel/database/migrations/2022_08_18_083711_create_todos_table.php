<?php

use App\Models\Todos;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->id();
            $table->string('task');
            $table->tinyInteger('status');
            $table->timestamps();
            $table->string('auth')->default('Ilja');
            $table->integer('salary')->unsigned()->default(0);
        });

        for($i =0; $i<10; $i++){
            $object = new Todos();
            $object->task = uniqid();
            $object->status = round(rand(0,1));
            $object->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
};
