import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    throwAccessDenied?: boolean;
  }
}

const BASE_URL = 'https://backend-service-prxi.onrender.com/api';

const baseConfig = (baseUrl?: string, contentType = 'application/json') => ({
  baseURL: baseUrl,
  headers: {
    'Accept-Language': 'en-US',
    'Content-Type': contentType,
  },
});

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': 'en-US',
    'Content-Type': 'application/json',
  },
});

export const initInterceptor = (
  config: AxiosRequestConfig,
  useAuth?: boolean,
  authToken?: string
) => {
  instance.interceptors.request.use(
    (cf) => {
      const token = authToken ? authToken : 'get from cookie';
      if (token && cf?.headers) {
        cf.headers['Authorization'] = 'Bearer' + token;
      }
      return cf;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (rp) => rp.data,
    (error) => {
      const originalRequest = error.config;

      if (axios.isCancel(error)) {
        return null;
      }
      if (error.response.status === 403) {
        window.location.href = '/';
      }
      if (error.response.status === 401) {
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          // get refresh token from local
          const refreshToken = 'a';

          return axios
            .post('/auth/token', {
              refresh_token: refreshToken,
            })
            .then((res) => {
              if (res.status === 201) {
                axios.defaults.headers.common['Authorization'] = 'Bearer' + '';
                return axios(originalRequest);
              }
            });
        }

        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  // return instance;
};

export const service = (
  method: 'get' | 'post' | 'put' | 'patch' | 'del',
  endpoint: string
) => {};

export const createServiceNoAuth = (
  baseUrl?: string,
  contentType = 'application/json'
) => axios.create(baseConfig(baseUrl, contentType));
