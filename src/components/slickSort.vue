<template>
  <div class="root">
    <SlickList class="itemBox" lockAxis="y" v-model="items">
      <SlickItem
        class="itemList"
        v-for="(item, index) in items"
        :index="index"
        :key="index"
        :item="item"
        @change="test()"
      >
        <div>
          <img src="../assets/img/Hamburger_icon.png" />
          <v-icon style="float:left; margin-left:40px">{{ item.icon }}</v-icon>
          <span>{{ item.name }}</span>
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
    SlickItem,
  },
  data() {
    return {
      items: [
        { name: 'Item 1', icon: 'mdi-school' },
        { name: 'Item 2', icon: 'mdi-adobe-acrobat' },
        { name: 'Item 3', icon: 'mdi-account-circle' },
        { name: 'Item 4', icon: 'mdi-onepassword' },
        { name: 'Item 5', icon: 'mdi-rotate-orbit' },
        { name: 'Item 6', icon: 'mdi-plus-thick' },
        { name: 'Item 7', icon: 'mdi-trophy-variant-outline' },
        { name: 'Item 8', icon: 'mdi-airplane' },
      ],
    };
  },
  created() {
    this.initItems();
  },
  methods: {
    initItems() {
      if (localStorage.slickItems) {
        this.items = JSON.parse(localStorage.slickItems);
      }
    },
  },
  watch: {
    items() {
      localStorage.slickItems = JSON.stringify(this.items);
    },
  },
};
</script>

<style scoped>
.itemList span {
  display: block;
  margin-top: 4px;
  margin-left: 10px;
  float: left;
  color: #000;
  line-height: 1;
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
