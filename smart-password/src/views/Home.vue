<template>
  <v-container>
    <YourServicesRow />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YourServicesRow from "@/components/services/YourServicesRow.vue";

export default defineComponent({
  name: "Home",
  components: {
    YourServicesRow,
  },
});
</script>
