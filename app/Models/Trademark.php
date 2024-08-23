<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trademark extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'logo'
    ];

    public function products() {
        return $this->hasMany(Product::class);
    }

    public function providers()
    {
        return $this->belongsToMany(Provider::class, 'trademark_provider');
    }
}
