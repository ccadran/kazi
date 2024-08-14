<script lang="ts" setup>
import type { Category } from "~/server/types/api";

const categories = ref<Category[]>([]);

const { data, error } = await useFetch<Category[]>("/api/categories");
categories.value = data.value;
</script>

<template>
  <HeroHome />
  <Test />
  <div>Ma page d'accueil</div>
  <div v-for="category in categories">
    <h1>{{ category.title }}</h1>
    <NuxtLink :to="`/categories/${category.id}`">Voir les sous-thèmes</NuxtLink>
  </div>
  <NuxtLink :to="'/categories'">Voir l'ensemble des catégories</NuxtLink>
</template>

<style lang="scss"></style>
