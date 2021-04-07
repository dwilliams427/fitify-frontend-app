<template>
  <div class="exercise-index">
    <div class="text-center">
      <a class="btn btn-primary" href="/exercises-new" role="button">New exercise</a>
    </div>

    <dialog id="exercise-details">
      <form method="dialog">
        <h1>{{ currentExercise.name }}</h1>
        <p>
          Name:
          <input type="text" v-model="currentExercise.name" />
        </p>
        <p>
          Reps:
          <input type="text" v-model="currentExercise.reps" />
        </p>
        <p>
          Quantity:
          <input type="text" v-model="currentExercise.quantity" />
        </p>
        <!-- UPDATE AND DESTROY BUTTONS -->
        <button v-on:click="updateExercise(currentExercise.id)">Update Exercise</button>
        <button v-on:click="destroyExercise(currentExercise)">Destroy Exercise</button>
        <button>Close</button>
      </form>
    </dialog>

    <div class="card-deck">
      <div class="card-columns">
        <div v-for="exercise in exercises" v-bind:key="exercise.id">
          <div class="card">
            <img class="card-img-top" src="../assets/logo.png" v-bind:alt="exercise.name" />
            <div class="card-body">
              <h5 class="card-title">{{ exercise.name }}</h5>
              <p class="card-text">{{ exercise.reps }}: reps | {{ exercise.quantity }} sets</p>
              <button type="button" class="btn btn-primary" v-on:click="exerciseInfo(exercise)">Edit</button>
              <!-- <a href="" class="btn btn-success" id="info-button">View</a>
              <a href="#" class="btn btn-success" id="info-button">PLAY</a> -->
            </div>
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
