<script lang="ts" setup>
import type { Category } from "~/server/types/api";

const categories = ref<Category[]>([]);

const { data, error } = await useFetch<Category[]>("/api/categories");
categories.value = data.value;
</script>

<template>
  <main>
    <HeroHome />

    <div class="testQuiz">
      <div class="inner1">
        <p>Not so sure of the utility?</p>
      </div>
      <div class="innner2">
        <p>START A TEST QUIZ RIGHT NOW</p>
      </div>
      <div class="testQuizChoice">
        <UiTestQuizDifficulty difficulty="easy" />
        <UiTestQuizDifficulty difficulty="medium" />
        <UiTestQuizDifficulty difficulty="hard" />
      </div>
    </div>
    <div>Ma page d'accueil</div>
    <div v-for="category in categories">
      <h1>{{ category.title }}</h1>
      <NuxtLink :to="`/categories/${category.id}`"
        >Voir les sous-thèmes</NuxtLink
      >
    </div>
    <NuxtLink :to="'/categories'">Voir l'ensemble des catégories</NuxtLink>
  </main>
</template>

<style lang="scss">
main {
  margin: 0 60px;
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
