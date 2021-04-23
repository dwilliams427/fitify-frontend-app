<template>
  <div id="app">
    <header class="header-section">
      <div class="container">
        <div class="logo">
          <a href="./index.html">
            <h2>FITIFY</h2>
          </a>
        </div>
        <div class="nav-menu">
          <nav class="mainmenu mobile-menu">
            <ul>
              <li class="active"><a href="/home">Home</a></li>
              <li><a href="/workouts">Workouts</a></li>
              <li><a href="/exercises">Exercises</a></li>
              <li><a href="/about">About</a></li>
              <!-- <li>
                <a href="./blog.html">Blog</a>
                <ul class="dropdown">
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li> -->
              <!-- <li><a href="./contact.html">Contacts</a></li> -->
            </ul>
          </nav>
          <div class="nav-right search-switch">
            <i class="ti-search"></i>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="footer-form set-bg" data-setbg="img/contact-form-bg.jpg">
              <div class="row">
                <div class="col-lg-10">
                  <div class="section-title">
                    <h2>Request A Call Back</h2>
                    <p>
                      Shape your body and burn fat with strength training. With the right equipment such as free weights
                      or resistance machines.
                    </p>
                  </div>
                  <form action="#">
                    <div class="row">
                      <div class="col-lg-6">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div class="col-lg-6">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div class="col-lg-12">
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">
                          Submit
                          <i class="ti-angle-double-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
