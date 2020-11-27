import { POPUP, URL } from '@/store/types';
import { mapMutations } from 'vuex';

export const popup = {
  methods: {
    ...mapMutations({
      popup: POPUP,
      url: URL,
    }),
    openPopup(url) {
      this.popup(true);
      this.url(url);
    },
    closePopup() {
      this.popup(false);
    },
  },
};
