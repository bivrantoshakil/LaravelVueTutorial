<template>
    <div>
        <h1>Update User</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayUser' }" class="btn btn-success">Return to Users</router-link></div>
        </div>

        <form v-on:submit.prevent="updateUser">
            <div class="form-group">
                <label>User Name</label>
                <input type="text" class="form-control" v-model="user.name">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="user.email">
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
                user:{}
            }
        },

        created: function(){
            this.getUser();
        },

        methods: {
            getUser()
            {
              let uri = `http://localhost:8000/user/${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    this.user = response.data;
                });
            },

            updateUser()
            {
              let uri = 'http://localhost:8000/user/'+this.$route.params.id;
                this.axios.patch(uri, this.user).then((response) => {
                  this.$router.push({name: 'DisplayUser'});
                });
            }
        }
    }
</script>