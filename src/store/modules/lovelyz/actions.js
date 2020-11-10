import { TEST_API, VIDEO } from './types';
import { GET } from '@/utils';

export default {
  [TEST_API]: async ({ commit }, payload) => {
    let video = [];
    try {
      const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
      // const key = 'AIzaSyBDXWtLp8zEoynepi5rIvlC9XGONbBRDyo'; //1번키
      const key = 'AIzaSyBC8wmueFWt60S1Ykx9jXbU8p_iodHR6Hk'; // 2번키
      const part = 'snippet';
      const playlistId = 'PLiJaGo_6yBJ7suLWNNr7lD7I9JlKbNhCh';
      const maxResults = 12;
      const pageToken = payload;

      const [youtube] = await Promise.all([
        GET(URL, {
          key,
          part,
          playlistId,
          maxResults,
          pageToken,
        }),
      ]);
      video = youtube;
    } catch (error) {
      console.warn(error.message, error);
    } finally {
      commit(VIDEO, video);
    }
    return video;
  },
};
