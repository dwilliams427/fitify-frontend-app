<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <span v-if="!isLoggedIn()">
        |
        <router-link to="/signup">Signup</router-link>
        |
      </span>
      <span v-if="!isLoggedIn()">
        |
        <router-link to="/login">Login</router-link>
      </span>
      |
      <router-link to="/logout">Logout</router-link>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Fitify</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">Workouts</a>
          <a class="nav-item nav-link" href="#">Exercises</a>
          <a class="nav-item nav-link" href="#">About</a>
          <a class="nav-item nav-link" href="#">Sign Up</a>
          <a class="nav-item nav-link" href="#">Login</a>
          <a class="nav-item nav-link" href="#">Logout</a>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Poppins, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  background-image: url("./assets/double-bubble-outline.png");
}
</style>
<script>
// import axios from "axios";

export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
