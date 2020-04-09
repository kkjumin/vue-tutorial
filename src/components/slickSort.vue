<template>
  <div class="root">
    <SlickList class="itemBox" lockAxis="y" v-model="items">
      <SlickItem
        class="itemList"
        v-for="(item, index) in items"
        :index="index"
        :key="index"
        :item="item"
      >
        <div>
          <img src="../assets/img/Hamburger_icon.png" />
          <span>{{ item }}</span>
        </div>
      </SlickItem>
    </SlickList>
  </div>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort';

export default {
  components: {
    SlickList,
    SlickItem
  },
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
    };
  }
};
</script>

<style scoped>
.itemList span {
  display: block;
  margin-top: 4px;
  margin-left: 10px;
  float: left;
}
.itemList img {
  float: left;
  width: 24px;
}
.itemList {
  display: inline-block;
  text-align: left;
  padding-left: 10px;
  padding-top: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #eee;
  cursor: pointer;
  margin-bottom: 2px;
}

.itemBox {
  position: relative;
  width: 200px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
