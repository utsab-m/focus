import axios from 'axios'

const REST_API_BASE_URL = "http://localhost:3000/api/tasks";

export const listTasks = () => axios.get(REST_API_BASE_URL);

export const getTask = (taskId) => axios.get(`${REST_API_BASE_URL}/${taskId}`);

export const updateTask = (taskId, task) => axios.patch(`${REST_API_BASE_URL}/${taskId}`, task);

export const createTask = (task) => axios.post(REST_API_BASE_URL, task);

export const deleteTask = (taskId) => axios.delete(`${REST_API_BASE_URL}/${taskId}`);