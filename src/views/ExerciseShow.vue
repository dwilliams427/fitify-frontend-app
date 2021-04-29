<template>
  <div class="exercise-show">
    <div class="container">
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
        <h1>{{ exercise.name }}</h1>
        <h5>{{ exercise.time }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</h5>
        <p>user: {{ exercise.user_id }}</p>
      </ul>
      <router-link v-bind:to="`/exercises/${exercise.id}/edit`">Edit exercise</router-link>
      <button type="submit" class="btn btn-danger" value="Update" v-on:click="destroyExercise(exercise)">Delete</button>
    </div>
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
      exercise: {},
      // exercises: [],
    };
  },
  created: function () {
    this.showExercises();
  },
  methods: {
    showExercises: function () {
      axios.get("/api/exercises/" + this.$route.params.id).then((response) => {
        console.log("showing exercise", response);
        this.exercise = response.data;
        console.log(this.exercise);
      });
    },
    destroyExercise: function (exercise) {
      axios.delete("/api/exercises/" + exercise.id).then(() => {
        console.log("exercise deleted");
        this.$router.push("/exercises");
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
