import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ExerciseIndex from "../views/ExerciseIndex.vue";
import ExerciseNew from "../views/ExerciseNew.vue";
import ExerciseShow from "../views/ExerciseShow.vue";
import ExerciseEdit from "../views/ExerciseEdit.vue";
import WorkoutIndex from "../views/WorkoutIndex.vue";
import WorkoutNew from "../views/WorkoutNew.vue";
import WorkoutShow from "../views/WorkoutShow.vue";
import WorkoutPlay from "../views/WorkoutPlay.vue";
import WorkoutEdit from "../views/WorkoutEdit.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/exercises/new",
    name: "exercise-new",
    component: ExerciseNew,
  },
  {
    path: "/exercises/:id/edit",
    name: "exercise-edit",
    component: ExerciseEdit,
  },
  {
    path: "/exercises",
    name: "exercise-index",
    component: ExerciseIndex,
  },
  {
    path: "/exercises/:id",
    name: "exercise-show",
    component: ExerciseShow,
  },
  {
    path: "/workouts",
    name: "workout-index",
    component: WorkoutIndex,
  },
  {
    path: "/workouts/new",
    name: "workout-new",
    component: WorkoutNew,
  },
  {
    path: "/workouts/:id",
    name: "workout-show",
    component: WorkoutShow,
  },
  {
    path: "/workouts/:id",
    name: "workout-play",
    component: WorkoutPlay,
  },
  {
    path: "/workouts/:id/edit",
    name: "workout-edit",
    component: WorkoutEdit,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
