<template>
  <div class="container workout-edit">
    <form v-on:submit.prevent="updateWorkout(workout)">
      <h1>
        <h3>Edit Workout:</h3>
        {{ workout.name }}
      </h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div>
        Name:
        <input type="text" v-model="workout.name" />
        <input type="submit" class="btn btn-primary" value="Update" />
        <button type="submit" class="btn btn-danger" value="Update" v-on:click="destroyWorkout(workout)">Delete</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      workout: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
      console.log("showing workout", response);
      this.workout = response.data;
    });
  },
  methods: {
    updateWorkout: function (workout) {
      console.log("creating workout");
      var params = {
        name: workout.name,
      };
      axios
        .patch("/api/workouts/" + workout.id, params)
        .then((response) => {
          console.log("workouts update", response);
          this.$router.push("/workouts");
        })
        .catch((error) => {
          console.log("workouts update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyWorkout: function (workout) {
      axios.delete("/api/workouts/" + workout.id).then((response) => {
        console.log("workouts destroy", response);
        this.$router.push("/workouts");
      });
    },
  },
};
</script>
