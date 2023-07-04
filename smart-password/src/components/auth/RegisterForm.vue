<template>
  <div>
    <h1 style="margin-bottom: 0.2em">Set app password</h1>
    <v-form v-model="form" @submit.prevent="setAppPassword">
      <v-text-field
        v-model="password"
        placeholder="App password"
        :type="show ? 'text' : 'password'"
        :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="show = !show"
        :rules="[
          rules.required,
          rules.min,
          rules.lowercase,
          rules.uppercase,
          rules.digits,
          rules.special,
        ]"
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
          @click="setAppPassword"
          :disabled="!form"
          append-icon="mdi-chevron-right"
          flat
          color="primary"
          rounded="lg"
          >submit</v-btn
        >
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hash } from "@/crypto/hasher";
import { getSalt } from "@/crypto/storage";

export default defineComponent({
  name: "ResgisterForm",
  data: () => ({
    form: false,
    password: "",
    show: false,
    rules: {
      required: (v: string) => !!v || "Password is required",
      min: (v: string) =>
        v.length >= 8 || "Password must be at least 8 characters long",
      lowercase: (v: string) =>
        /[a-z]/.test(v) || "Password must contain lowercase letters",
      uppercase: (v: string) =>
        /[A-Z]/.test(v) || "Password must contain uppercase letters",
      digits: (v: string) => /\d/.test(v) || "Password must contain digits",
      special: (v: string) =>
        /[^A-Za-z0-9]/.test(v) || "Password must contain special characters",
    },
  }),
  methods: {
    setAppPassword() {
      if (!this.form) return;
      hash(this.password, getSalt()).then((hash: string) => {
        localStorage.setItem("appPassword", hash);
        this.$router.push({ name: "Home" });
      });
    },
  },
});
</script>
