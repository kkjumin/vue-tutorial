<template>
  <div class="sub05">
    <h1>{{ this.$route.name }}</h1>
    <section class="content-view">
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col v-for="(item, i) in playList.items" :key="i" cols="12" sm="4">
            <v-card
              class="pa-2"
              style="margin:10px;cursor:pointer;"
              @click="playVideo(item.snippet.resourceId.videoId)"
            >
              <div class="video-box" style="position:relative;">
                <img
                  class="thumbnail"
                  :src="item.snippet.thumbnails.medium.url"
                  alt=""
                />
                <div class="video-back">
                  <v-icon class="youtube-ico" color="red" style=""
                    >mdi-youtube</v-icon
                  >
                </div>
              </div>

              <p
                class="video-title"
                style="height:50px;overflow:hidden;margin-top:15px;"
              >
                {{ item.snippet.title }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="btn-wrap">
        <button v-if="playList.prevPageToken" class="btn-prev" @click="prev()">
          Prev
        </button>
        <button v-if="playList.nextPageToken" class="btn-next" @click="next()">
          Next
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { popup } from '@/mixins';
import * as lovelyz from '@/store/modules/lovelyz';

export default {
  mixins: [popup],
  data: () => ({}),
  computed: {
    ...lovelyz.mapGetters({
      playList: lovelyz.VIDEO,
    }),
  },
  created() {
    this.getPlayList();
  },
  methods: {
    ...lovelyz.mapActions({
      getPlayList: lovelyz.YOUTUBE_PLAYLIST,
    }),
    playVideo(videoId) {
      console.log(videoId);
      this.openVideoPopup(videoId);
    },
    prev() {
      let key = this.playList.prevPageToken;
      this.getPlayList(key);
    },
    next() {
      let key = this.playList.nextPageToken;
      this.getPlayList(key);
    },
  },
};
</script>

<style>
.video-back {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
}

.video-box:hover .video-back {
  display: block;
}

.thumbnail {
  display: block;
  width: 100%;
}

.youtube-ico {
  position: absolute !important;
  font-size: 50px !important;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.btn-wrap {
  text-align: center;
}
.btn-wrap .btn-prev,
.btn-wrap .btn-next {
  font-size: 30px;
  margin: 20px;
}
</style>
