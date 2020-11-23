<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <!-- 사이드 메뉴 -->
        <v-list-item
          v-for="(menu, i) in sideMenu"
          link
          @click="linkTo(menu.name)"
          :class="tabOn(menu.name)"
          :key="i"
        >
          <v-list-item-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Application </v-toolbar-title>
      <current-time />
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <span>&copy; 2020 Jumin</span>
    </v-footer>
  </v-app>
</template>

<script>
import CurrentTime from '@/components/currentTime';
export default {
  components: {
    CurrentTime,
  },
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
    sideMenu: [
      { name: 'Home', icon: 'mdi-home' },
      { name: 'SlickSort', icon: 'mdi-sort' },
      { name: 'StyleBinding', icon: 'mdi-palette' },
      { name: 'DialogPopup', icon: 'mdi-window-restore' },
      { name: 'Chart', icon: 'mdi-chart-bar' },
      { name: 'Video', icon: 'mdi-youtube' },
      { name: 'Board', icon: 'mdi-image-edit' },
      { name: 'Pagination', icon: 'mdi-arrow-left-right' },
      { name: 'Calendar', icon: 'mdi-calendar' },
    ],
  }),

  created() {},

  computed: {
    tabOn() {
      return tabName => tabName === this.$route.name && 'tabOn';
    },
  },

  methods: {
    linkTo(params) {
      // router.push는 promise를 반환하므로 catch로 잡아야됨
      this.$router.push({ name: params }).catch(() => {});
    },
  },
};
</script>

<style>
@import url('../src/assets/css/reset.css');
@import url('../src/assets/css/basic.css');

.tabOn {
  background: #ddd;
}

.tabOn .mdi:before {
  color: rgb(253, 87, 87);
}
</style>
