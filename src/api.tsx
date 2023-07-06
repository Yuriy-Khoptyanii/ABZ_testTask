import axios from 'axios';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = async (endPoint: string) => {
  try {
    const { data } = await api.get(endPoint);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPositions = async (endPoint: string) => {
  try {
    const { data } = await api.get(endPoint);
    return data.positions;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getToken = async (endPoint: string) => {
  try {
    const { data } = await api.get(endPoint);
    return data.token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSignUp = async (endPoint: string, user: SignUpValues) => {
  const token = await getToken('/token');
  await api.post(endPoint, user, { headers: { Token: token } });
};
