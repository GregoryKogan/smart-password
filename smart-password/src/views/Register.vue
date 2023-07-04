<template>
  <div>
    <v-row align="center" justify="center" style="height: 100vh">
      <v-col cols="11" sm="10" md="7" lg="5" xl="3">
        <RegisterForm />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";

export default defineComponent({
  name: "Auth",
  components: {
    RegisterForm,
  },
});
</script>
