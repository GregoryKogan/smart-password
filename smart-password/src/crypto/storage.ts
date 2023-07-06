import config from "@/crypto/config";
import { encrypt_AES256, decrypt_AES256 } from "@/crypto/cipher";
import { Service } from "@/store/app";

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

export const saveServices = (
  services: Service[],
  encryption_key: string
): void => {
  localStorage.setItem(
    config.servicesKey,
    encrypt_AES256(JSON.stringify(services), encryption_key)
  );
};

export const getServices = (encryption_key: string): Service[] | null => {
  const servicesData = localStorage.getItem(config.servicesKey);
  if (servicesData === null) return null;
  const services: Service[] = JSON.parse(
    decrypt_AES256(servicesData, encryption_key)
  );
  for (const service of services) {
    service.createdAt = new Date(service.createdAt);
  }
  return services;
};
