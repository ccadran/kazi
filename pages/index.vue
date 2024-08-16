<script lang="ts" setup>
import type { Category } from "~/server/types/api";

const categories = ref<Category[]>([]);

const { data, error } = await useFetch<Category[]>("/api/categories");
categories.value = data.value;
</script>

<template>
  <main>
    <HomeHero />

    <HomeTestQuiz />
    <HomePopularCategories />
    <HomeFeatures />

    <NuxtLink :to="'/categories'">Voir l'ensemble des catégories</NuxtLink>
  </main>
</template>

<style lang="scss">
main {
  position: relative;
}
.testQuiz {
  display: flex;
  flex-direction: column;
  font-size: 48px;
  text-transform: uppercase;
  > .inner1 {
    margin-top: 92px;
    width: 40%;
    margin-right: auto;
  }
  > .innner2 {
    margin-top: 132px;
    width: 100%;
    p {
      width: 40%;
      margin-left: auto;
    }
  }

  > .testQuizChoice {
    margin-top: 180px;
  }
}
</style>
