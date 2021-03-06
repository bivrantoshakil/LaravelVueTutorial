<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name','status','description','project_id','user_id'];

    public function project()
  	{
    	return $this->belongsTo('App\Project');
  	}

  	public function user()
  	{
    	return $this->belongsTo('App\User');
  	}
}
