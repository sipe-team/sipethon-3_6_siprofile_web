import axiosClient from './index';

export const join = async () => {
  const response = await axiosClient('/user/create');
  return response;
};
