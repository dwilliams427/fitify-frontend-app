<template>
  <div class="exercise-index">
    <div class="text-center">
      <a class="btn btn-primary" href="/exercises-new" role="button">New exercise</a>
    </div>

    <div v-for="exercise in exercises" v-bind:key="exercise.id">
      <h1>{{ exercise.name }}</h1>
      <h5>{{ exercise.length }} seconds | {{ exercise.reps }} reps | {{ exercise.quantity }} sets</h5>
      <!-- <p>user: {{ exercise.user_id }}</p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      exercises: [],
      currentExercise: {},
    };
  },
  created: function () {
    this.indexExercises();
  },
  methods: {
    indexExercises: function () {
      axios.get("/api/exercises").then((response) => {
        console.log("exercises index", response);
        this.exercises = response.data;
      });
    },
    exerciseInfo: function (exercise) {
      this.currentExercise = exercise;
      document.querySelector("#exercise-details").showModal();
    },
    updateExercise: function (exercise) {
      var params = {
        name: exercise.name,
        reps: exercise.reps,
        quantity: exercise.quantity,
      };
      axios
        .patch("/api/exercises/" + exercise.id, params)
        .then((response) => {
          console.log("exercise updated", response);
          console.log("exercise id: " + exercise.id);
          this.currentExercise = {};
        })
        .catch((error) => {
          console.log("exercises update error", error.response);
        });
    },
    destroyExercise: function (exercise) {
      axios.delete("/api/exercises/" + exercise.id).then(() => {
        console.log("You did it! Or whatever!");
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
