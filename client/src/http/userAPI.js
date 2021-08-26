import { $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
) => {
  const { data } = await $host.post('api/sign-up', {
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
  });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post('api/login', {
    email,
    password,
  });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $host.post('api/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
