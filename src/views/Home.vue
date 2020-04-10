<template>
  <div class="Dashboard">
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
