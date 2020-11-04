import { TEST_API, VIDEO } from './types';
import { GET } from '@/utils';

export default {
  [TEST_API]: async ({ commit }) => {
    let video = [];
    try {
      // AIzaSyBDXWtLp8zEoynepi5rIvlC9XGONbBRDyo
      const URL = 'https://www.googleapis.com/youtube/v3/search';
      const key = 'AIzaSyBDXWtLp8zEoynepi5rIvlC9XGONbBRDyo';
      const q = '러블리즈';
      const part = 'snippet';
      const maxResults = 6;
      const [youtube] = await Promise.all([
        GET(URL, { key, q, part, maxResults }),
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
