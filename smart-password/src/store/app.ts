// Utilities
import { defineStore } from "pinia";
import { saveServices } from "@/crypto/storage";
import config from "@/crypto/config";

export interface Service {
  name: string;
  createdAt: Date;
  description?: string;
}

export const useAppStore = defineStore("app", {
  state: () => ({
    services: [] as Service[],
    serviceSearchResult: [] as Service[],
  }),
  actions: {
    setServices(services: Service[]) {
      this.services = services;
    },
    addService(service: Service) {
      this.services.push(service);
      const encryption_key = localStorage.getItem(config.appPasswordKey);
      if (encryption_key) saveServices(this.services, encryption_key);
    },
    removeService(name: string) {
      this.services = this.services.filter((s) => s.name !== name);
      const encryption_key = localStorage.getItem(config.appPasswordKey);
      if (encryption_key) saveServices(this.services, encryption_key);
    },
    serviceExists(name: string): boolean {
      return this.services.some((service) => service.name === name);
    },
    setServiceSearchResult(result: Service[]) {
      this.serviceSearchResult = result;
    },
  },
});
