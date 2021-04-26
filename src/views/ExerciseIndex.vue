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
                  <span class="sb-item">Exercises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->

    <!-- CARD BEGIN -->
    <div>
      <section class="about-page-trainer spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="section-title">
                  <h2>Exercises</h2>
                  <p>Edit your exercises or create a new one</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-deck">
            <div v-for="exercise in exercises" v-bind:key="exercise.id">
              <div class="row">
                <div class="col-lg-10">
                  <router-link v-bind:to="`exercises/${exercise.id}/edit`">
                    <div class="single-trainer-item">
                      <div class="trainer-pic">
                        <img src="img/trainer/trainer-1.jpg" alt="" />
                      </div>
                      <div class="trainer-text">
                        <h5>{{ exercise.name }}</h5>
                        <span>
                          <i class="material-icons">timer</i>
                          | {{ exercise.length }} seconds
                        </span>
                        <span>{{ exercise.reps }} reps</span>
                        <span>{{ exercise.sets }} sets</span>
                        <div class="trainer-social">
                          <router-link v-bind:to="`exercises/${exercise.id}/edit`">
                            <a href="">More Info</a>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- CARD END -->

    <!-- ORIGINAL VUE -->
    <!-- <div class="exercises-container">
      <div class="container">
        <a class="btn btn-primary" href="/exercises/new" role="button">New Exercise</a>
      </div>

      <div v-for="exercise in exercises" v-bind:key="exercise.id">
        <h1>{{ exercise.name }}</h1>
        <h5>{{ exercise.length }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</h5>
        <router-link v-bind:to="`exercises/${exercise.id}`">
          <button type="button" class="btn btn-link">More Info</button>
        </router-link>
      </div>
    </div> -->
    <!-- ORIGINAL VUE END -->
    <!-- FAB -->
    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @new_exercise="new_exercise"
      @new_workout="new_workout"
    ></fab>
  </div>
</template>

<script>
import axios from "axios";
import fab from "vue-fab";

export default {
  components: {
    fab,
  },
  data: function () {
    return {
      exercises: [],
      bgColor: "#f34e3a",
      position: "bottom-right",
      fabActions: [
        {
          name: "new_exercise",
          icon: "fitness_center",
          tooltip: "New Exercise",
        },
        {
          name: "new_workout",
          icon: "view_list",
          tooltip: "New Workout",
        },
      ],
    };
  },
  created: function () {
    this.indexExercises();
  },
  methods: {
    new_exercise() {
      this.$router.push("/workouts/new");
    },
    new_workout() {
      this.$router.push("/exercises/new");
    },
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
.about-page-trainer {
  background: white;
}
</style>
