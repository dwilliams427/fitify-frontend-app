<template>
  <div class="workout-index">
    <!-- Site Breadcrumb Begin -->
    <br />
    <br />
    <div>
      <!-- <img src="/img/breadcrumb_background.png" alt="" /> -->
      <section class="breadcrumb-section set-bg" data-setbg="/img/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <div class="site-breadcrumb">
                  <a href="./home.html" class="sb-item">Home</a>
                  <span class="sb-item">Workouts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->

    <!-- CARDS BEGIN -->
    <div>
      <section class="about-page-trainer spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-12">
                <div class="section-title">
                  <h2>All Workouts</h2>
                  <p>Edit your workouts or create a new one</p>
                  <div v-if="!isLoggedIn()">
                    <a href="/signup">
                      SIGN UP
                      <i class="ti-angle-double-right"></i>
                    </a>
                    <p>or</p>
                    <a href="/login">
                      LOG IN
                      <i class="ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-deck">
            <div v-for="workout in workouts" v-bind:key="workout.id">
              <div class="row">
                <div class="col-lg-10">
                  <router-link v-bind:to="`workouts/${workout.id}`">
                    <div class="single-trainer-item">
                      <div class="trainer-pic">
                        <img src="img/gallery/gallery-2.jpg" alt="" />
                        <!-- <img :src="workout.image_url" alt="" /> -->
                      </div>
                      <div class="trainer-text">
                        <h5>{{ workout.name }}</h5>
                        <!-- <span>{{ workout.exercises.time }} exercises</span> -->

                        <router-link v-bind:to="`workouts/${workout.id}/play`">
                          <!-- <button type="button" class="btn btn-success">PLAY</button> -->
                          <button type="button" class="primary-btn">
                            PLAY
                            <i class="ti-angle-double-right"></i>
                          </button>
                        </router-link>
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
    <!-- CARDS END -->

    <!-- BEGIN CARDS -->
    <!-- <section class="latest-news-section spad">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Workouts</h2>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div v-for="workout in workouts" v-bind:key="workout.id">
          <div class="row">
            <div class="col-lg-10">
              <div class="latest-items">
                <div class="latest-pic">
                  <img src="img/latest-1.jpg" alt="" />
                </div>
                <div class="latest-text">
                  <div class="latest-tag">
                    <router-link v-bind:to="`workouts/${workout.id}`">
                      <h2>
                        <a class="card-title" href="blog-details.html">{{ workout.name }}</a>
                      </h2>
                    </router-link>
                    <div class="tag-clock">
                      <i class="fa fa-clock-o"></i>
                      Dec 11, 2018
                    </div>
                    <div class="tag-comments">
                      <i class="fa fa-comments-o"></i>
                      6 Comments
                    </div>
                    <router-link v-bind:to="`workouts/${workout.id}/play`">
                      <button type="button" class="primary-btn">
                        PLAY
                        <i class="ti-angle-double-right"></i>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- END CARDS -->

    <!-- FAB -->
    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @new_exercise="new_exercise"
      @new_workout="new_workout"
    ></fab>
    <!-- FAB -->

    <!-- VUE ORIGINAL -->
    <!-- <div class="container">
      <div class="text-center">
        <a class="btn btn-primary" href="/workouts/new" role="button">New Workout</a>
      </div>

      <div v-for="workout in workouts" v-bind:key="workout.id">
        <h5 class="card-title">{{ workout.name }}</h5>
        <router-link v-bind:to="`workouts/${workout.id}`">
          <button type="button" class="btn btn-link">More Info</button>
        </router-link>
        <router-link v-bind:to="`workouts/${workout.id}/play`">
          <button type="button" class="btn btn-success">PLAY</button>
        </router-link>
      </div>
    </div> -->
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
      num: 0,
      workouts: [],
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
    this.indexWorkouts();
  },
  methods: {
    new_workout() {
      this.$router.push("/workouts/new");
    },
    new_exercise() {
      this.$router.push("/exercises/new");
    },
    isLoggedIn: function () {
      console.log("Logged in");
      return localStorage.getItem("jwt");
    },
    indexWorkouts: function () {
      axios.get("api/workouts").then((response) => {
        console.log("workouts index", response);
        this.workouts = response.data;
        // this.num = this.workouts.exercises.length;
        // console.log("num of exercises:" + this.num);
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
.latest-news-section {
  background: white;
}
.card-title {
  color: black;
}
.primary-btn {
  justify-content: right;
}
.breadcrumb-section set-bg {
  background-image: url("/img/breadcrumb_background.png");
}
.col-lg-10 {
  margin: 10px;
}
</style>
