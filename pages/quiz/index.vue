<script lang="ts" setup>
import { useQuizStore } from "~/stores/quiz";
import type { Quiz } from "~/server/types/api";
type QuizAnswer = Quiz["content"]["answers"];

const quizStore = useQuizStore();
const quiz = ref<Quiz>(quizStore.quiz);
const currentIndex = ref<number>(0);
const currentAnswer = ref(null);
const isValidate = ref(false);
console.log(quiz.value, "quiz");

const checkAnswer = (answer: QuizAnswer) => {
  if (!isValidate.value) {
    console.log("not validated");

    isValidate.value = true;
    if (answer.isCorrect) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  } else {
    console.log(currentAnswer, "already answered");
  }
};

const nextQuestion = () => {
  currentIndex.value++;
  isValidate.value = false;
};
</script>

<template>
  <div>ma page de quiz</div>
  <h1>{{ quiz.title }}</h1>
  <h2>{{ quiz.quiz_content[currentIndex].question }}</h2>
  <ul>
    <li
      @click="currentAnswer = answer"
      v-for="answer in quiz.quiz_content[currentIndex].answers"
    >
      {{ answer.text }}
    </li>
  </ul>
  <div v-if="isValidate">
    <h4>{{ currentAnswer.isCorrect }}</h4>
    <p>{{ quiz.quiz_content[currentIndex].explication }}</p>
  </div>
  <div class="navigation">
    <button v-if="!isValidate" @click="checkAnswer(currentAnswer)">
      Validate
    </button>
    <button v-if="isValidate" @click="nextQuestion()">Next</button>
  </div>
</template>

<style lang="scss"></style>
