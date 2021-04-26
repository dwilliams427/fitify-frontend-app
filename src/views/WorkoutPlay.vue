<template>
  <div class="workout-play">
    <!-- Site Breadcrumb Begin -->
    <div>
      <section class="breadcrumb-section set-bg" data-setbg="/assets/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <h2>About Us</h2>
                <div class="site-breadcrumb">
                  <a href="/workouts" class="sb-item">Workouts</a>
                  <span class="sb-item">{{ workout.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->
    <!-- Class Section Begin-->
    <section class="class-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="section-title">
                  <h2>{{ workout.name }}</h2>
                  <p>{{ workout.exercises.length }} exercises</p>
                </div>
              </div>
              <div class="col-lg-6">
                <a href="#" class="primary-btn">BEGIN</a>
              </div>
            </div>
            <!-- BEGIN TAB PANEL -->
            <div class="row">
              <div class="col-lg-12">
                <div class="class-item">
                  <div class="tab-content">
                    <div class="tab-pane fade-in active" id="exercise" role="tabpanel">
                      <div v-for="exercise in workout.exercises" v-bind:key="exercise.id">
                        <div class="single-class-item">
                          <div class="row">
                            <div class="col-lg-6">
                              <img src="/img/class/class-1.jpg" alt="" />
                            </div>
                            <div class="col-lg-5 offset-lg-1">
                              <div class="class-text">
                                <h3>{{ exercise.name }}</h3>
                                <p>{{ exercise.reps }} reps</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="tab-pane fade" id="class-2" role="tabpanel">
                      <div class="single-class-item">
                        <div class="row">
                          <div class="col-lg-6">
                            <img src="/img/class/author-2.jpg" alt="" />
                          </div>
                          <div class="col-lg-5 offset-lg-1">
                            <div class="class-text">
                              <h3>Racing running</h3>
                              <p>
                                Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen
                                your entire body, fast! Focusing on low weight loads and high repetition movements,
                                you'll burn fat, gain strength and quickly produce lean body muscle conditioning. All
                                the benefits of working with weighs in one action packed, highly physical class. The
                                world’s fastest way to get in shape. Find your Lessmills Bodypump class here.
                              </p>
                              <a href="#" class="schedule-btn">
                                View Schedule
                                <i class="fa fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="class-3" role="tabpanel">
                      <div class="single-class-item">
                        <div class="row">
                          <div class="col-lg-6">
                            <img src="/img/class/author-2.jpg" alt="" />
                          </div>
                          <div class="col-lg-5 offset-lg-1">
                            <div class="class-text">
                              <h3>Yoga Fitness</h3>
                              <p>
                                Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen
                                your entire body, fast! Focusing on low weight loads and high repetition movements,
                                you'll burn fat, gain strength and quickly produce lean body muscle conditioning. All
                                the benefits of working with weighs in one action packed, highly physical class. The
                                world’s fastest way to get in shape. Find your Lessmills Bodypump class here.
                              </p>
                              <a href="#" class="schedule-btn">
                                View Schedule
                                <i class="fa fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="class-4" role="tabpanel">
                      <div class="single-class-item">
                        <div class="row">
                          <div class="col-lg-6">
                            <img src="/img/class/author-3.jpg" alt="" />
                          </div>
                          <div class="col-lg-5 offset-lg-1">
                            <div class="class-text">
                              <h3>Kick boxing</h3>
                              <p>
                                Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen
                                your entire body, fast! Focusing on low weight loads and high repetition movements,
                                you'll burn fat, gain strength and quickly produce lean body muscle conditioning. All
                                the benefits of working with weighs in one action packed, highly physical class. The
                                world’s fastest way to get in shape. Find your Lessmills Bodypump class here.
                              </p>
                              <a href="#" class="schedule-btn">
                                View Schedule
                                <i class="fa fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="class-5" role="tabpanel">
                      <div class="single-class-item">
                        <div class="row">
                          <div class="col-lg-6">
                            <img src="/img/class/class-1.jpg" alt="" />
                          </div>
                          <div class="col-lg-5 offset-lg-1">
                            <div class="class-text">
                              <h3>Cardio workout</h3>
                              <p>
                                Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen
                                your entire body, fast! Focusing on low weight loads and high repetition movements,
                                you'll burn fat, gain strength and quickly produce lean body muscle conditioning. All
                                the benefits of working with weighs in one action packed, highly physical class. The
                                world’s fastest way to get in shape. Find your Lessmills Bodypump class here.
                              </p>
                              <a href="#" class="schedule-btn">
                                View Schedule
                                <i class="fa fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="class-6" role="tabpanel">
                      <div class="single-class-item">
                        <div class="row">
                          <div class="col-lg-6">
                            <img src="/img/class/class-1.jpg" alt="" />
                          </div>
                          <div class="col-lg-5 offset-lg-1">
                            <div class="class-text">
                              <h3>Martial Arts</h3>
                              <p>
                                Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen
                                your entire body, fast! Focusing on low weight loads and high repetition movements,
                                you'll burn fat, gain strength and quickly produce lean body muscle conditioning. All
                                the benefits of working with weighs in one action packed, highly physical class. The
                                world’s fastest way to get in shape. Find your Lessmills Bodypump class here.
                              </p>
                              <a href="#" class="schedule-btn">
                                View Schedule
                                <i class="fa fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- BOTTOM CARDS -->
            <div v-for="exercise in workout.exercises" v-bind:key="exercise.id">
              <div class="row">
                <div class="col-lg-12">
                  <div class="class-author">
                    <ul class="nav nav-tabs" role="tablist">
                      <li>
                        <a data-toggle="tab" class="active" href="#exercise" role="tab">
                          <div class="author-text">
                            <img src="/img/class/author-1.jpg" alt="" />
                            <h5>{{ exercise.name }}</h5>
                          </div>
                        </a>
                      </li>

                      <!-- <li>
                      <a data-toggle="tab" href="#class-2" role="tab">
                        <div class="author-text">
                          <img src="/img/class/author-2.jpg" alt="" />
                          <h5>Racing runing</h5>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#class-3" role="tab">
                        <div class="author-text">
                          <img src="/img/class/author-3.jpg" alt="" />
                          <h5>Yoga Fitness</h5>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#class-4" role="tab">
                        <div class="author-text">
                          <img src="/img/class/author-4.jpg" alt="" />
                          <h5>Kick boxing</h5>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#class-5" role="tab">
                        <div class="author-text">
                          <img src="/img/class/author-5.jpg" alt="" />
                          <h5>Cardio workout</h5>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#class-6" role="tab">
                        <div class="author-text">
                          <img src="/img/class/author-6.jpg" alt="" />
                          <h5>Martial Arts</h5>
                        </div>
                      </a>
                    </li> -->
                    </ul>
                  </div>
                </div>
              </div>
              <!-- BOTTOM CARDS -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Class Section End -->

    <!-- ORIGINAL VUE -->
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
    <!-- ORIGINAL VUE -->
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
    getExercises: function () {
      axios.get("api/exercises").then((response) => {
        this.exercises = response.data;
        console.log(this.exercises);
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
.workout-play {
  background: white;
}
</style>
