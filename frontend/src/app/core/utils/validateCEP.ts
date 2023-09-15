import { removeSpecialCharacters } from './removeCepSpecialCaracthers';

export const validateCEP = (cep: string): boolean => {
  const regex = /^[0-9]{8}$/;

  return regex.test(removeSpecialCharacters(cep));
};
