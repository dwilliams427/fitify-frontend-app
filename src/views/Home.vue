<template>
  <div class="Home">
    <!-- About Us Secion Begin -->
    <br />
    <br />
    <section class="about-us-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="about-pic">
              <img src="img/about-us.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="about-text">
              <div class="section-title">
                <h2>Welcome to Fitify</h2>
                <p>
                  Our custom workout builder allows you to discover new training techniques and exercises that offer a
                  dynamic and efficient full-body workout.
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <router-link to="/workouts">
                <button type="button" class="primary-btn">
                  Workouts
                  <i class="ti-angle-double-right"></i>
                </button>
              </router-link>
              <router-link to="/exercises">
                <button type="button" class="primary-btn">
                  Exercises
                  <i class="ti-angle-double-right"></i>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us Secion End -->

    <!-- Why Choose Us Section Begin -->
    <div>
      <section class="choseus-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Why Choose Fitify</h2>
                <p>Our custom workout builder can help you discover new training techniques.</p>
              </div>
            </div>
          </div>
          <div class="chose-items">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="ci-item">
                  <i class="ti-crown"></i>
                  <h5>How do I make a workout?</h5>
                  <p>Simply press the create workout button and begin</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="ci-item">
                  <i class="ti-package"></i>
                  <h5>How do I play my workout?</h5>
                  <p>Press the PLAY button when yo're ready to workout.</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="ci-item">
                  <i class="ti-shopping-cart"></i>
                  <h5>What do you mean by exercise?</h5>
                  <p>A single exercise such as a push-up or squat.</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="ci-item">
                  <i class="ti-user"></i>
                  <h5>Top notch customer support</h5>
                  <p>It's the best.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Why Chose Us Section End -->
  </div>
</template>

<script>
// import axios from "axios";

export default {};
</script>
<style>
.Home {
  background: white;
}
.choseus-section {
  background: black;
}
</style>
