<template>
  <div class="workout-index">
    <div class="text-center">
      <a class="btn btn-primary" href="/workouts/new" role="button">New Workout</a>
    </div>

    <div v-for="workout in workouts" v-bind:key="workout.id">
      <h5 class="card-title">{{ workout.name }}</h5>
      <router-link v-bind:to="`workouts/${workout.id}`">
        <button type="button" class="btn btn-link">More Info</button>
      </router-link>
      <button type="button" class="btn btn-success">PLAY</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      workouts: [],
      exercises: [],
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
    workoutInfo: function (workout) {
      this.currentWorkout = workout;
      document.querySelector("#workout-details").showModal();
    },
    updateWorkout: function (workout) {
      var params = {
        name: workout.name,
      };
      axios
        .patch("/api/workouts/" + workout.id, params)
        .then((response) => {
          console.log("workout updated", response);
          console.log("workout id: " + workout.id);
          this.currentWorkout = {};
        })
        .catch((error) => {
          console.log("workouts update error", error.response);
        });
    },
    destroyWorkout: function (workout) {
      axios.delete("/api/workouts/" + workout.id).then(() => {
        console.log("You did it! Or whatever!");
        this.$router.push("/workouts");
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
