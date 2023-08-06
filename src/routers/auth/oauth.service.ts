import axios from "axios";

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USER_INFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo'

export const getToken = async (code) => {
  try {
    const tokenApi = await axios.post(GOOGLE_TOKEN_URL, {
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URL,
      grant_type: 'authorization_code'
    });
    console.log("ANSWER : "+tokenApi.data)
    const accessToken = tokenApi.data.access_token;
    console.log("ACCESS TOKEN : "+accessToken);
    console.log("REFRESH TOKEN : "+tokenApi.data.refresh_token);

    getUserInfo(accessToken);
    return accessToken;
  } catch (err) {
    return err;
  }
};

export const getUserInfo = async (accessToken) => {
  try {
    const userInfoApi = await axios.get(GOOGLE_USER_INFO_URL, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(userInfoApi.data)
    return userInfoApi;
  } catch (err) {
    return err;
  }
};