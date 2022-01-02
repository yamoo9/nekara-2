import axios from 'axios';

export const signUp = (userInfo) => axios.post('/api/user/signup', userInfo);
export const signIn = (userInfo) => axios.post('/api/user/signin', userInfo);
