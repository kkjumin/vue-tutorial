<template>
  <div class="sub02">
    <h1>StyleBinding</h1>
    <div class="testbox" :style="{ background: selectedColor }"></div>
    <ul class="colorPic">
      <li
        v-for="(color, i) in colorList"
        :key="i"
        :style="{ background: color.code }"
        style="cursor:pointer;"
        @click="changeColor(color)"
      >
        <span style="margin-left:30px">{{ color.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedColor: 'red', // defualt: red
    colorList: [
      { name: 'red', code: 'red' },
      { name: 'orange', code: 'orange' },
      { name: 'yellow', code: 'yellow' },
      { name: 'green', code: 'green' },
      { name: 'blue', code: 'blue' },
      { name: 'indigo', code: 'indigo' },
      { name: 'purple', code: 'purple' },
    ],
  }),
  methods: {
    changeColor(color) {
      this.selectedColor = color.code;
    },
  },
};
</script>
<style scoped>
.testbox {
  width: 200px;
  height: 200px;
  background: #eee;
  margin: auto;
}
.colorPic {
  list-style: none;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  width: 200px;
  height: 200px;
}
.colorPic li {
  width: 20px;
  height: 20px;
  background: #eee;
  margin-bottom: 3px;
  margin-top: 3px;
}
</style>
