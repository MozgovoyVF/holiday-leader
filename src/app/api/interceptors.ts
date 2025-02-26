import { NEXT_URL } from "@/constants/global.constants";
import axios, { type CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  baseURL: NEXT_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);

export { axiosClassic };
