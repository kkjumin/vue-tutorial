<template>
  <div v-if="show && !isChrome" class="main-alert">
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow">
          이 사이트는
          <img
            class="chrome-icon"
            src="../assets/img/chrome.png"
            alt="chrome"
            @click="link()"
          />Chrome기반의 브라우저에 최적화되어 있습니다.
        </v-col>

        <v-btn class="close-btn" @click="show = false">CLOSE</v-btn>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
  computed: {
    isChrome() {
      const browser = navigator.userAgent.toLowerCase();
      let isChrome = false;
      if (browser.includes('mobile') || browser.includes('chrome')) {
        isChrome = true;
      }
      return isChrome;
    },
  },
  methods: {
    link() {
      window.open('https://www.google.com/intl/ko/chrome/');
    },
  },
};
</script>

<style>
.main-alert {
  position: fixed;
  bottom: 10px;
  left: 0;
  width: calc(100% - 20px);
  margin: 10px 10px;
  z-index: 100;
}

.close-btn {
  margin-right: 40px;
}

.chrome-icon {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  vertical-align: middle;
  margin-bottom: 8px;
  cursor: pointer;
}
</style>
