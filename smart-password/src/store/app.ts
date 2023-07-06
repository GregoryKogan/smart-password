// Utilities
import { defineStore } from "pinia";

interface Service {
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
    },
    removeService(service: Service) {
      this.services = this.services.filter((s) => s.name !== service.name);
    },
    setServiceSearchResult(result: Service[]) {
      this.serviceSearchResult = result;
    },
  },
});
