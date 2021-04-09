<template>
  <div class="workout-show">
    <!-- <div class="text-center">
      <a class="btn btn-primary" href="#" role="button">Add Exercise</a>
    </div> -->

    <!-- <div class="card-deck">
      <div class="card-columns"> -->
    <!-- <div v-for="workout in workout.exercises" v-bind:key="workout.id"> -->
    <!-- <div class="card"> -->
    <!-- <img class="card-img-top" src="../assets/logo.png" v-bind:alt="workout.name" /> -->
    <!-- <div class="card-body"> -->

    <ul id="example-1">
      <div v-for="exercise in workout.exercises" v-bind:key="exercise.id">
        <h1>{{ exercise.name }}</h1>
        <h5>{{ exercise.length }} seconds | {{ exercise.reps }} reps | {{ exercise.quantity }} sets</h5>
        <p>user: {{ exercise.user_id }}</p>
      </div>
    </ul>
  </div>
  <!-- </div> -->
  <!-- </div> -->
  <!-- </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      workout: [],
      exercises: [],
    };
  },
  created: function () {
    this.showWorkouts();
  },
  methods: {
    showWorkouts: function () {
      axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
        // console.log("showing workout", response);
        // console.log("workout exercises", this.workout.exercises);
        this.workout = response.data;
        console.log(this.workout.exercises);
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
</style>
