<template>
  <div id="app">
    <div>
      <!-- HEADER BEGIN -->
      <header class="header-section">
        <div class="container">
          <div class="logo">
            <a href="/workouts">
              <h2>FITIFY</h2>
            </a>
          </div>
          <div class="nav-menu">
            <nav class="mainmenu mobile-menu">
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/workouts">Workouts</a></li>
                <li><a href="/exercises">Exercises</a></li>
                <li v-if="!isLoggedIn()">
                  <span>
                    <!-- <router-link to="/signup" class="nav-item nav-link">Sign Up</router-link> -->
                    <a href="/signup">Sign Up</a>
                  </span>
                </li>
                <li v-if="!isLoggedIn()">
                  <span>
                    <!-- <router-link to="/login" class="nav-item nav-link">Login</router-link> -->
                    <a href="/login">Login</a>
                  </span>
                </li>
                <li><a class="nav-item nav-link" href="/logout">Logout</a></li>
                <!-- <li>
                <a href="./blog.html">Blog</a>
                <ul class="dropdown">
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li> -->
                <!-- <li><a href="./contact.html">Contacts</a></li> -->
              </ul>
            </nav>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    </div>
    <!-- Header End -->

    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
    </nav> -->
    <router-view />
    <!-- Footer Section Begin -->
    <footer class="footer">
      <div class="container-fluid"></div>
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer-widget">
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms Of Service</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div class="footer-links">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer Section End -->
  </div>
</template>

<style>
#app {
  background-color: black;
}
h2 {
  color: whitesmoke;
}
.header-section {
  background: black;
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
