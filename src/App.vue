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
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
    selectedMenu: '',
    sideMenu: [
      { name: 'Home' },
      { name: 'SlickSort' },
      { name: 'StyleBinding' },
      { name: 'DialogPopup' },
      { name: 'Chart' },
      { name: 'Memo' },
      { name: 'Photo' },
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
</style>
