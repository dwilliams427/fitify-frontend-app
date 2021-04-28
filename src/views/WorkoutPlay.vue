<template>
  <div class="workout-play">
    <!-- Site Breadcrumb Begin -->
    <div>
      <section class="breadcrumb-section set-bg" data-setbg="/assets/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <h2>About Us</h2>
                <div class="site-breadcrumb">
                  <a href="/workouts" class="sb-item">Workouts</a>
                  <!-- <span class="sb-item">{{ workout.name }}</span> -->
                  <span class="sb-item">some name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->

    <!-- ORIGINAL VUE -->

    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
      v-on:click="getExercises()"
    >
      Add an Exercise
    </button>
    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Exercises</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-for="exercise in this.exercises" v-bind:key="exercise.id">
            <h3>{{ exercise.name }}</h3>
            <p>{{ exercise.length }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</p>
            <button type="button" class="btn btn-primary" v-on:click="addExercise(exercise)">Add</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Done</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- ORIGINAL VUE -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      workout: {},
      exercises: [],
      exercise: {},
      tabs: [],
      tabCounter: 0,
      max: this.workout.exercises.length,
    };
  },
  mounted: function () {
    this.showWorkouts();
  },
  methods: {
    newTab() {
      this.tabs.push(this.tabCounter++);
    },
    showWorkouts: function () {
      axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
        // console.log("showing workout", response);
        // console.log("workout exercises", this.workout.exercises);
        this.workout = response.data;
        console.log(this.workout);
        this.exercises.push(this.workout.exercises);
      });
    },
    getExercises: function () {
      axios.get("api/exercises").then((response) => {
        this.exercises = response.data;
        console.log(this.exercises);
      });
    },
  },
};
</script>
<style>
.card-deck {
  justify-content: center;
}
.text-center {
  justify-content: center;
}
#info-button {
  margin: 4px;
}
.workout-play {
  background: white;
}
</style>
