import axios from 'axios';

import { SignUpValues } from './types/allTypes';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = async (endPoint: string) => {
  const data = await api
    .get(endPoint)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return data;
};

export const getPositions = async (endPoint: string) => {
  const data = await api
    .get(endPoint)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return data.positions;
};

export const getToken = async (endPoint: string) => {
  const data = await api
    .get(endPoint)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });

  return data.token;
};

export const fetchSignUp = async (endPoint: string, user: SignUpValues) => {
  const token = await getToken('/token');
  await api.post(endPoint, user, { headers: { Token: token } });
};
