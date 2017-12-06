<template>
    <div>
        <h1>Update Project</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayProject' }" class="btn btn-success">Return to Projects</router-link></div>
        </div>

        <form v-on:submit.prevent="updateProject">
            <div class="form-group">
                <label>Project Name</label>
                <input type="text" class="form-control" v-model="project.name">
            </div>

            <div class="form-group">
                <label name="prject_status">Project Status</label>
                <input type="text" class="form-control" v-model="project.status">
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
                project:{}
            }
        },

        created: function(){
            this.getProject();
        },

        methods: {
            getProject()
            {
              let uri = `http://localhost:8000/manage/${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    this.project = response.data;
                });
            },

            updateProject()
            {
              let uri = 'http://localhost:8000/manage/'+this.$route.params.id;
                this.axios.patch(uri, this.project).then((response) => {
                  this.$router.push({name: 'DisplayProject'});
                });
            }
        }
    }
</script>