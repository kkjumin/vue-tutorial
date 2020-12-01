<template>
  <div>
    <h1>{{ this.$route.name }}</h1>

    <section class="content-view" style="max-width:1000px;">
      <v-card
        class="album-img"
        :width="`${isMobile ? 100 : 48}%`"
        :height="`${isMobile ? 75 : 45}vw`"
        max-height="460px"
        max-width="460px"
        :style="
          `background: url('${require(`../assets/img/album/${selectedAlbumDetail.img}`)}') no-repeat center center;background-size:cover;`
        "
      ></v-card>
      <v-card
        class="album-detail"
        :width="`${isMobile ? 100 : 48}%`"
        :height="`${isMobile ? 75 : 45}vw`"
        max-height="460px"
        max-width="460px"
        :style="`float:left;margin-left:${isMobile ? 0 : 4}%`"
      >
        <p style="text-align:center;font-size:20px;">
          {{ selectedAlbumDetail.name }}
        </p>
      </v-card>
      <!-- <div
        class="album-img"
        :style="
          `background: url('${require(`../assets/img/album/${selectedAlbumDetail.img}`)}') no-repeat center center;
          width:${isMobile ? width - 57 : width / 2 - 30}px;height:${
            isMobile ? 80 : 50
          }vw;background-size:cover;`
        "
      ></div> -->
      <!-- <div
        class="album-detail"
        :style="
          `width:${isMobile ? width - 57 : width / 2 - 30}px;height:${
            isMobile ? 80 : 50
          }vw;`
        "
      >
        <p style="font-size:20px;text-align:center;">
          {{ selectedAlbumDetail.name }}
        </p>
      </div> -->

      <div class="album-slide" :style="`width:${slideWidth}px`">
        <div
          :style="
            `width:${contentWidth * albumCount};height:${albumSize +
              10}px;overflow:hidden;padding-top:5px;`
          "
        >
          <v-icon x-large class="album-arrow left-arrow" @click="move('left')">
            mdi-menu-left
          </v-icon>
          <v-icon
            x-large
            class="album-arrow right-arrow"
            @click="move('right')"
          >
            mdi-menu-right
          </v-icon>
          <v-icon x-large class="album-arrow up-arrow" color="red">
            mdi-menu-up
          </v-icon>
          <ul
            ref="albumList"
            class="album-list"
            :style="
              `width:${contentWidth * album.length}px; height: ${albumSize +
                20}px; margin-left:${startPoint}px;padding-left:0;`
            "
          >
            <li
              class="album"
              v-for="(item, i) in album"
              :key="item.key"
              @click="selectAlbum(item, i)"
              :style="
                `width:${albumSize}px;margin:0 ${albumMargin}px 0 ${albumMargin}px`
              "
            >
              <img
                class="slide-img"
                :src="require(`../assets/img/album/${item.img}`)"
                :alt="item.tab"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { width, albums } from '@/mixins';
export default {
  mixins: [width, albums],
  data: () => ({
    tab: null,

    selectedAlbum: 0,
    selectedAlbumDetail: {},
    //앨범 사이 left,right 마진값
    albumMargin: 10,
  }),
  computed: {
    test() {
      return document.getElementsByClassName('album-img')[0].clientWidth;
    },
    // 앨범 슬라이드 픽셀
    albumSize() {
      return this.isMobile ? this.width / 10 : this.width / 15;
    },
    // 앨범 갯수는 홀수만 가능
    albumCount() {
      return this.isMobile ? 3 : 5;
    },
    contentWidth() {
      return this.albumSize + this.albumMargin * 2;
    },
    slideWidth() {
      return this.contentWidth * this.albumCount + 80;
    },
    startPoint() {
      return parseInt(this.albumCount / 2) * this.contentWidth;
    },
  },
  created() {
    this.initAlbum();
  },
  methods: {
    move(dir) {
      const target = this.$refs.albumList.style;

      if (dir === 'right' && this.selectedAlbum < this.album.length - 1) {
        this.selectedAlbum += 1;
      } else if (dir === 'left' && this.selectedAlbum !== 0) {
        this.selectedAlbum -= 1;
      }
      this.selectedAlbumDetail = this.album[this.selectedAlbum];
      target.marginLeft =
        this.startPoint - this.selectedAlbum * this.contentWidth + 'px';
    },
    selectAlbum(album, i) {
      this.selectedAlbum = i;
      this.selectedAlbumDetail = album;
      const target = this.$refs.albumList.style;
      target.marginLeft =
        this.startPoint - this.selectedAlbum * this.contentWidth + 'px';
    },
    initAlbum() {
      console.log(this.album[0]);
      this.selectedAlbumDetail = this.album[0];
    },
  },
};
</script>

<style>
.album-img,
.album-detail {
  float: left;
  background: #eee;
  padding: 10px;
  margin-bottom: 30px;
}
.album-slide {
  clear: both;
  position: relative;
  display: block;
  margin: 0 auto;
  background: #eee;
  border-radius: 20px;
  padding: 10px 40px 10px 40px;
  margin-bottom: 40px;
}
.album-list {
  padding: 0;
  transition: 0.2s;
}
.album {
  display: inline-block;
  cursor: pointer;
  box-shadow: 3px 3px 3px #aaa;
}
.slide-img {
  width: 100%;
  float: left;
}
.album-arrow {
  position: absolute !important;
}
.left-arrow {
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.right-arrow {
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.up-arrow {
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
}

.album-arrow:hover {
  color: blue;
}
</style>
