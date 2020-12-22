<template>
  <div class="text-center alert-popup-area" v-if="dialog">
    <!-- <v-dialog > -->
    <v-card class="popup alert-popup">
      <v-card-title class="headline grey lighten-2">
        Alert
      </v-card-title>

      <v-card-text style="padding-top:16px;font-size:16px;">
        {{ resultText }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="show(false)">
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- </v-dialog> -->
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { ALERT_SHOW, ALERT_TEXT } from '@/store';
export default {
  data: () => ({}),

  computed: {
    ...mapState({
      dialog: ALERT_SHOW,
      resultText: ALERT_TEXT,
    }),
  },
  methods: {
    ...mapMutations({
      show: ALERT_SHOW,
    }),
  },
};
</script>

<style scoped>
.alert-popup-area {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.alert-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  max-width: 500px;
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>
