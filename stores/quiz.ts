import { defineStore } from "pinia";

import type { Quiz } from "~/server/types/api";

export const useQuizStore = defineStore("quiz", () => {
  const quiz = ref<Quiz | null>(null);

  function setQuiz(value: Quiz, title: string) {
    quiz.value = value;
  }

  return { quiz, setQuiz };
});

// export const useQuizStore = defineStore("quiz", {
//   state: (): QuizState => ({
//     quiz: null,
//     currentQuestionIndex: 0,
//   }),
//   actions: {
//     setQuiz(quiz: Quiz) {
//       this.quiz = quiz;
//     },
//     nextQuestion() {
//       if (
//         this.quiz &&
//         this.currentQuestionIndex < this.quiz.questions.length - 1
//       ) {
//         this.currentQuestionIndex++;
//       }
//     },
//     resetQuiz() {
//       this.currentQuestionIndex = 0;
//     },
//   },
//   getters: {
//     currentQuestion: (state): QuizQuestion | undefined =>
//       state.quiz?.questions[state.currentQuestionIndex],
//     isQuizComplete: (state): boolean =>
//       state.quiz
//         ? state.currentQuestionIndex >= state.quiz.questions.length - 1
//         : false,
//   },
// });
