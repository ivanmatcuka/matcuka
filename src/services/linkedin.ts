import { LINKEDIN_CLIENT_ID, LINKEDIN_PRIMARY_CLIENT_SECRET } from '$env/static/private';

const BASE_URL = 'https://localhost:1337/linkedin-auth/linkedin-config';
const DEFAULT_HEADERS: HeadersInit = {
  'content-type': 'application/x-www-form-urlencoded',
};

export const linkedinService = {
  async auth() {
    const body = {
      grant_type: 'client_credentials',
      client_id: LINKEDIN_CLIENT_ID,
      client_secret: LINKEDIN_PRIMARY_CLIENT_SECRET,
    };

    try {
      const response = await fetch(`${BASE_URL}/accessToken`, {
        method: 'POST',
        body: new URLSearchParams(body).toString(),
        headers: DEFAULT_HEADERS,
      });

      console.log(await response.json());

      if (!response.ok) return false;
    } catch (error) {
      console.error(error);

      return false;
    }
  },
};
