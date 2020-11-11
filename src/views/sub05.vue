<template>
  <div class="sub05">
    <h1 class="contentTitle">Memo</h1>

    <div>
      <ul id="videoContents" ref="target" style="padding:0;">
        <li
          v-for="(item, i) in videos.items"
          :key="i"
          :style="`width:${contentWidth}px;height:${contentHeight}px;`"
          class="card_contents"
          @click="playVideo(item.snippet.resourceId.videoId)"
        >
          <div
            class="thumbNail"
            :style="
              `background:url('${item.snippet.thumbnails.high.url}') no-repeat center center;background-size:cover;`
            "
          ></div>

          <div class="blackBack"></div>

          <div class="btnPlay"></div>
        </li>
      </ul>
    </div>

    <v-row justify="center">
      <v-dialog v-model="popup" max-width="1024">
        <iframe
          id="video"
          :width="width"
          :height="width * 0.5625"
          :src="
            `https://www.youtube.com/embed/${selectedUrl}?rel=0;amp;autoplay=1;`
          "
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </v-dialog>
    </v-row>

    <div class="pagination">
      <ul>
        <li v-if="videos.prevPageToken" @click="pagePrev()">Prev</li>
        <li v-if="videos.nextPageToken" @click="pageNext()">Next</li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as lovelyz from '../store/modules/lovelyz';

import { YOUTUBE_PLAYLIST, VIDEO } from '../store/modules/lovelyz';

export default {
  components: {},

  data: () => ({
    popup: false,
    selectedUrl: '',
    width: window.innerWidth > 1024 ? 1024 : window.innerWidth,
    areaWidth: null,
  }),

  computed: {
    ...lovelyz.mapState({
      videos: VIDEO,
    }),
    contentWidth() {
      let conwidth;
      if (this.width < 768) {
        conwidth = this.areaWidth / 2 - 21;
      } else {
        conwidth = this.areaWidth / 3 - 21;
      }

      return parseInt(conwidth.toFixed(0));
    },
    contentHeight() {
      return this.contentWidth * 0.5625;
    },
  },

  created() {
    this.youtubePlayList();
  },

  mounted() {
    this.areaWidth = document.getElementById('videoContents').offsetWidth;
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('resize', this.handleResize2);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('resize', this.handleResize2);
  },

  methods: {
    ...lovelyz.mapActions({
      youtubePlayList: YOUTUBE_PLAYLIST,
    }),

    playVideo(videoId) {
      this.popup = true;
      let video = document.getElementById('video');
      this.selectedUrl = videoId;
      if (video) {
        video.src = `https://www.youtube.com/embed/${this.selectedUrl}?rel=0;amp;autoplay=1;`;
      }
    },

    handleResize() {
      this.width = window.innerWidth;

      if (this.width > 1024) {
        this.width = 1024;
      }

      this.height = window.innerHeight;
    },
    handleResize2() {
      this.areaWidth = document.getElementById('videoContents').offsetWidth;
    },

    pageNext() {
      this.youtubePlayList(this.videos.nextPageToken);
    },
    pagePrev() {
      this.youtubePlayList(this.videos.prevPageToken);
    },
    stop() {
      document.getElementById('video').src = '';
    },
  },
  watch: {
    popup() {
      if (!this.popup) {
        console.log('Popup Close');
        this.stop();
      }
    },
  },
};
</script>

<style>
.card_contents {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 10px;
  width: calc(100% / 3 - 20px);
  height: 17vw;
  border-radius: 10px;
  box-shadow: 5 9 black;
  box-shadow: 10px 5px 5px #ddd;
  cursor: pointer;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .card_contents {
    width: calc(100% / 2 - 20px);

    height: 26vw;
  }
}

.card_contents:hover {
  box-shadow: 10px 5px 5px rgb(255, 186, 186);
}

.thumbNail {
  width: 100%;

  height: 100%;

  background-size: cover;
}

.blackBack {
  display: none;
}

.btnPlay {
  display: none;
}

.card_contents:hover .blackBack {
  position: absolute;

  top: 0;

  display: block;

  width: 100%;

  height: 100%;

  background: #000;

  opacity: 0.3;
}

.card_contents:hover .btnPlay {
  position: absolute;

  top: 50%;

  left: 50%;

  transform: translate(-50%, -50%);

  display: block;

  width: 30%;

  height: 30%;

  border-radius: 10px;

  background: url('../../src/assets/img/playBtn.png') no-repeat center center;

  background-size: contain;
}

.v-dialog {
  box-shadow: none !important;
}

.pagination {
  width: 100%;
  text-align: center;
}
.pagination li {
  display: inline-block;
  font-size: 1.5em;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.pagination li:hover {
  font-weight: bold;
}
</style>
