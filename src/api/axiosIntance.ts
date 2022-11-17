import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
});

export { axiosInstance };
