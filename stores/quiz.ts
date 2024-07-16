import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Quiz } from "~/server/types/api";

export const useQuizStore = defineStore("quiz", () => {
  const fullQuiz = ref<Quiz | null>(null);
  const maxQuestions = ref<number | null>(); // Valeur par défaut

  const quizContent = computed(() => {
    if (!fullQuiz.value || !fullQuiz.value.quiz_content) return [];

    // Assurez-vous que quiz_content est un tableau
    const content = Array.isArray(fullQuiz.value.quiz_content)
      ? fullQuiz.value.quiz_content
      : [fullQuiz.value.quiz_content];

    // Créez une copie, mélangez et limitez le nombre de questions
    // Créez une copie et mélangez
    const shuffledContent = [...content].sort(() => Math.random() - 0.5);

    // Slice seulement si maxQuestions a une valeur
    return maxQuestions.value !== null
      ? shuffledContent.slice(0, maxQuestions.value)
      : shuffledContent;
  });

  function setQuiz(value: Quiz) {
    fullQuiz.value = value;
  }

  function setMaxQuestions(value?: number | null) {
    maxQuestions.value = value ?? null;
  }

  return { fullQuiz, quizContent, setQuiz, setMaxQuestions, maxQuestions };
});
