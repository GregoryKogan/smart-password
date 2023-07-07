<template>
  <v-container>
    <h1>{{ $route.params.name }}</h1>
    <v-row>
      <v-spacer></v-spacer>
      <DeleteServiceButton :name="$route.params.name" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DeleteServiceButton from "@/components/services/DeleteServiceButton.vue";

export default defineComponent({
  name: "Service",
  components: {
    DeleteServiceButton,
  },
});
</script>
