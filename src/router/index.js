import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ExerciseIndex from "../views/ExerciseIndex.vue";
import WorkoutIndex from "../views/WorkoutIndex.vue";
import WorkoutNew from "../views/WorkoutNew.vue";
import WorkoutShow from "../views/WorkoutShow.vue";



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
    path: "/exercises",
    name: "exercise-index",
    component: ExerciseIndex,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
