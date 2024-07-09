<script lang="ts" setup>
import { useQuizStore } from "~/stores/quiz";
const quizStore = useQuizStore();
const quiz = ref<Quiz[]>(quizStore.quiz);
console.log(quiz.value, "quiz");
</script>

<template>
  <div>ma page de quiz</div>
  <div v-for="content in quiz.quiz_content">
    <h3>{{ content.explication }}</h3>
  </div>
</template>

<style lang="scss"></style>
