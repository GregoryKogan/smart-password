<template>
  <v-btn
    @click="openDialog"
    variant="tonal"
    flat
    color="error"
    prepend-icon="mdi-delete"
    >delete</v-btn
  >
  <v-dialog v-model="dialog" width="auto">
    <v-card flat class="rounded-lg">
      <v-card-title>Are you sure?</v-card-title>
      <v-card-actions>
        <v-btn
          @click="dialog = false"
          variant="text"
          flat
          color="error"
          prepend-icon="mdi-cancel"
          >Cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          @click="deleteService"
          variant="tonal"
          flat
          color="primary"
          prepend-icon="mdi-delete"
          >Delete</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: "DeleteServiceButton",
  setup() {
    const store = useAppStore();
    return { store };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    openDialog() {
      this.dialog = true;
    },
    deleteService() {
      this.store.removeService(this.name);
      this.$router.push({ name: "Home" });
    },
  },
});
</script>
