<template>
  <div style="margin:100px 20px 20px 20px">
    <v-data-table
      :headers="headers"
      :items="boardList"
      @click:row="handleClick"
    >
    </v-data-table>
  </div>
</template>

<script>
import * as board from '@/store/modules/board';
import { GET_BOARD } from '@/store/modules/board';
export default {
  data: () => ({
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: 'no.',
        align: 'start',
        value: 'index',
      },
      { text: 'title', value: 'title' },
      { text: 'name', value: 'name' },
      { text: 'date', value: 'date' },
      { text: 'count', value: 'count' },
    ],
  }),
  computed: {
    ...board.mapState({
      boardList: GET_BOARD,
    }),
  },
  created() {
    this.getList();
  },
  methods: {
    ...board.mapActions({
      getList: GET_BOARD,
    }),
    boardDetail(i) {
      console.log(i);
    },
    handleClick(value) {
      this.$bus.$emit('boardDetail', value);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.v-data-table__wrapper {
  cursor: pointer;
}
</style>
