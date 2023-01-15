import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config: ToastOptions<{}> = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: 'light',
};

export const showToast = {
  success: (message: string) => {
    toast.success(message, config);
  },
  error: (message: string) => {
    toast.error(message, config);
  },
};
