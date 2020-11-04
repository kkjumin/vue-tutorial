<template>
  <div class="sub05">
    <h1 class="contentTitle">Memo</h1>
    <div>
      <ul ref="target" style="padding:0;">
        <li
          v-for="(item, i) in videos.items"
          :key="i"
          class="card_contents"
          @click="playVideo(item.id.videoId)"
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
          :width="width"
          :height="width * 0.5625"
          :src="
            `https://www.youtube.com/embed/${selectedUrl}?rel=0;amp;autoplay=1`
          "
          frameborder="0"
        ></iframe>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import * as lovelyz from '../store/modules/lovelyz';
import { TEST_API, VIDEO } from '../store/modules/lovelyz';
export default {
  components: {},
  data: () => ({
    popup: false,
    selectedUrl: '',
    width: window.innerWidth > 1024 ? 1024 : window.innerWidth,
    height: window.innerHeight,
  }),

  computed: {
    ...lovelyz.mapState({
      videos: VIDEO,
    }),
  },
  created() {
    this.testApi();
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    ...lovelyz.mapActions({
      testApi: TEST_API,
    }),
    playVideo(videoId) {
      this.popup = !this.popup;
      console.log(videoId);
      this.selectedUrl = videoId;
    },
    handleResize() {
      this.width = window.innerWidth;
      if (this.width > 1024) {
        this.width = 1024;
      }
      this.height = window.innerHeight;
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
  background: url('../../src/assets/img/playButton.png') no-repeat center center;
  background-size: contain;
}
.v-dialog {
  box-shadow: none !important;
}
</style>
