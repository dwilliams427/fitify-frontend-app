<template>
  <div class="workout-new">
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
      <form v-on:submit.prevent="createWorkout()">
        <h1>Create New Workout</h1>
        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name" />
          <small class="text-danger" v-if="name.length >= 0 && name.length < 5">
            {{ 5 - name.length }} characters remaining
          </small>
        </div>
        <!-- <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="image" />
      </div> -->
        <input type="submit" class="primary-btn" value="Create" />
      </form>
    </div>
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
<style>
.workout-new {
  background: white;
}
</style>
