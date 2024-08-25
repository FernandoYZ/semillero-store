<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('term_id')->constrained()->onDelete('cascade'); //Periodo tentativo acá el usuario puede dominar le tiempo que puede requerir el requerimiento
            $table->foreignId('company_id')->constrained()->onDelete('cascade');
            $table->time('date_order')->default()->nullable();
            // $table->text('sustent_use')->nullable();  //Se agregó una tabla con los periodos 'terms table'

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
