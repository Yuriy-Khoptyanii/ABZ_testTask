import axios from 'axios';

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
