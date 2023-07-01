import config from "@/crypto/config";

export const encodeBytes = (bytes: Uint8Array): string => {
  return btoa(String.fromCharCode(...bytes));
};

export const decodeBytes = (str: string): Uint8Array => {
  return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
};

export const saveSalt = (salt: Uint8Array): void => {
  localStorage.setItem(config.saltKey, encodeBytes(salt));
};

export const getSalt = (): Uint8Array | null => {
  const salt = localStorage.getItem(config.saltKey);
  if (salt === null) return null;
  return decodeBytes(salt);
};
