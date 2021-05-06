<template>
  <div class="workout-show">
    <!-- Site Breadcrumb Begin -->
    <div>
      <section class="breadcrumb-section set-bg" data-setbg="assets/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <br />
                <div class="site-breadcrumb">
                  <a href="/workouts" class="sb-item">Workouts</a>
                  <span class="sb-item">{{ workout.name }} Workout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->

    <div>
      <section class="about-page-trainer spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="section-title">
                  <h2>{{ workout.name }} Workout</h2>
                  <span>
                    <!-- <h5>{{ workout.exercises.length }} exercises</h5> -->
                  </span>
                </div>
                <!-- PLAY BUTTON -->
                <div class="text-center">
                  <span>
                    <router-link v-bind:to="`/workouts/${workout.id}/play`">
                      <button type="button" class="primary-btn">
                        PLAY
                        <i class="ti-angle-double-right"></i>
                      </button>
                    </router-link>
                    <!-- END PLAY BUTTON -->
                    <!-- <div class="trainer-social">
                    <router-link v-bind:to="`workouts/${workout.id}/edit`">
                      <a href="">More Info</a>
                    </router-link>
                  </div> -->
                    <!-- EDIT WORKOUT BUTTON -->
                    <button class="blog-btn" data-toggle="modal" data-target="#workoutModal" v-on:click="getWorkout()">
                      Edit Workout
                      <i class="fa fa-angle-double-right"></i>
                    </button>
                  </span>
                </div>
                <!-- PLAY BUTTON -->
              </div>
            </div>
          </div>

          <!-- CARD BEGIN -->
          <div class="card-deck">
            <div v-for="exercise in workout.exercises" v-bind:key="exercise.id">
              <div class="row-lg-4">
                <div class="col-lg-12">
                  <div class="single-trainer-item">
                    <router-link v-bind:to="`/exercises/${exercise.id}/edit`">
                      <div class="trainer-pic">
                        <img src="img/gallery/gallery-6.jpg" alt="" />
                      </div>
                      <div class="trainer-text">
                        <h5>{{ exercise.name }}</h5>
                        <span>{{ exercise.time }} seconds</span>
                        <span>{{ exercise.reps }} reps</span>
                        <span>{{ exercise.sets }} sets</span>
                        <!-- <div class="trainer-social">
                          <router-link v-bind:to="`exercises/${exercise.id}/edit`">
                            <a href="">More Info</a>
                          </router-link>
                        </div> -->
                      </div>
                      <!-- DESTROY BUTTON -->
                    </router-link>
                    <div class="delete-button">
                      <button type="button" class="primary-btn" value="Update" v-on:click="destroyExercise(exercise)">
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- CARD END -->

    <!-- ORIGINAL VUE -->
    <div class="container">
      <!-- <ul id="example-1">
        <div v-for="exercise in workout.exercises" v-bind:key="exercise.id">
          <h1>{{ exercise.name }}</h1>
          <h5>{{ exercise.time }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</h5>
          <p>user: {{ exercise.user_id }}</p>
          <button type="submit" class="btn btn-danger" value="Update" v-on:click="destroyExercise(exercise)">
            Delete
          </button>
        </div>
      </ul>
      <router-link v-bind:to="`/workouts/${workout.id}/edit`">Edit Workout</router-link>
      | -->
      <!-- <router-link v-bind:to="`/exercises`">Add Exercise</router-link> -->

      <!-- Button trigger exercise modal -->
      <div class="text-center">
        <button
          type="button"
          class="blog-btn"
          data-toggle="modal"
          data-target="#exampleModal"
          v-on:click="getExercises()"
        >
          Add an Exercise
        </button>
      </div>

      <!--  Add Exercise Modal -->
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
            <form v-on:submit="updateWorkout(workout)">
              <div class="modal-body" v-for="exercise in this.exercises" v-bind:key="exercise.id">
                <h3>{{ exercise.name }}</h3>
                <p>{{ exercise.time }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</p>
                <button type="submit" class="primary-btn" v-on:click="addExercise(exercise)">Add</button>
              </div>
            </form>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Add Exercise Modal -->

    <!-- BEGIN EDIT WORKOUT MODAL -->
    <div class="container">
      <!-- <ul id="example-1">
        <div v-for="exercise in workout.exercises" v-bind:key="exercise.id">
          <h1>{{ exercise.name }}</h1>
          <h5>{{ exercise.time }} seconds | {{ exercise.reps }} reps | {{ exercise.sets }} sets</h5>
          <p>user: {{ exercise.user_id }}</p>
          <button type="submit" class="btn btn-danger" value="Update" v-on:click="destroyExercise(exercise)">
            Delete
          </button>
        </div>
      </ul>
      <router-link v-bind:to="`/workouts/${workout.id}/edit`">Edit Workout</router-link>
      | -->
      <!-- <router-link v-bind:to="`/exercises`">Add Exercise</router-link> -->

      <!--  edit workout Modal -->
      <div
        class="modal fade"
        id="workoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editWorkoutLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Workout</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form v-on:submit="updateWorkout(workout)">
              <h1>
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
                <!-- <button class="btn btn-danger" v-on:click="destroyWorkout(workout)">Delete</button> -->
              </div>
            </form>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END EDIT WORKOUT MODAL -->

    <!-- WORKOUT EDIT MODAL -->
    <!-- <div
      class="modal fade"
      id="workoutEditModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="workoutEditModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="workoutEditModalLabel">{{ workout.name }} || Workout Edit</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form v-on:submit.prevent="updateWorkout(workout)">
            <h1>
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
              <button type="submit" class="btn btn-danger" value="Update" v-on:click="destroyWorkout(workout)">
                Delete
              </button>
            </div>
          </form>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Done</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- ORIGINAL VUE -->

    <!-- FAB -->
    <fab :position="position" :bg-color="bgColor" :actions="fabActions" @new_exercise="new_exercise"></fab>
    <!-- FAB -->
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
      workout: {},
      exercises: [],
      exercise: {},
      max_time: 0,
      errors: [],
      bgColor: "#f34e3a",
      position: "bottom-right",
      fabActions: [
        {
          name: "new_exercise",
          icon: "fitness_center",
          tooltip: "New Exercise",
        },
      ],
    };
  },
  created: function () {
    this.showWorkouts();
  },
  methods: {
    new_exercise() {
      this.$router.push("/exercises/new");
    },
    showWorkouts: function () {
      axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
        // console.log("showing workout", response);
        // console.log("workout exercises", this.workout.exercises);
        this.workout = response.data;
        console.log(this.workout);
      });
    },
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
    destroyExercise: function (exercise) {
      var params = {
        exercise_id: exercise.id,
        workout_id: this.workout.id,
      };
      axios.delete("/api/workout_exercises/", { data: params }).then((response) => {
        console.log("exercises destroy", response);
        // in exercise object, remove this exercise - will not refresh
        this.workout.exercises.splice(this.workout.exercises.indexOf(exercise), 1);
        // this.$router.push("/workouts/" + this.$route.params.workout_id);
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
      });
    },
    getWorkout: function () {
      axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
        console.log("showing workout", response);
        this.workout = response.data;
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
.workout-show {
  background: white;
}
.breadcrumb-section {
  background: black;
}
.text-center {
  margin: 10px;
}
.col-lg-12 {
  margin: 12px;
}
.delete-button {
  padding: 12px;
}
.blog-btn {
  margin: 10px;
}
.primary-btn {
  margin: 10px;
}
</style>
