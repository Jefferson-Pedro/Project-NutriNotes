export const removeSpecialCharacters = (value: string): string =>
  value.replace(/\D/g, '');
