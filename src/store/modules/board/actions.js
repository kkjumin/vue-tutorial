// import { GET } from '@/utils';

import { WRITE_BOARD, GET_BOARD } from './types';

export default {
  //게시판 리스트 불러오기
  [GET_BOARD]: async ({ commit }) => {
    let boardList;
    if (localStorage.boardList) {
      boardList = JSON.parse(localStorage.boardList);
      commit(GET_BOARD, boardList);
    }
    return boardList;
  },

  // 게시판 글쓰기
  [WRITE_BOARD]: async ({ commit, dispatch }, payload) => {
    let boardList = [];
    if (localStorage.boardList) {
      boardList = JSON.parse(localStorage.boardList);
    }
    boardList.unshift(payload);
    localStorage.boardList = JSON.stringify(boardList);
    commit(GET_BOARD, boardList);
    dispatch(GET_BOARD);
  },
};
