<template>
  <table class="detail-table">
    <tr style="border-bottom:1px solid #ddd;">
      <td style="width:10%">no. {{ detail.index }}</td>
      <td style="width:20%">작성자 : {{ detail.name }}</td>
      <td style="width:30%">제목 : {{ detail.title }}</td>
      <td style="width:20%">{{ detail.date }}</td>
      <td style="width:20%">조회수 : {{ detail.count }}</td>
    </tr>
    <tr>
      <div style="width:100%" class="ql-editor" v-html="detail.content"></div>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    detail: { type: Object },
  },
};
</script>

<style scoped>
.detail-table {
  width: calc(100% - 40px);
  margin: 100px 20px 100px 20px;
  border: 1px solid #ddd;
  display: block;
}

.detail-table tr {
  display: inline-block;
  width: 100%;
}

.detail-table tr:nth-child(1) td {
  text-align: center;
}

.detail-table td {
  display: inline-block;
  width: 10%;
}
</style>
