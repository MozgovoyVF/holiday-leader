"use client";

import { axiosClassic } from "@/app/api/interceptors";
import axios from "axios";

export const emailService = {
  async sendEmail(name: string, phone: string, type: string, date: string) {
    try {
      const response = await axiosClassic.post("/email/send", {
        body: {
          name,
          phone,
          type,
          date,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Axios error:", error.response?.data || error.message);
        return { success: false, message: error.message || error.response?.data || "Неправильный запрос" };
      } else {
        console.log("Непредвиденная ошибка:", error);
        return { success: false, message: "Непредвиденная ошибка" };
      }
    }
  },
};
