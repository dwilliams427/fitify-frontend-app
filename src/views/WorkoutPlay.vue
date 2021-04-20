<template>
  <div class="workout-show">
    <ul id="example-1">
      <div v-for="exercise in workout.exercises" v-bind:key="exercise.id">
        <h1>{{ exercise.name }}</h1>
        <h5>{{ exercise.length }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</h5>
        <p>user: {{ exercise.user_id }}</p>
        <button type="submit" class="btn btn-danger" value="Update" v-on:click="destroyExercise(exercise)">
          Delete
        </button>
      </div>
    </ul>
    <router-link v-bind:to="`/workouts/${workout.id}/edit`">Edit Workout</router-link>
    |
    <!-- <router-link v-bind:to="`/exercises`">Add Exercise</router-link> -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
      v-on:click="getExercises()"
    >
      Add an Exercise
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Exercises</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-for="exercise in this.exercises" v-bind:key="exercise.id">
            <h3>{{ exercise.name }}</h3>
            <p>{{ exercise.length }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</p>
            <button type="button" class="btn btn-primary" v-on:click="addExercise(exercise)">Add</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Done</button>
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
      workout: [],
      exercises: [],
      exercise: {},
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
        console.log(this.workout);
      });
    },
    destroyExercise: function (exercise) {
      var params = {
        exercise_id: exercise.id,
        workout_id: this.workout.id,
      };
      axios.delete("/api/workout_exercises/", { data: params }).then((response) => {
        console.log("exercises destroy", response);
        // in exercise object, remove this exercise - will not refresh
        this.workout.exercises.splice(this.workout.exercises.indexOf(exercise), 1);
      });
    },
    getExercises: function () {
      axios.get("api/exercises").then((response) => {
        this.exercises = response.data;
        console.log(this.exercises);
      });
    },
    addExercise: function (exercise) {
      var params = {
        exercise_id: exercise.id,
        workout_id: this.workout.id,
      };
      axios.post("api/workout_exercises/", params).then((response) => {
        console.log(response);
        //add to workout_exercises table somehow
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
