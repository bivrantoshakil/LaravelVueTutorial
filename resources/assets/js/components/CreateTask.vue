<template>
  <div>
    <h1>Create A Task</h1>
    <form v-on:submit.prevent="addTask">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="task.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Description:</label>
              <input type="text" class="form-control col-md-6" v-model="task.description" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Status:</label>
              <input type="text" class="form-control col-md-6" v-model="task.status" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Project ID:</label>
              <input type="text" class="form-control col-md-6" v-model="task.project_id" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>User ID:</label>
              <input type="text" class="form-control col-md-6" v-model="task.user_id" />
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add Task</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          task:{}
        }
    },
    methods: {
      addTask(){
        let uri = 'http://localhost:8000/task';
        this.axios.post(uri, this.task).then((response) => {
          this.$router.push({name: 'DisplayTask'})
        })
    }
  }
}
</script>