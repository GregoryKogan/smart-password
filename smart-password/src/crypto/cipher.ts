const CryptoJS = require("crypto-js");

export const encrypt_AES256 = (plaintext: string, key: string): string => {
  return CryptoJS.AES.encrypt(plaintext, key).toString();
};

export const decrypt_AES256 = (ciphertext: string, key: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
