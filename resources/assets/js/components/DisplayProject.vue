<template>
    <div>
        <h1>Projects</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateProject' }" class="btn btn-primary">Create Project</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Project Name</td>
                <td>Project Status</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="project in projects">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>{{ project.status }}</td>
                    <td><router-link :to="{name: 'EditProject', params: { id: project.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteProject(project.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
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
            }
        }
    }
</script>