<template>
  <div>
    <h1 style="margin-bottom: 0.2em">Enter the app password to log in</h1>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data: () => ({
    password: "",
    show: false,
  }),
  methods: {
    attemptLogin() {
      console.log(this.password);
      this.$router.push("Home");
    },
  },
});
</script>
