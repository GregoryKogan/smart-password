<template>
  <div>
    <v-row align="center" justify="center" style="height: 100vh">
      <v-col cols="11" sm="10" md="7" lg="5" xl="3">
        <LoginForm />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/auth/LoginForm.vue";

export default defineComponent({
  name: "Auth",
  components: {
    LoginForm,
  },
});
</script>
