<script lang="ts" setup>
import type { Subtheme, Quiz } from "~/server/types/api";
import { useQuizStore } from "~/stores/quiz";

const route = useRoute();
const subthemeId = route.params.subtheme as string;
const quizStore = useQuizStore();
console.log(route.params);

const { data } = await useFetch<{ subtheme: Subtheme; quiz: Quiz }>(
  `/api/subthemes/${subthemeId}`
);
const subthemeContent = ref<Subtheme>(data.value.subtheme);
console.log(subthemeContent.value, "test");

const quiz = ref<Quiz[]>(data.value.quiz[0]);
quizStore.setQuiz(quiz.value);
console.log(quizStore.quiz, "quizStore");

// console.log(quiz.value, "quiz");
</script>

<template>
  <div>page d'un sous thème</div>
  <h1>{{ subthemeContent.title }}</h1>
  <NuxtLink :to="'/quiz'">lancer le quiz</NuxtLink>
</template>

<style lang="scss"></style>
