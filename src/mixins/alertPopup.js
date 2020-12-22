import { ALERT_SHOW, ALERT } from '@/store';
import { mapMutations, mapState } from 'vuex';

export const alertPopup = {
  computed: {
    ...mapState({
      dialog: ALERT_SHOW,
    }),
  },
  methods: {
    ...mapMutations({
      alertPopup: ALERT,
    }),
    alert(text) {
      this.alertPopup({ show: true, text });
    },
  },
};
