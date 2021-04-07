<template>
  <div class="container workout-new">
    <form v-on:submit.prevent="createPost()">
      <h1>New Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
        <small class="text-danger" v-if="title.length >= 0 && title.length < 50">
          {{ 50 - title.length }} characters remaining
        </small>
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="body" />
        <small class="text-danger" v-if="body.length >= 0 && body.length < 500">
          {{ 500 - body.length }} characters remaining
        </small>
      </div>
      <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createWorkout: function () {
      console.log("creating workout");
      var params = {
        name: this.name,
      };
      axios
        .post("api/workouts", params)
        .then(() => {
          this.$router.push("/workouts");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
