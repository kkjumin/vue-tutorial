<template>
  <div class="Dashboard">
    <h1 class="contentTitle">SlideMenu</h1>
    <SlideMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import SlideMenu from '@/components/slideMenu.vue';

export default {
  name: 'Dashboard',
  components: {
    SlideMenu
  },
  created() {}
};
</script>
