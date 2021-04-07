<template>
  <div class="workout-show">
    <div class="text-center">
      <h1></h1>
      <a class="btn btn-primary" href="/workouts-new" role="button">Add Exercise</a>
    </div>

    <dialog id="workout-details">
      <form method="dialog">
        <h1>{{ currentWorkout.name }}</h1>
        <p>
          name:
          <input type="text" v-model="currentWorkout.name" />
        </p>
        <!-- UPDATE AND DESTROY BUTTONS -->
        <!-- <button v-on:click="updateWorkout(currentWorkout.id)">Update Workout</button>
        <button v-on:click="destroyWorkout(currentWorkout)">Destroy Workout</button> -->
        <button>Close</button>
      </form>
    </dialog>

    <div class="card-deck">
      <div class="card-columns">
        <div v-for="workout in workouts" v-bind:key="workout.id">
          <div class="card">
            <img class="card-img-top" src="../assets/logo.png" v-bind:alt="workout.name" />
            <div class="card-body">
              <h5 class="card-title">{{ workout.name }}</h5>
              <button type="button" class="btn btn-link" v-on:click="workoutInfo(workout)">Edit</button>
              <p class="card-text">Some text</p>
              <button type="button" class="btn btn-primary" v-on:click="workoutInfo(workout)">View</button>
              <a href="#" class="btn btn-success" id="info-button">PLAY</a>
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
      workout: {},
    };
  },
  created: function () {
    this.showWorkouts();
  },
  methods: {
    showWorkouts: function () {
      axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
        console.log("showing workout", response);
        this.workout = response.data;
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
