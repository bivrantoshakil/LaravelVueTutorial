<template>
  <div>
    <h1>Create A User</h1>
    <form v-on:submit.prevent="addUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>User Name:</label>
            <input type="text" class="form-control" v-model="user.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Email:</label>
              <input type="text" class="form-control col-md-6" v-model="user.email" />
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add User</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          user:{}
        }
    },
    methods: {
      addUser(){
        let uri = 'http://localhost:8000/user';
        this.axios.post(uri, this.user).then((response) => {
          this.$router.push({name: 'DisplayUser'})
        })
    }
  }
}
</script>