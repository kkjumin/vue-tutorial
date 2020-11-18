<template>
  <div class="sub05">
    <h1>{{ this.$route.name }}</h1>
    <!-- 게시판 폼 -->
    <board-form v-if="write" :write="writeOn" />
    <!-- 글 내용 상세보기 -->
    <board-detail v-if="detail && write === false" :detail="detail" />
    <!-- 게시판 리스트 -->
    <board-list v-if="!write" />
    <v-btn
      v-if="!write"
      @click="on()"
      depressed
      color="primary"
      style="float:right;margin: 10px 20px 0 0"
    >
      글쓰기
    </v-btn>
  </div>
</template>

<script>
import BoardList from '@/components/Board/BoardList.vue';
import BoardForm from '@/components/Board/BoardForm.vue';
import BoardDetail from '@/components/Board/BoardDetail.vue';
export default {
  components: {
    BoardList,
    BoardForm,
    BoardDetail,
  },
  data: () => ({
    write: false,
    detail: null,
  }),
  methods: {
    writeOn(e) {
      this.write = e;
    },
    boardDetail(detail) {
      console.log(detail);
      this.detail = detail;
    },
    on() {
      this.$bus.$emit('writeOn', true);
    },
  },
  created() {
    this.$bus.$on('writeOn', this.writeOn);
    this.$bus.$on('boardDetail', this.boardDetail);
  },
  beforeDestroy() {
    this.$bus.$off('writeOn');
    this.$bus.$off('boardDetail');
  },
};
</script>

<style>
.board {
  width: calc(100% - 40px);
  border: 1px solid #ddd;
  margin: 100px 20px 0 20px;
}
.board input[type='text'] {
  width: 100%;
  padding-left: 10px;
}

.example .board {
  width: 100%;
  margin: 0;
  border-bottom: 0;
}

.board tr td:nth-child(1) {
  width: 100px;
  text-align: center;
}
.board tr td:nth-child(2) {
  padding-left: 20px;
  padding-right: 20px;
  width: calc(100% - 100px);
}
.board tr td:nth-child(1)::after {
  float: right;
  content: '|';
  color: #ddd;
}
</style>
