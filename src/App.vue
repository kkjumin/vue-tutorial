<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click="linkTo('Home')" :class="tabOn('Home')">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>SlideMenu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="linkTo('Sub01')" :class="tabOn('Sub01')">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>SlickSort</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="linkTo('Sub02')" :class="tabOn('Sub02')">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>StyleBinding</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="linkTo('Sub03')" :class="tabOn('Sub03')">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Dialog & Popup</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="linkTo('Sub04')" :class="tabOn('Sub04')">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Chart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="linkTo('Sub05')" :class="tabOn('Sub05')">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Memo</v-list-item-title>
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
