<template>
  <v-row style="height: 100%" align-content="center" justify="center">
    <v-col cols="8">
      <v-card
        flat
        rounded="lg"
        density="default"
        style="padding-left: 1em; padding-right: 1em"
      >
        <v-card-title>Add new service</v-card-title>
        <v-text-field
          v-model="name"
          :rules="[requiredRule, isUniqueRule]"
          placeholder="Service name"
          variant="solo-filled"
          flat
          rounded="lg"
          density="comfortable"
          style="margin-bottom: 0.5em"
        ></v-text-field>
        <v-textarea
          v-model="description"
          placeholder="Description"
          variant="solo-filled"
          flat
          rounded="lg"
          density="comfortable"
          rows="3"
          no-resize
        ></v-textarea>
        <v-card-actions>
          <v-btn
            @click="cancel"
            variant="text"
            flat
            color="error"
            prepend-icon="mdi-cancel"
            >Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            @click="add"
            variant="tonal"
            flat
            color="primary"
            prepend-icon="mdi-plus"
            >Add</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: "AddService",
  setup() {
    const store = useAppStore();
    return { store };
  },
  data: () => ({
    name: "",
    description: "",
  }),
  methods: {
    requiredRule(name: string) {
      if (name.length > 0) return true;
      else return "Service name is required";
    },
    isUniqueRule(name: string) {
      if (this.store.serviceExists(name)) return true;
      else return "Service name must be unique";
    },
    cancel() {
      this.$router.push({ name: "Home" });
    },
    add() {
      this.store.addService({
        name: this.name,
        description: this.description,
        createdAt: new Date(),
      });
      this.$router.push({ name: "Home" });
    },
  },
});
</script>
