<template>
  <div class="signup">
    <!-- Site Breadcrumb Begin -->
    <div>
      <section class="breadcrumb-section set-bg" data-setbg="/assets/breadcrumb_background.png">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="site-text">
                <br />
                <div class="site-breadcrumb">
                  <a href="/home" class="sb-item">Home</a>
                  <span class="sb-item">Signup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Site Breadcrumb End -->

    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Fitify</h1>
        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
        <!-- <div class="col-xs-4"> -->
        <div class="form-group col-md-3">
          <label>Username:</label>
          <input type="text" class="form-control" v-model="username" />
          <small class="text-danger" v-if="username.length >= 0 && username.length < 8">
            {{ 8 - username.length }} characters remaining
          </small>
        </div>
        <!-- </div> -->
        <div class="form-group col-md-3">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group col-md-3">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" maxlength="16" />
        </div>
        <div class="form-group col-md-3">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" />
          <small class="text-danger" v-if="passwordConfirmation != password">passwords must be the same</small>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
<style>
#signup {
  align-content: center;
}
.signup {
  background: white;
}
</style>
