<template>
  <h2 style="margin-bottom: 0.5em">Your services</h2>
  <v-row align="center">
    <v-col align="center" cols="auto">
      <RegisterServiceCard />
    </v-col>
    <v-col v-for="service in services" cols="auto">
      <ServiceCard :service="service" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServiceCard from "@/components/services/ServiceCard.vue";
import RegisterServiceCard from "@/components/services/RegisterServiceCard.vue";
import config from "@/crypto/config";
import { decrypt_AES256 } from "@/crypto/cipher";

interface Service {
  name: string;
  createdAt: Date;
  description?: string;
}

export default defineComponent({
  name: "YoyrServicesRow",
  components: {
    ServiceCard,
    RegisterServiceCard,
  },
  data: () => ({
    services: [] as Service[],
  }),
  created() {
    this.services = this.loadServices();
  },
  methods: {
    // loadServices(): Service[] {
    //   const cyphertext = localStorage.getItem(config.servicesKey);
    //   if (!cyphertext) return [];
    //   const decryptionKey = localStorage.getItem(config.appPasswordKey);
    //   if (!decryptionKey) return [];
    //   return JSON.parse(decrypt_AES256(cyphertext, decryptionKey));
    // },
    loadServices(): Service[] {
      return [
        {
          name: "service 1",
          createdAt: new Date(),
          description: "description 1",
        },
        {
          name: "service 2",
          createdAt: new Date(),
          description: "description 2",
        },
        {
          name: "service 3",
          createdAt: new Date(),
          description: "description 3",
        },
        {
          name: "service 1",
          createdAt: new Date(),
          description: "description 1",
        },
        {
          name: "service 2",
          createdAt: new Date(),
          description: "description 2",
        },
        {
          name: "service 3",
          createdAt: new Date(),
          description: "description 3",
        },
      ];
    },
  },
});
</script>
