<template>
  <v-card
    @click="goToService(service.name)"
    flat
    class="rounded-lg"
    density="compact"
    min-width="10em"
  >
    <v-card-title>{{ service.name }}</v-card-title>
    <v-card-subtitle>{{ formatDate(service.createdAt) }}</v-card-subtitle>
    <v-card-text v-if="service.description">{{
      service.description
    }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Service {
  name: string;
  createdAt: Date;
  description?: string;
}

export default defineComponent({
  name: "ServiceCard",
  props: {
    service: {
      type: Object as PropType<Service>,
      required: true,
    },
  },
  methods: {
    showPassword(serviceName: string) {
      console.log("show password for service", serviceName);
    },
    formatDate(date: Date): string {
      let month = "" + (date.getMonth() + 1);
      let day = "" + date.getDate();
      let year = "" + date.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [day, month, year].join(".");
    },
    goToService(serviceName: string) {
      this.$router.push({ name: "Service", params: { name: serviceName } });
    },
  },
});
</script>
