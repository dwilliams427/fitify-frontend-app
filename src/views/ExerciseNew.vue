<template>
  <div class="exercise-new">
    <!-- Site Breadcrumb Begin -->
    <div>
      <section class="breadcrumb-section set-bg" data-setbg="assets/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <h2>About Us</h2>
                <div class="site-breadcrumb">
                  <a href="/home" class="sb-item">Exercises</a>
                  <span class="sb-item">New</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->
    <div class="container">
      <div class="text-center">
        <div class="row">
          <div class="col-sm-8">
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
                <br />
                <label>Length:</label>
                <input type="text" class="form-control" v-model="time" />
                <br />
                <label>Reps:</label>
                <input type="text" class="form-control" v-model="reps" />
                <br />
                <label>Sets:</label>
                <input type="text" class="form-control" v-model="sets" />
                <br />
                <label>Video URL:</label>
                <input type="text" class="form-control" v-model="video_url" />
                <br />
                <label>Image URL:</label>
                <input type="text" class="form-control" v-model="image_url" />
                <br />
              </div>
              <input type="submit" class="primary-btn" value="Create" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      time: "",
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
        time: this.time,
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
<style>
.exercise-new {
  background: white;
}
</style>
