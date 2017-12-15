<template>
  <div>
    <h1>Create A Project</h1>
    <form v-on:submit.prevent="validateForm">
      
	  <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Project Name:</label>
            <input v-validate.initial="'required|alpha_spaces'" name="name" type="text" class="form-control" v-model="project.name">
			<span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
          </div>
        </div>
      </div>
	  
      <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Project Status:</label>
              <input v-validate.initial="'required|alpha_spaces'" name="status" type="text" class="form-control" v-model="project.status" />
			  <span v-show="errors.has('status')" class="help is-danger">{{ errors.first('status') }}</span>
            </div>
          </div>
      </div>
	  
      <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>User ID:</label>
              <input v-validate.initial="'required|numeric'" name="user_id" type="text" class="form-control" v-model="project.user_id" />
			  <span v-show="errors.has('user_id')" class="help is-danger">{{ errors.first('user_id') }}</span>
            </div>
          </div>
      </div>
      <div class="form-group">
          <button class="btn btn-primary">Add Project</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          project:{}
        }
    },
    methods: {
		addProject(){
			let uri = 'http://localhost:8000/manage';
			this.axios.post(uri, this.project).then((response) => {
			  this.$router.push({name: 'DisplayProject'})
			})
		},
		validateForm(){
			this.$validator.validateAll().then((result) => {
			if (result) {
			  this.addProject();
			  return;
			}

			alert('Correct the errors first!');
		  });
		}
  }
}
</script>