import { removeSpecialCharacters } from './remove-cep-special-caracthers';

export const validateCEP = (cep: string): boolean => {
  const regex = /^[0-9]{8}$/;

  return regex.test(removeSpecialCharacters(cep));
};
