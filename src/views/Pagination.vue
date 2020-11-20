<template>
  <div>
    <h1>{{ this.$route.name }}</h1>
    <div class="content-view">
      <ul style="margin: 0 auto; padding:0">
        <template v-for="item in items">
          <li
            class="img-item"
            v-if="item.key === page"
            :key="item.key"
            :style="
              `background:url(${item.img})no-repeat center center; background-size:cover;`
            "
          ></li>
        </template>
      </ul>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="5"
          :total-visible="5"
          circle
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// const page01 = require('../assets/img/page01.jpg');
export default {
  components: {},

  data: () => ({
    page: 1,
    items: [
      { key: 1, name: 'test1', img: require('../assets/img/page01.jpg') },
      { key: 2, name: 'test2', img: require('../assets/img/page02.jpg') },
      { key: 3, name: 'test3', img: require('../assets/img/page03.jpg') },
      { key: 4, name: 'test4', img: require('../assets/img/page04.jpg') },
      { key: 5, name: 'test5', img: require('../assets/img/page05.jpg') },
    ],
  }),

  computed: {},

  created() {},

  mounted() {},

  beforeDestroy() {},

  methods: {},
  watch: {},
};
</script>

<style>
.img-item {
  border: 1px solid #ddd;
  box-shadow: 10px 5px 5px #ddd;
  width: 300px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 10px;
  transition: 0.3s;
}
</style>
