<template>
  <div class="sub03">
    <h1>{{ this.$route.name }}</h1>
    <dia-log />
    <div style="margin-top:20px"></div>
    <pop-up />
  </div>
</template>
<script>
import diaLog from '@/components/dialog.vue';
import popUp from '@/components/popup.vue';

export default {
  components: { diaLog, popUp },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
