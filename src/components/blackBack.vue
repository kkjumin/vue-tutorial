<template>
  <div v-if="popupState" class="black-back" @click.prevent="popup(false)">
    <div class="popup-contents">
      <img :src="imgUrl" alt="test" />
      <div class="closeBtn" @click="popup(false)">
        <v-icon color="#fff" size="40px">mdi-close-thick</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { POPUP, URL } from '@/store/types';
export default {
  computed: {
    ...mapGetters({
      popupState: POPUP,
      imgUrl: URL,
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
