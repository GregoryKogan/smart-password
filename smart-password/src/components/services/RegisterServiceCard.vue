<template>
  <v-card
    flat
    class="rounded-lg"
    theme="dark"
    variant="tonal"
    density="compact"
    min-width="7em"
    @click="addService"
  >
    <v-responsive aspect-ratio="1">
      <v-card-title>Add new</v-card-title>
      <v-btn @click="addService" icon="mdi-plus" theme="dark" flat></v-btn>
    </v-responsive>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterServiceCard",
  methods: {
    addService() {
      console.log("add service");
    },
  },
});
</script>
