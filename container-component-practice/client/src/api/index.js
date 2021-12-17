import axios from 'axios';

export async function getTiltCard() {
  try {
    const { data } = await axios.get('/api/tiltcard');
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
