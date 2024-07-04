<script setup lang="ts">
const supabase = useSupabaseClient();
import type { Category } from "~/server/types/api";
const useCategories = async () => {
  const { data, error } = await useFetch<Category[]>("/api/categories");
  console.log(data.value.categories);
};
useCategories();
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
