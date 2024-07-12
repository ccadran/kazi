import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Quiz } from "~/server/types/api";

export const useQuizStore = defineStore("quiz", () => {
  const fullQuiz = ref<Quiz | null>(null);
  const maxQuestions = ref<number>(25); // Valeur par défaut

  const quizContent = computed(() => {
    if (!fullQuiz.value || !fullQuiz.value.quiz_content) return [];

    // Assurez-vous que quiz_content est un tableau
    const content = Array.isArray(fullQuiz.value.quiz_content)
      ? fullQuiz.value.quiz_content
      : [fullQuiz.value.quiz_content];

    // Créez une copie, mélangez et limitez le nombre de questions
    return [...content]
      .sort(() => Math.random() - 0.5)
      .slice(0, maxQuestions.value);
  });

  function setQuiz(value: Quiz) {
    fullQuiz.value = value;
  }

  function setMaxQuestions(value: number) {
    maxQuestions.value = value;
  }

  return { fullQuiz, quizContent, setQuiz, setMaxQuestions, maxQuestions };
});

// import { defineStore } from "pinia";

// import type { Quiz } from "~/server/types/api";

// export const useQuizStore = defineStore("quiz", () => {
//   const quiz = ref<Quiz | null>(null);
//   const maxQuestions = ref(3); // Valeur par défaut

//     const quizContent = computed(() => {
//     if (!fullQuiz.value || !fullQuiz.value.quiz_content) return [];

//     // Assurez-vous que quiz_content est un tableau
//     const content = Array.isArray(fullQuiz.value.quiz_content)
//       ? fullQuiz.value.quiz_content
//       : [fullQuiz.value.quiz_content];

//     // Créez une copie, mélangez et limitez le nombre de questions
//     return [...content]
//       .sort(() => Math.random() - 0.5)
//       .slice(0, maxQuestions.value);
//   });

//   function setQuiz(value: Quiz, questionsNumber?: number) {
//     quiz.value = value;
//     console.log(quiz.value, "quizStore log");
//   }
//   function setMaxQuestions(value: number) {
//     maxQuestions.value = value;
//   }

//   return { quiz, maxQuestions, setQuiz, setMaxQuestions };
// });
