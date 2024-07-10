<script lang="ts" setup>
import { useQuizStore } from "~/stores/quiz";
import type { Quiz } from "~/server/types/api";
type QuizAnswer = Quiz["content"]["answers"];

const quizStore = useQuizStore();
const quiz = ref<Quiz>(quizStore.quiz);
const currentIndex = ref<number>(0);
const currentAnswer = ref(null);
const quizScore = ref<number>(0);
const isValidate = ref(false);
const isQuizEnded = ref(false);
console.log(quiz.value, "quiz");
console.log(quiz.value.quiz_content.length);

const checkAnswer = (answer: QuizAnswer) => {
  if (!isValidate.value) {
    console.log("not validated");

    isValidate.value = true;
    if (answer.isCorrect) {
      console.log("correct");
      quizScore.value++;
    } else {
      console.log("wrong");
    }
  } else {
    console.log(currentAnswer, "already answered");
  }
};

const nextQuestion = () => {
  if (currentIndex.value === quiz.value.quiz_content.length - 1) {
    console.log("end of quiz");
    console.log(quizScore.value);
    isQuizEnded.value = true;
  } else {
    currentIndex.value++;
    isValidate.value = false;
  }
};
</script>

<template>
  <div>ma page de quiz</div>
  <h1>{{ quiz.title }}</h1>

  <h2 v-if="currentIndex < quiz.quiz_content.length - 1">
    {{ quiz.quiz_content[currentIndex].question }}
  </h2>
  <div v-if="!isQuizEnded">
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
  </div>
  <div v-else>
    <h2>Quiz terminé</h2>
    <p>{{ quizScore }} / {{ quiz.quiz_content.length }}</p>
  </div>
</template>

<style lang="scss"></style>
