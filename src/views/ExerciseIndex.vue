<template>
  <div class="exercise-index">
    <!-- Site Breadcrumb Begin -->
    <div>
      <section class="breadcrumb-section set-bg" data-setbg="assets/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <h2>About Us</h2>
                <div class="site-breadcrumb">
                  <a href="/home" class="sb-item">Home</a>
                  <span class="sb-item">Workouts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->
    <div class="exercises-container">
      <div class="container">
        <a class="btn btn-primary" href="/exercises/new" role="button">New Exercise</a>
      </div>

      <div v-for="exercise in exercises" v-bind:key="exercise.id">
        <h1>{{ exercise.name }}</h1>
        <h5>{{ exercise.length }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</h5>
        <!-- <p>user: {{ exercise.user_id }}</p> -->
        <router-link v-bind:to="`exercises/${exercise.id}`">
          <button type="button" class="btn btn-link">More Info</button>
        </router-link>
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
    // exerciseInfo: function (exercise) {
    //   this.currentExercise = exercise;
    //   document.querySelector("#exercise-details").showModal();
    // },
    // updateExercise: function (exercise) {
    //   var params = {
    //     name: exercise.name,
    //     reps: exercise.reps,
    //     sets: exercise.sets,
    //   };
    //   axios
    //     .patch("/api/exercises/" + exercise.id, params)
    //     .then((response) => {
    //       console.log("exercise updated", response);
    //       console.log("exercise id: " + exercise.id);
    //       this.currentExercise = {};
    //     })
    //     .catch((error) => {
    //       console.log("exercises update error", error.response);
    //     });
    // },
    // destroyExercise: function (exercise) {
    //   axios.delete("/api/exercises/" + exercise.id).then(() => {
    //     console.log("You did it! Or whatever!");
    //     this.$router.push("/exercises");
    //   });
    // },
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
.exercises-container {
  background: white;
}
</style>
