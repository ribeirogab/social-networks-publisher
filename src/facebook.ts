import '../dotenv.config';
import axios, { AxiosError } from 'axios';

const PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const PAGE_ID = process.env.FACEBOOK_PAGE_ID;

const facebookApi = axios.create({
  baseURL: `https://graph.facebook.com/${PAGE_ID}`,
  params: {
    access_token: PAGE_ACCESS_TOKEN,
  },
});

(async () => {
  try {
    const { data } = await facebookApi.post('/feed', null, {
      params: {
        message: 'A simple test using Facebook Graph API :)',
      },
    });

    console.log('data', data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    } else {
      console.error(error);
    }
  }
})();
