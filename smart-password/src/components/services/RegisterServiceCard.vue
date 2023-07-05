<template>
  <v-btn
    @click="addService"
    icon="mdi-plus"
    variant="flat"
    size="x-large"
    theme="dark"
  ></v-btn>
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
