import {
  YOUTUBE_PLAYLIST,
  VIDEO,
  UPLOAD_IMG,
  GET_IMG_LIST,
  DELETE_IMG,
} from './types';
import { DELETE, GET, POST } from '@/utils';

export default {
  [YOUTUBE_PLAYLIST]: async ({ commit }, payload) => {
    let video = [];
    try {
      const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
      // const key = 'AIzaSyBDXWtLp8zEoynepi5rIvlC9XGONbBRDyo'; //1번키
      const key = 'AIzaSyBC8wmueFWt60S1Ykx9jXbU8p_iodHR6Hk'; // 2번키
      const part = 'snippet';
      const playlistId = 'PLiJaGo_6yBJ7suLWNNr7lD7I9JlKbNhCh';
      const maxResults = 6;
      const pageToken = payload;

      const youtube = await GET(URL, {
        key,
        part,
        playlistId,
        maxResults,
        pageToken,
      });
      video = youtube;
    } catch (error) {
      console.warn(error.message, error);
    } finally {
      commit(VIDEO, video);
    }
    return video;
  },

  [GET_IMG_LIST]: async ({ commit }) => {
    let result = [];
    const URL = 'https://salty-bayou-70249.herokuapp.com/api/files';

    try {
      const imgList = await GET(URL);
      result = imgList;
      commit(GET_IMG_LIST, result);
    } catch (err) {
      console.log(err);
    }
    return result;
  },

  [UPLOAD_IMG]: async ({ dispatch }, payload) => {
    let result;
    const image = payload.img[0];

    let formData = new FormData();
    formData.append('img', image, image.name);

    const headers = {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    };

    try {
      const URL = 'https://salty-bayou-70249.herokuapp.com/api/files';

      const upload = await POST(URL, formData, headers);
      result = upload;
      dispatch(GET_IMG_LIST);
    } catch (err) {
      console.log(err);
    }
    return result;
  },

  [DELETE_IMG]: async ({ dispatch }, payload) => {
    let result;
    let imgName = payload;
    console.log(imgName);
    const URL = 'https://salty-bayou-70249.herokuapp.com/api/files';
    try {
      const deleteImg = await DELETE(URL, { name: imgName });
      result = deleteImg;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(GET_IMG_LIST);
    }
    return result;
  },
};
