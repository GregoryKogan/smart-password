<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { generateSalt } from "@/crypto/hasher";
import { getSalt, saveSalt } from "@/crypto/storage";
import config from "@/crypto/config";

export default defineComponent({
  name: "App",
  created() {
    this.ensureSaltExists();

    if (localStorage.getItem(config.appPasswordKey)) {
      this.$router.push({ name: "Login" });
    } else {
      this.$router.push({ name: "Register" });
    }
  },
  methods: {
    ensureSaltExists() {
      if (getSalt()) return;
      saveSalt(generateSalt());
    },
  },
});
</script>
