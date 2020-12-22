<template>
  <div>
    <h1>{{ this.$route.name }}</h1>

    <section class="content-view" style="max-width:1000px;">
      <!-- 앨범 큰 이미지 -->
      <v-card
        id="albumImg"
        class="album-img"
        :width="`${isMobile ? 100 : 48}%`"
        :height="`${isMobile ? 90 : 45}vw`"
        max-height="460px"
        max-width="460px"
        :style="
          `background: url('${require(`../assets/img/album/${selectedAlbumDetail.img}`)}') no-repeat center center;background-size:cover;`
        "
      >
        <!-- 앨범 호버시 뒷배경 -->
        <div class="album-back">
          <v-progress-circular
            :rotate="270"
            :width="1"
            :value="value"
            :max-value="50"
            color="red"
          >
            <v-icon v-if="!isPlay" color="#fff" class="music" @click="play()"
              >mdi-play</v-icon
            >
            <v-icon v-else class="music" color="#fff" @click="pause()"
              >mdi-pause</v-icon
            >
          </v-progress-circular>
        </div>
        <!-- 앨범 호버시 뒷배경 -->
      </v-card>
      <!-- 앨범 큰 이미지 -->

      <!-- 앨범 디테일 -->
      <v-card
        class="album-detail"
        :width="`${isMobile ? 100 : 48}%`"
        :height="`${isMobile ? 'auto' : '45vw'}`"
        :max-height="`${isMobile ? '' : '460px'}`"
        max-width="460px"
        :style="`float:left;margin-left:${isMobile ? 0 : 4}%`"
      >
        <p
          style="text-align:center;font-size:20px;font-weight:bold;margin-bottom:12px;"
        >
          {{ selectedAlbumDetail.name }}
        </p>
        <div style="font-weight:bold;margin:0 0 10px 20px;">Track List</div>
        <div
          v-for="(track, i) in selectedAlbumDetail.tracklist"
          :key="i"
          style="margin-bottom:4px;margin-left:20px;"
          class="songList"
          ref="songList"
        >
          {{ track.song }}
        </div>
      </v-card>
      <!-- 앨범 디테일 -->

      <!-- 슬라이드 -->
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
      <!-- 슬라이드 -->

      <!-- 오디오 DOM -->
      <audio
        ref="audio"
        :src="`${require(`../assets/mp3/${selectedAlbumDetail.titleSong}`)}`"
      ></audio>
      <!-- 오디오 DOM -->
    </section>
  </div>
</template>

<script>
import { width, albums } from '@/mixins';
export default {
  mixins: [width, albums],
  data: () => ({
    value: 0,
    tab: null,

    selectedAlbum: 0,
    selectedAlbumDetail: {},
    //앨범 사이 left,right 마진값
    albumMargin: 10,

    music: 100,
    buffer: 100,
    isPlay: false,
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
    songList() {
      return this.selectedAlbumDetail.tracklist;
    },
  },
  created() {
    this.initAlbum();
  },
  mounted() {
    this.$refs.audio.volume = 0.3;
    console.log(this.$refs.audio.volume);
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
      this.selectedAlbumDetail = this.album[0];
    },
    play() {
      this.isPlay = !this.isPlay;
      this.$refs.audio.play();
      this.playInterval();
    },
    pause() {
      this.isPlay = !this.isPlay;
      this.$refs.audio.pause();
      clearInterval(this.playCount);
    },

    playInterval() {
      this.playCount = setInterval(() => {
        let total = this.$refs.audio.duration.toFixed(0);
        let curr = this.$refs.audio.currentTime.toFixed(0);
        this.value = ((curr / total) * 100).toFixed(2);

        if (this.value >= 100) {
          clearInterval(this.playCount);
          this.value = 0;
          this.isPlay = false;
        }
      }, 100);
    },
    initInterval() {
      clearInterval(this.playCount);
      this.value = 0;
      this.isPlay = false;
      this.$refs.audio.pause();
      this.$refs.audio.currentTime = 0;
    },
    rotateImg() {
      const albumImg = document.getElementById('albumImg');
      albumImg.animate(
        //keyframe
        [{ transform: 'rotateY(360deg)' }],
        //timing options
        {
          duration: 500,
          // iterations: Infinity,
        },
      );
    },
    rotateText() {
      let songList = document.getElementsByClassName('songList');

      for (let i = 0; i < this.songList.length || 0; i++) {
        setTimeout(() => {
          songList[i]?.animate([{ transform: 'rotateX(360deg)' }], {
            duration: 300,
          });
        }, 50 * (i + 1));
      }
    },
  },
  watch: {
    selectedAlbum() {
      this.initInterval();
      this.rotateImg();
    },
    songList() {
      this.rotateText();
    },
  },
};
</script>

<style>
.album-img,
.album-detail {
  float: left;
  background: #eee;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 50px 0 50px 0 !important;
}
.album-img {
  cursor: pointer;
  transition: 0.3s;
}
.album-detail {
  padding: 15px;
}

.album-slide {
  clear: both;
  position: relative;
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  padding: 10px 40px 10px 40px;
  margin-bottom: 40px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
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
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
}

.album-arrow:hover {
  color: blue;
}

.music {
  cursor: pointer;
  margin-right: 10px;
}
.music:hover {
  color: blue;
}

.album-back {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: none;
  background: rgba(0, 0, 0, 0.5);
}

.album-img:hover .album-back {
  display: block;
}

.album-back button::before {
  font-size: 100px;
}
.album-back .v-progress-circular__overlay {
  transition: 1s !important;
}
.v-progress-circular {
  width: 100% !important;
  height: 100% !important;
}
</style>
