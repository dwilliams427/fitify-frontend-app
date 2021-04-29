<template>
  <div class="test">
    <div class="container">
      <splide :options="options">
        <splide-slide>
          <img src="img/trainer/trainer-1.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="img/trainer/trainer-1.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="img/trainer/trainer-1.jpg" />
        </splide-slide>
      </splide>

      <!-- AUTOPLAY -->
      <autoplay-example></autoplay-example>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import AutoplayExample from "../components/AutoplayExample";

export default {
  components: {
    AutoplayExample,
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        gap: "1rem",
      },
    };
  },
};
</script>

<style>
.test {
  background: white;
}
</style>
