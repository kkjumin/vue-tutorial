<template>
  <div v-if="popupState" class="black-back" @click.prevent="popup(false)">
    <div class="popup-contents">
      <img v-if="!_.isEmpty(imgUrl)" :src="imgUrl" alt="test" />
      <iframe
        v-if="!_.isEmpty(videoUrl)"
        class="videoPlayer"
        type="text/html"
        :src="`https://www.youtube.com/embed/${videoUrl}?autoplay=1`"
        frameborder="0"
        :width="width"
        :height="width * 0.75"
        style="max-width:1024px;max-height:640px;padding:20px;"
        max-width="1024"
        max-height="768"
      ></iframe>
      <!-- 0.5625 -->
      <div class="closeBtn" @click="popup(false)">
        <v-icon color="#fff" size="40px">mdi-close-thick</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { POPUP, IMG_URL, VIDEO_URL } from '@/store/types';
import { width } from '@/mixins';
export default {
  mixins: [width],
  computed: {
    ...mapGetters({
      popupState: POPUP,
      imgUrl: IMG_URL,
      videoUrl: VIDEO_URL,
    }),
  },
  methods: {
    ...mapMutations({
      popup: POPUP,
    }),
  },
};
</script>

<style>
.black-back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.popup-contents {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.popup-contents img {
  max-height: 780px;
  max-width: 1000px;
}
.closeBtn {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

@media (max-width: 500px) {
  .popup-contents {
    width: 100%;
  }
  .popup-contents img {
    width: 100%;
  }
}
</style>
