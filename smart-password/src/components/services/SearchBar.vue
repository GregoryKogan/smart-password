<template>
  <v-text-field
    @input="search"
    v-model="query"
    append-inner-icon="mdi-magnify"
    placeholder="Search services"
    variant="solo"
    flat
    rounded="lg"
    density="comfortable"
    min-width="10em"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";
import Fuse from "fuse.js";

export default defineComponent({
  name: "SearchBar",
  setup() {
    const store = useAppStore();
    return { store };
  },
  data: () => ({
    query: "",
  }),
  methods: {
    search() {
      const fuse = new Fuse(this.store.services, {
        keys: ["name", "description"],
        threshold: 0.3,
      });
      const result = fuse.search(this.query);
      this.store.setServiceSearchResult(result.map((r) => r.item));
    },
  },
});
</script>
