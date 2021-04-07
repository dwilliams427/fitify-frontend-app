<template>
  <div class="workout-index">
    <div class="card-deck">
      <div class="card-columns">
        <div v-for="workout in workouts" v-bind:key="workout.id">
          <div class="card">
            <img class="card-img-top" src="../assets/logo.png" v-bind:alt="workout.name" />
            <div class="card-body">
              <h5 class="card-title">{{ workout.name }}</h5>
              <p class="card-text">Some text</p>
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
</style>
