<template>
  <div>
    <h1>{{ this.$route.name }}</h1>

    <section class="content-view">
      <div class="album-img">img</div>
      <div class="album-detail">deteil</div>
      <div class="album-slide" :style="`width:${slideWidth}px`">
        <div
          :style="
            `width:${contentWidth *
              albumCount};height:${albumSize}px;overflow:hidden`
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
              `width:${contentWidth * items.length}px; height: ${albumSize +
                20}px; margin-left:${startPoint}px;padding-left:0;`
            "
          >
            <li
              class="album"
              v-for="(item, i) in items"
              :key="item.tab"
              @click="selectAlbum(i)"
              :style="
                `width:${albumSize}px;margin:0 ${albumMargin}px 0 ${albumMargin}px`
              "
            >
              <img class="slide-img" :src="item.url" :alt="item.tab" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: [
      {
        tab: 'One',
        content: 'Tab 1 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Two',
        content: 'Tab 2 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Three',
        content: 'Tab 3 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Four',
        content: 'Tab 4 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Five',
        content: 'Tab 5 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Six',
        content: 'Tab 6 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Seven',
        content: 'Tab 7 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Eight',
        content: 'Tab 8 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Nine',
        content: 'Tab 9 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
      {
        tab: 'Ten',
        content: 'Tab 10 Content',
        url: 'https://picsum.photos/1000?image=10',
      },
    ],
    selectedAlbum: 0,

    // 앨범 슬라이드 픽셀
    albumSize: 100,
    // 앨범 갯수는 홀수만 가능
    albumCount: 5,
    //앨범 사이 left,right 마진값
    albumMargin: 10,
  }),
  computed: {
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
  methods: {
    move(dir) {
      const target = this.$refs.albumList.style;

      if (dir === 'right' && this.selectedAlbum < this.items.length - 1) {
        this.selectedAlbum += 1;
      } else if (dir === 'left' && this.selectedAlbum !== 0) {
        this.selectedAlbum -= 1;
      }
      target.marginLeft =
        this.startPoint - this.selectedAlbum * this.contentWidth + 'px';
    },
    selectAlbum(i) {
      console.log(i);
      this.selectedAlbum = i;
      const target = this.$refs.albumList.style;
      target.marginLeft =
        this.startPoint - this.selectedAlbum * this.contentWidth + 'px';
    },
  },
};
</script>

<style>
.album-img,
.album-detail {
  display: inline-block;
  width: 50%;
  height: 300px;
  background: #eee;
  padding: 10px;
}

.album-slide {
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  background: #eee;
  border-radius: 20px;
  padding: 10px 40px 10px 40px;
}

.album-list {
  padding: 0;
  transition: 0.2s;
}

.album {
  display: inline-block;
  cursor: pointer;
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
