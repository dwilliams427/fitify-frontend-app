<template>
  <div class="wrapper">
    <h2>Autoplay</h2>

    <div class="description">
      <!-- <a
        href="https://github.com/Splidejs/vue-splide/blob/master/examples/src/js/examples/components/AutoplayExample.vue"
        target="_blank"
        rel="noopener"
      >
        View Code
      </a> -->
    </div>

    <splide :options="options" has-slider-wrapper>
      <splide-slide v-for="exercise in workout.exercises" :key="exercise.name">
        <img :src="exercise.image_url" alt="slide.alt" />

        <!-- <splide-slide v-for="exercise in workout.exercises" :key="exercise.src">
        <img :src="exercise.image_url" alt="alt" :interval="exercise.time" /> -->
      </splide-slide>

      <template v-slot:controls>
        <div class="splide__progress">
          <div class="splide__progress__bar"></div>
        </div>

        <div class="splide__autoplay">
          <button class="splide__play">Play</button>
          <button class="splide__pause">Pause</button>
        </div>
      </template>
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
  created() {
    this.showWorkout();
    this.getExercises();
  },
  data() {
    return {
      workout: {},
      exercises: [],
      exercise: {},
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
      slides: createSlides(),
    };
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

<style scoped lang="scss">
$color: #20b2aa;

.splide {
  &__autoplay {
    margin-top: 1em;
    text-align: center;
  }

  &__play,
  &__pause {
    border: none;
    background: $color;
    color: white;
    transition: background-color 0.2s linear;
    cursor: pointer;
    padding: 0.3em 1em;
    border-radius: 2em;
    outline: none;

    &:hover {
      background: darken($color, 20%);
    }
  }
}
</style>
