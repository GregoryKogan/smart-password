<template>
  <div>
    <h1 style="margin-bottom: 0.2em">Enter the app password to log in</h1>
    <v-form @submit.prevent="attemptLogin">
      <v-text-field
        v-model="password"
        placeholder="App password"
        :type="show ? 'text' : 'password'"
        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="show = !show"
        variant="solo"
        flat
        rounded="lg"
        density="comfortable"
        style="margin-bottom: 0.5em"
      >
        <template v-slot:prepend-inner>
          <v-icon icon="mdi-lock" color="on-surface" />
        </template>
      </v-text-field>
      <v-row justify="end" style="width: 100%; margin: auto">
        <v-btn
          @click="attemptLogin"
          append-icon="mdi-chevron-right"
          flat
          color="primary"
          rounded="lg"
          >login</v-btn
        >
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { verify } from "@/crypto/hasher";

export default defineComponent({
  name: "LoginForm",
  data: () => ({
    password: "",
    show: false,
  }),
  methods: {
    attemptLogin() {
      const hash = localStorage.getItem("appPassword");
      if (hash) {
        verify(this.password, hash).then((res: boolean) => {
          if (res) {
            this.$router.push({ name: "Home" });
          }
        });
      } else {
        console.warn("Login page opened, but password is not set");
        this.$router.push({ name: "Register" });
      }
    },
  },
});
</script>
