<template>
  <div class="content-view">
    <!-- img slide -->
    <v-carousel
      height="500"
      cycle
      style="max-width:1200px; margin:auto; margin-bottom:40px;"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-parallax :src="item.src"> </v-parallax>
      </v-carousel-item>
    </v-carousel>

    <!-- <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
      style="max-width:1200px; margin:auto; margin-bottom:40px;"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
      ],
    };
  },
};
</script>
