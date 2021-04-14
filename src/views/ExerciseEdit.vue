<template>
  <div class="container exercise-edit">
    <form v-on:submit.prevent="updateExercise(exercise)">
      <h1>
        <h3>Edit Exercise:</h3>
        {{ exercise.name }}
      </h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div>
        <div>
          Name:
          <input type="text" v-model="exercise.name" />
        </div>
        <div>
          Length:
          <input type="number" v-model="exercise.length" />
        </div>
        <div>
          Sets:
          <input type="number" v-model="exercise.sets" />
        </div>
        <div>
          Reps:
          <input type="number" v-model="exercise.reps" />
        </div>
        <div>
          Video URL:
          <input type="text" v-model="exercise.video_url" />
        </div>
        <div>
          Image URL:
          <input type="text" v-model="exercise.image_url" />
        </div>
        <input type="submit" class="btn btn-primary" value="Update" />
        <button type="submit" class="btn btn-danger" value="Update" v-on:click="destroyExercise(exercise)">
          Delete
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      exercise: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/exercises/" + this.$route.params.id).then((response) => {
      console.log("showing exercise", response);
      this.exercise = response.data;
    });
  },
  methods: {
    updateExercise: function (exercise) {
      console.log("creating exercise");
      var params = {
        name: exercise.name,
        length: exercise.length,
        reps: exercise.reps,
        sets: exercise.sets,
        video_url: exercise.video_url,
        image_url: exercise.image_url,
      };
      axios
        .patch("/api/exercises/" + exercise.id, params)
        .then((response) => {
          console.log("exercises update", response);
          this.$router.push("/exercises");
        })
        .catch((error) => {
          console.log("exercises update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyExercise: function (exercise) {
      axios.delete("/api/exercises/" + exercise.id).then((response) => {
        console.log("exercises destroy", response);
        this.$router.push("/exercises");
      });
    },
  },
};
</script>
