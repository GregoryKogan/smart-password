<template>
  <h2 style="margin-bottom: 0.5em">Your services</h2>
  <SearchBar />
  <v-row align="center">
    <v-col align="center" cols="auto">
      <RegisterServiceCard />
    </v-col>
    <v-col
      v-if="store.serviceSearchResult.length > 0"
      v-for="service in store.serviceSearchResult"
      cols="auto"
    >
      <ServiceCard :service="service" />
    </v-col>
    <v-col v-else v-for="service in store.services" cols="auto">
      <ServiceCard :service="service" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";
import ServiceCard from "@/components/services/ServiceCard.vue";
import RegisterServiceCard from "@/components/services/RegisterServiceCard.vue";
import SearchBar from "@/components/services/SearchBar.vue";
import config from "@/crypto/config";
import { decrypt_AES256 } from "@/crypto/cipher";

export default defineComponent({
  name: "YoyrServicesRow",
  data: () => ({}),
  setup() {
    const store = useAppStore();
    return { store };
  },
  components: {
    ServiceCard,
    RegisterServiceCard,
    SearchBar,
  },
  created() {
    this.loadServices();
  },
  methods: {
    loadServices() {
      const cyphertext = localStorage.getItem(config.servicesKey);
      if (!cyphertext) return [];
      const decryptionKey = localStorage.getItem(config.appPasswordKey);
      if (!decryptionKey) return [];
      this.store.setServices(
        JSON.parse(decrypt_AES256(cyphertext, decryptionKey))
      );
    },
  },
});
</script>
