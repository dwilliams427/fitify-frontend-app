<template>
  <div class="workout-index">
    <div class="text-center">
      <a class="btn btn-primary" href="#" role="button">New Workout</a>
    </div>
    <div class="card-deck">
      <div class="card-columns">
        <div v-for="workout in workouts" v-bind:key="workout.id">
          <div class="card">
            <img class="card-img-top" src="../assets/logo.png" v-bind:alt="workout.name" />
            <div class="card-body">
              <h5 class="card-title">{{ workout.name }}</h5>
              <p class="card-text">Some text</p>
              <a href="#" class="btn btn-primary" id="info-button">View</a>
              <a href="#" class="btn btn-primary" id="info-button">More Info</a>
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
      workouts: [],
    };
  },
  created: function () {
    this.indexWorkouts();
  },
  methods: {
    indexWorkouts: function () {
      axios.get("/api/workouts").then((response) => {
        console.log("workouts index", response);
        this.workouts = response.data;
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
