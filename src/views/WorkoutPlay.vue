<template>
  <div class="workout-play">
    <!-- Site Breadcrumb Begin -->
    <div>
      <section class="breadcrumb-section set-bg" data-setbg="/assets/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <br />
                <div class="site-breadcrumb">
                  <a href="/workouts" class="sb-item">Workouts</a>
                  <span class="sb-item">{{ workout.name }}</span>
                  <span class="sb-item">Play</span>
                </div>
                <!-- SPOTIFY BUTTON -->
                <div>
                  <b-button pill variant="success" v-on:click="goToSpotify()">
                    Open Spotify
                    <img
                      class="spotify-img"
                      src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
                      alt="go to spotify"
                    />
                  </b-button>
                </div>
                <!-- END SPOTIFY BUTTON -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->

    <!-- PROGRESS BAR  -->
    <div>
      <h2 class="text-center" v-if="workout.exercises">{{ workout.name }} Workout</h2>
      <h5 class="text-center" v-if="workout.exercises">{{ workout.exercises.length }} exercises</h5>
      <b-progress v-if="workout.exercises" :max="workout.exercises.length" height="2rem">
        <b-progress-bar :value="value">
          <span>
            Progress:
            <strong>{{ value }} / {{ workout.exercises.length }}</strong>
          </span>
        </b-progress-bar>
      </b-progress>
    </div>

    <!-- BEGIN TAB PANEL -->
    <div class="container">
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <!-- Render Tabs, supply a unique `key` to each tab -->
          <b-tab v-for="exercise in workout.exercises" :key="'dyn-tab-' + exercise.id" :title="exercise.name">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-center">
                  <div class="about-pic">
                    <img class="exercise-image" :src="exercise.image_url" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <span>
                <h1>{{ exercise.name }}</h1>
                <h5 class="time">{{ exercise.time }} seconds</h5>
                <h5 class="time">{{ exercise.sets }} sets</h5>
                <h5 class="time">{{ exercise.reps }} reps</h5>
              </span>
            </div>
          </b-tab>

          <!-- Render this if no tabs -->
          <template #empty>
            <div class="text-center text-muted">
              There are no exercises
              <br />
              <a href="/exercises">Add An Exercise</a>
            </div>
          </template>
        </b-tabs>

        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group class="mt-2">
            <b-button @click="tabIndex--" v-on:click="dereaseValue()">Previous</b-button>
            <b-button @click="tabIndex++" v-on:click="increaseValue()">Next</b-button>
          </b-button-group>

          <div class="text-muted">Exercise: {{ tabIndex }}</div>
        </div>
      </b-card>
    </div>
    <!-- END TAB PANEL -->

    <!-- BEGIN TABS WITH CONTROL BUTTONS -->

    <!-- <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
      v-on:click="getExercises()"
    >
      Add an Exercise
    </button> -->
    <!-- Modal -->
    <!-- <div
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
            <p>{{ exercise.time }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</p>
            <button type="button" class="btn btn-primary" v-on:click="addExercise(exercise)">Add</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Done</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- ORIGINAL VUE -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      workout: {},
      exercises: [],
      exercise: {},
      tabs: [],
      tabCounter: 0,
      value: 0,
      tabIndex: 1,
    };
  },
  created: function () {
    this.showWorkout();
    this.getExercises();
  },
  methods: {
    increaseValue() {
      if (this.value < 1) {
        this.value = 1;
      } else {
        this.value++;
      }
      console.log("tab index increase: " + this.tabIndex);
    },
    dereaseValue() {
      if (this.value < 1) {
        this.value = 1;
      } else {
        this.value--;
      }
      console.log("tab index decrease: " + this.tabIndex);
    },
    // getMax() {
    //   this.max = this.workout.exercises.length;
    // },
    showWorkout: function () {
      axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
        // console.log("showing workout", response);
        // console.log("workout exercises", this.workout.exercises);
        this.workout = response.data;
        console.log(this.workout);

        // this.exercises.push(this.workout.exercises);
      });
    },
    getExercises: function () {
      axios.get("/api/exercises").then((response) => {
        this.exercises = response.data;
        console.log(this.exercises);
      });
    },
    goToSpotify: function () {
      window.open("https://accounts.spotify.com/en/status");
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
.workout-play {
  background: white;
}
.text-center {
  color: black;
  align-content: center;
  justify-content: center;
}
.time {
  justify-content: right;
}
</style>
