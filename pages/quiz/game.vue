<script lang="ts" setup>
import { useQuizStore } from "~/stores/quiz";
import type { Quiz } from "~/server/types/api";
type QuizAnswer = Quiz["content"]["answers"];

const quizStore = useQuizStore();
const quiz = computed<Quiz | null>(() => quizStore.fullQuiz);
const quizContent = computed(() => quizStore.quizContent);

const currentIndex = ref<number>(0);
const currentAnswer = ref(null);
const quizScore = ref<number>(0);
const isValidate = ref(false);
const isQuizEnded = ref(false);
console.log(quiz.value, "quiz");
console.log(quizContent.value, "quizContent");

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
  if (currentIndex.value < quizContent.value.length - 1) {
    currentIndex.value++;
    isValidate.value = false;
  } else {
    isQuizEnded.value = true;
  }
};

const percentageResult = computed(
  () => (quizScore.value / quizContent.value.length) * 100
);
</script>

<template>
  <div>ma page de quiz</div>
  <h1>{{ quiz.title }}</h1>

  <div v-if="!isQuizEnded && quizContent[currentIndex]">
    <h2>{{ quizContent[currentIndex].question }}</h2>
    <ul>
      <li
        @click="currentAnswer = answer"
        v-for="answer in quizContent[currentIndex].answers"
        :key="answer.text"
      >
        {{ answer.text }}
      </li>
    </ul>
    <div v-if="isValidate && currentAnswer">
      <h4>{{ currentAnswer.isCorrect }}</h4>
      <p>{{ quizContent[currentIndex].explication }}</p>
    </div>
    <div class="navigation">
      <button v-if="!isValidate" @click="checkAnswer(currentAnswer)">
        Validate
      </button>
      <button v-if="isValidate" @click="nextQuestion()">Next</button>
    </div>
  </div>
  <div v-else-if="isQuizEnded">
    <h2>Quiz terminé</h2>
    <p>{{ percentageResult }} %</p>
  </div>
</template>

<style lang="scss"></style>
