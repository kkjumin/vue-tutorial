<template>
  <div class="example">
    <table class="board">
      <tr>
        <td>제목</td>
        <td>
          <input ref="title" type="text" v-model="title" />
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input ref="name" type="text" v-model="name" />
        </td>
      </tr>
    </table>

    <quill-editor
      class="editor"
      ref="myTextEditor"
      :value="content"
      :options="editorOption"
      @change="onEditorChange"
    />
    <v-btn
      @click="cancel()"
      depressed
      color="primary"
      style="float:right;margin: 10px 20px 0 0"
    >
      취소
    </v-btn>
    <v-btn
      @click="summit()"
      depressed
      color="primary"
      style="float:right;margin: 10px 20px 0 0"
    >
      글쓰기
    </v-btn>
  </div>
</template>

<script>
import * as board from '@/store/modules/board';
import { WRITE_BOARD } from '@/store/modules/board';
export default {
  data: () => ({
    content: '',
    result: null,
    title: '',
    name: '',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),

    editorOption: {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ['link', 'image', 'video'],
        ],
        syntax: {
          highlight: text => hljs.highlightAuto(text).value,
        },
      },
      placeholder: '    내용을 입력하세요',
    },
  }),
  methods: {
    ...board.mapActions({
      writeBoard: WRITE_BOARD,
    }),
    onEditorChange: _.debounce(function(value) {
      this.content = value.html;
    }, 100),
    summit() {
      const title = this.$refs.title.value;
      const name = this.$refs.name.value;
      const text = this.$refs.myTextEditor.value;
      if (!title) {
        alert('제목을 입력해주세요');
        return;
      } else if (!name) {
        alert('작성자를 입력해주세요');
        return;
      } else if (!text) {
        alert('내용을 입력해주세요');
        return;
      }
      let index;
      if (localStorage.boardList) {
        index = JSON.parse(localStorage.boardList).length + 1;
      } else {
        index = 1;
      }
      this.writeBoard({
        index: index,
        title: this.title,
        name: this.name,
        content: this.content,
        date: `${this.year}-${this.month}-${
          this.date
        } ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        count: 0,
      }).then(alert('작성완료'), this.cancel());
    },
    cancel() {
      this.$bus.$emit('writeOn', false);
    },
  },
  computed: {
    test() {
      return localStorage.board;
    },
  },
};
</script>

<style>
.example {
  width: calc(100% - 40px);
  margin: 20px;
}
</style>
