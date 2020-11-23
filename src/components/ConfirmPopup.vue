<template>
  <div class="text-center">
    <v-dialog v-model="open" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Confirm
        </v-card-title>

        <v-card-text style="padding-top:20px">
          {{ text }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="apply">
            I accept
          </v-btn>
          <v-btn color="primary" text @click="open = false">
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data: () => ({
    open: false,
  }),
  methods: {
    popupOpen(boolean) {
      this.open = boolean;
    },
    apply() {
      this.open = false;
      this.$emit('apply');
    },
  },
  created() {
    this.$bus.$on('confirm', this.popupOpen);
  },
  beforeDestroy() {
    this.$bus.$off('confirm');
  },
};
</script>
