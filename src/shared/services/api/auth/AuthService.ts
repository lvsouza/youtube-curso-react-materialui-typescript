import { AxiosError } from 'axios';

import { Api } from '../axios-config';


interface IAuth {
  accessToken: string;
}

const auth = async (email: string, password: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api().post('/entrar', { email, senha: password });

    if (data) {
      return data;
    }

    return new Error('Erro no login.');
  } catch (error) {
    console.error(error);
    return new Error((error as AxiosError).response?.data.errors.default || 'Erro no login.');
  }
};

export const AuthService = {
  auth,
};
