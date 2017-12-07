<template>
    <div>
        <h1>Update Task</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayTask' }" class="btn btn-success">Return to Tasks</router-link></div>
        </div>

        <form v-on:submit.prevent="updateTask">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="task.name">
            </div>

            <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control" v-model="task.description">
            </div>
			
			<div class="form-group">
                <label>Status</label>
                <input type="text" class="form-control" v-model="task.status">
            </div>
			
			<div class="form-group">
                <label>Project ID</label>
                <input type="text" class="form-control" v-model="task.project_id">
            </div>
			
			<div class="form-group">
                <label>User ID</label>
                <input type="text" class="form-control" v-model="task.user_id">
            </div>
			
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                task:{}
            }
        },

        created: function(){
            this.getTask();
        },

        methods: {
            getTask()
            {
              let uri = `http://localhost:8000/task/${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    this.task = response.data;
                });
            },

            updateTask()
            {
              let uri = 'http://localhost:8000/task/'+this.$route.params.id;
                this.axios.patch(uri, this.task).then((response) => {
                  this.$router.push({name: 'DisplayTask'});
                });
            }
        }
    }
</script>