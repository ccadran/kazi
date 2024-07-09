<script lang="ts" setup>
import type { Category } from "~/server/types/api";

const supabase = useSupabaseClient();
const categories = ref<Category[]>([]);

const { data, error } = await useFetch<Category[]>("/api/categories");
categories.value = data.value;
</script>

<template>
  <div>Ma page catégories</div>
  <div v-for="category in categories">
    <h1>{{ category.title }}</h1>
    <NuxtLink :to="`/categories/${category.id}`">Voir les sous-thèmes</NuxtLink>
  </div>
</template>

<style lang="scss"></style>
