<template>
  <div class="container exercise-new">
    <form v-on:submit.prevent="createExercise()">
      <h1>Create New Exercise</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
        <label>Length:</label>
        <input type="text" class="form-control" v-model="length" />
        <label>Reps:</label>
        <input type="text" class="form-control" v-model="reps" />
        <label>Sets:</label>
        <input type="text" class="form-control" v-model="sets" />
        <label>Video:</label>
        <input type="text" class="form-control" v-model="video_url" />
        <label>Image:</label>
        <input type="text" class="form-control" v-model="image_url" />
      </div>
      <!-- <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="image" />
      </div> -->
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
      length: "",
      reps: "",
      sets: "",
      video_url: "",
      image_url: "",
      user_id: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createExercise: function () {
      console.log("creating exercise");
      var params = {
        name: this.name,
        reps: this.reps,
        sets: this.sets,
        length: this.length,
        video_url: this.video_url,
        image_url: this.image_url,
        user_id: this.user_id,
      };
      axios
        .post("api/exercises", params)
        .then(() => {
          this.$router.push("/exercises");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
