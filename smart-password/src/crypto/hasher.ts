import { argon2Verify, argon2id } from "hash-wasm";
import config from "@/crypto/config";

export const hash = async (
  data: string,
  salt: Uint8Array | null
): Promise<string> => {
  if (salt === null) {
    salt = new Uint8Array(config.saltLength);
    window.crypto.getRandomValues(salt);
  }

  return await argon2id({
    password: data,
    salt, // salt is a buffer containing random bytes
    parallelism: 1,
    iterations: 256,
    memorySize: 512, // use 512KB memory
    hashLength: 32, // output size = 32 bytes
    outputType: "encoded", // return standard encoded string containing parameters needed to verify the key
  });
};

export const verify = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await argon2Verify({
    password: password,
    hash: hash,
  });
};

export const generateSalt = (): Uint8Array => {
  const salt = new Uint8Array(config.saltLength);
  window.crypto.getRandomValues(salt);
  return salt;
};
