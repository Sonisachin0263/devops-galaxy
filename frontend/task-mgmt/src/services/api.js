import axios from "axios";

const BASE_URL = '/api';

export const getTasks = async () => {
  const response = await axios.get(`${BASE_URL}/tasks`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${BASE_URL}/tasks`, task);
  return response.data;
};
