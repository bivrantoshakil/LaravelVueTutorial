<template>
    <div>
        <h1>Tasks</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateTask' }" class="btn btn-primary">Create Task</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Description</td>
                <td>Status</td>
				<td>Project ID</td>
                <td>User ID</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="task in tasks">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.description }}</td>
					<td>{{ task.status }}</td>
					<td>{{ task.project_id }}</td>
                    <td>{{ task.user_id }}</td>
                    <td><router-link :to="{name: 'EditTask', params: { id: task.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteTask(task.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tasks: []
            }
        },
        created: function()
        {
            this.fetchTasks();
        },

        methods: {
            fetchTasks()
            {
			  let project_id=this.$route.params.id;
			  let uri='';
				if (project_id==null || project_id=='')
					uri = 'http://localhost:8000/task';
				else
					uri = `http://localhost:8000/task/${project_id}`;
              this.axios.get(uri).then((response) => {
                  this.tasks = response.data;
              });
            },
            deleteTask(id)
            {
              let uri = `http://localhost:8000/task/${id}`;
              this.tasks.splice(id, 1);
              this.axios.delete(uri);
			  this.fetchTasks();
            }
        }
    }
</script>