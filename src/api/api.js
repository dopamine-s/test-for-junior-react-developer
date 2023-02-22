import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const getData = async () => {
  const data = await axios.get(BASE_URL);

  return data.data.response;
};
