<template>
    <div>
        <h1>Users</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateUser' }" class="btn btn-primary">Create User</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>User Name</td>
                <td>Email</td>
				<td>Projects</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
					<td><router-link :to="{name: 'DisplayProject', params: { id: user.id }}" class="btn btn-primary">Projects</router-link></td>
                    <td><router-link :to="{name: 'EditUser', params: { id: user.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                users: []
            }
        },

        created: function()
        {
            this.fetchUsers();
        },

        methods: {
            fetchUsers()
            {
			  let project_id=this.$route.params.id;
			  let uri='';
			  if (project_id==null || project_id=='')
				uri = 'http://localhost:8000/user';
			  else
				uri = `http://localhost:8000/user/${project_id}`;
              this.axios.get(uri).then((response) => {
                  this.users = response.data;
              });
            },
            deleteUser(id)
            {
              let uri = `http://localhost:8000/user/${id}`;
              this.users.splice(id, 1);
              this.axios.delete(uri);
			  this.fetchUsers();
            }
        }
    }
</script>