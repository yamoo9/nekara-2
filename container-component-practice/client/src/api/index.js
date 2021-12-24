import axios from 'axios';

export async function getApi(endpoint) {
  try {
    const { data } = await axios.get(`/api/${endpoint}`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export const getTiltCard = async () => getApi('tiltcard');
export const getSkCards = async () => getApi('sk');
