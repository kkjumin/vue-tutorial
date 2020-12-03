<template>
  <div class="content-view">
    <!-- img slide -->
    <v-carousel height="500" cycle class="slide-banner">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-parallax :src="item.src"> </v-parallax>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style>
.slide-banner {
  max-width: 1200px;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 50px;
}
</style>
