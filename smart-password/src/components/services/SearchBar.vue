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
const JsonSearch = require("search-array");

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
      const searcher = new JsonSearch(this.store.services, { sort: true });
      this.store.setServiceSearchResult(searcher.query(this.query));
    },
  },
});
</script>
