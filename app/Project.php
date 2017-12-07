<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name','status','user_id'];

    public function tasks()
  	{
    	return $this->hasMany('App\Task');
  	}

  	public function users() {
        return $this->belongsToMany('App\User', 'user_project', 'project_id', 'user_id');
    }
}
