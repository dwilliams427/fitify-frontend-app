<template>
  <div id="app">
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
          <a class="nav-item nav-link active" href="/">
            Home
            <span class="sr-only">(current)</span>
          </a>
          <router-link to="/workouts" class="nav-item nav-link">Workouts</router-link>
          <router-link to="/exercises" class="nav-item nav-link">Exercises</router-link>
          <a class="nav-item nav-link" href="/about">About</a>
          <span v-if="!isLoggedIn()">
            <router-link to="/signup" class="nav-item nav-link">Sign Up</router-link>
          </span>
          <span v-if="!isLoggedIn()">
            <router-link to="/login" class="nav-item nav-link">Login</router-link>
          </span>
          <a class="nav-item nav-link" href="/logout">Logout</a>
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
