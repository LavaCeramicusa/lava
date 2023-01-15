import { Card } from 'types/card';
import { instance } from './config';

export const fetchCard = async (code: string) => {
  const res = await instance.get(`cards?filters[code][$eq]=${code}`);

  return res.data;
};

export const activeCard = async (payload: Card) => {
  const res = await instance.patch(`/cards/active`, payload);

  return res;
};

export const uploadInfo = async (payload: FormData) => {
  console.log('p', payload);
  const res = await instance.post('/cards/upload', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res;
};
