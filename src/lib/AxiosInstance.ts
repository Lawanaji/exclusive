/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/axiosInstance.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Define your API response type (adjust according to your API)
interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Add auth token if available
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>): AxiosResponse<ApiResponse> => {
    // You can transform the response here
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    // Handle errors globally
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// Wrapper functions with TypeScript support
export const apiGet = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.get<ApiResponse<T>>(url, config);
  return response.data.data;
};

export const apiPost = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.post<ApiResponse<T>>(url, data, config);
  return response.data.data;
};

// Similarly for put, patch, delete
export const apiPut = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.put<ApiResponse<T>>(url, data, config);
  return response.data.data;
};

export default axiosInstance;
