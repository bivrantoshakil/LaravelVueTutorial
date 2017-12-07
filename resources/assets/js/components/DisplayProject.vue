<template>
    <div>
        <h1>Projects</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Project Name</td>
                <td>Project Status</td>
				<td>Tasks</td>
				<td>Users</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="project in projects">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>{{ project.status }}</td>
					<td><router-link :to="{name: 'DisplayTask', params: { id: project.id }}" class="btn btn-primary">Tasks</router-link></td>
					<td><router-link :to="{name: 'DisplayUser', params: { id: project.id }}" class="btn btn-primary">Users</router-link></td>
                    <td>{{ project.status }}</td>
                    <td><router-link :to="{name: 'EditProject', params: { id: project.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteProject(project.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
		<br />
		<div class="row">
		  <div class="col-md-4">
            <router-link :to="{ name: 'DisplayUser' }" class="btn btn-primary">All User</router-link>
          </div>
		  <div class="col-md-4">
            <router-link :to="{ name: 'DisplayTask' }" class="btn btn-primary">All Task</router-link>
          </div>
          <div class="col-md-4">
            <router-link :to="{ name: 'CreateProject' }" class="btn btn-primary">Create Project</router-link>
          </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                projects: []
            }
        },

        created: function()
        {
            this.fetchProjects();
        },

        methods: {
            fetchProjects()
            {
              let uri = 'http://localhost:8000/manage';
              this.axios.get(uri).then((response) => {
                  this.projects = response.data;
              });
            },
            deleteProject(id)
            {
              let uri = `http://localhost:8000/manage/${id}`;
              this.projects.splice(id, 1);
              this.axios.delete(uri);
			  this.fetchProjects();
            }
        }
    }
</script>