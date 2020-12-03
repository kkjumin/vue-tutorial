import { POPUP, IMG_URL, VIDEO_URL } from '@/store/types';
import { mapMutations } from 'vuex';

export const popup = {
  methods: {
    ...mapMutations({
      popup: POPUP,
      imgUrl: IMG_URL,
      videoUrl: VIDEO_URL,
    }),
    openImgPopup(imgUrl) {
      this.popup(true);
      this.imgUrl(imgUrl);
    },
    openVideoPopup(videoUrl) {
      this.popup(true);
      this.videoUrl(videoUrl);
    },
    closePopup() {
      this.popup(false);
      this.imgUrl('');
      this.videoUrl('');
    },
  },
};
