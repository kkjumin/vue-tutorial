<template>
  <div>
    <h1>{{ this.$route.name }}</h1>

    <div class="content-view" style="max-width:1200px; margin:0 auto;">
      <v-img
        v-for="n in 8"
        :key="n"
        lazy-src="https://picsum.photos/id/11/10/6"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
    </div>
  </div>
</template>

<script>
import { members, popup, width } from '@/mixins';
export default {
  mixins: [popup, width, members],
  data: () => ({
    selected: [],
  }),
  computed: {
    selectedOn() {
      return name => (this.selected.name === name ? 'selected' : '');
    },
  },
  methods: {
    select(val) {
      this.selected = val;
    },
    imgClick(url) {
      this.openImgPopup(url);
    },
  },
};
</script>

<style>
.mem {
  width: calc(100% / 8 - 10px);
  float: left;
  border: 1px solid #eee;
  margin: 0 5px;
  height: 100%;
  background: #eee;
  cursor: pointer;
  /* transition: 0.1s; */
  margin-top: 10px;
  box-shadow: 3px 3px 3px #ddd;
  background-size: 100%;
  border-radius: 20px 0 20px 0;
}

.mem:hover {
  height: calc(100% + 20px);
  margin: 0px;
  margin-top: 0px;
  width: calc(100% / 8);
}

.mem::after {
  clear: both;
  content: '';
}

.mem.selected {
  height: calc(100% + 20px);
  margin: 0px;
  margin-top: 0px;
  width: calc(100% / 8);
}

.img-greed {
  width: 50%;
  float: left;
  padding: 0 20px;
}
.profile {
  width: 50%;
  padding: 12px;
  float: left;
}
.profile-pic img {
  width: 100%;
  cursor: pointer;
  box-shadow: 5px 5px 5px #ddd;
  border-radius: 20px;
}
.profile-detail {
  margin-top: 20px;
}

.mem-img {
  box-shadow: 3px 3px 3px #ddd;
  transition: 0.3s;
  border-radius: 10px;
}

.v-responsive__content:hover::after {
  content: '';
  color: #fff;
  background: #000 url('../assets/img/plus.png') no-repeat center center;
  background-size: 30%;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 500px) {
  .mem {
    width: calc(100% / 4 - 10px);
    height: calc(200%);
    margin-bottom: 20px;
    transition: none;
  }
  .mem:hover {
    width: calc(100% / 4);
    height: calc(200% + 20px);
    margin-bottom: 10px;
  }
  .mem.selected {
    width: calc(100% / 4);
    height: calc(200% + 20px);
    margin-bottom: 10px;
  }

  .profile {
    width: 100%;
    padding: 0;
  }
  .profile-pic img {
    display: block;
    width: 70%;
    margin: 0 auto;
  }
  .img-greed {
    width: 100%;
  }
}
</style>
