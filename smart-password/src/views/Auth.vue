<template>
  <div>
    <v-row align="center" justify="center" style="height: 100vh">
      <v-col cols="11" sm="10" md="7" lg="5" xl="3">
        <SetAppPassword v-if="!appPasswordIsSet" />
        <Login v-else />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SetAppPassword from "@/components/auth/SetAppPassword.vue";
import Login from "@/components/auth/Login.vue";

export default defineComponent({
  name: "Auth",
  components: {
    SetAppPassword,
    Login,
  },
  data: () => ({
    appPasswordIsSet: false,
  }),
  mounted() {
    this.appPasswordIsSet = !!localStorage.getItem("appPassword");
  },
});
</script>
