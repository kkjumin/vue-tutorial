<template>
  <div class="sub05">
    <h1 class="contentTitle">Memo</h1>
    <div>
      <ul style="padding:0;">
        <li v-for="(card, i) in cardContents" :key="i" class="card_contents">
          <div class="card_image"></div>
          <p class="card_title"></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    cardContents: [
      { key: 1, name: 'hi1', title: 'hi1' },
      { key: 2, name: 'hi2', title: 'hi2' },
      { key: 3, name: 'hi3', title: 'hi3' }
    ]
  }),

  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style>
.card_contents {
  display: inline-block;
  box-sizing: border-box;
  margin: 10px;
  width: calc(100% / 3 - 20px);
  height: 33vw;
  border-radius: 10px;
  box-shadow: 5 9 black;
  box-shadow: 10px 5px 5px #eee;
  cursor: pointer;
}

.card_contents:hover {
  box-shadow: 10px 5px 5px rgb(193, 200, 255);
}
</style>
