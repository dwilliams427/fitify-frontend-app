<template>
  <div class="wrapper">
    <h2>Thumbnail Slider</h2>

    <div class="description">
      <a
        href="https://github.com/Splidejs/vue-splide/blob/master/examples/src/js/examples/components/ThumbnailsExample.vue"
        target="_blank"
        rel="noopener"
      >
        View Code
      </a>
    </div>

    <splide :options="primaryOptions" ref="primary">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt" />
      </splide-slide>
    </splide>

    <splide :options="secondaryOptions" ref="secondary">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { createSlides } from "./utils/slides";

export default {
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      options: {
        rewind: true,
        perPage: 1,
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        arrows: "slider",
        width: "65%",
        focus: "center",
        interval: 3000,
      },
      primaryOptions: {
        type: "loop",
        perPage: 2,
        perMove: 1,
        gap: "1rem",
        pagination: false,
      },
      secondaryOptions: {
        type: "slide",
        rewind: true,
        gap: "1rem",
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: "center",
        isNavigation: true,
        updateOnMove: true,
      },
      slides: createSlides(),
      count: 0,
    };
  },
  created() {
    this.showWorkout();
    this.getExercises();
  },
  mounted() {
    // Set the sync target.
    this.$refs.primary.sync(this.$refs.secondary.splide);
  },
  methods: {
    showWorkout: function () {
      axios.get("/api/workouts/" + this.$route.params.id).then((response) => {
        // console.log("showing workout", response);
        // console.log("workout exercises", this.workout.exercises);
        this.workout = response.data;
        console.log(this.workout);

        // this.exercises.push(this.workout.exercises);
      });
    },
    getExercises: function () {
      axios.get("/api/exercises").then((response) => {
        this.exercises = response.data;
        console.log(this.exercises);
      });
    },
  },
};
</script>
