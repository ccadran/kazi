<script lang="ts" setup>
import type {
  Category,
  Subtheme,
  Quiz,
  QuizPersonalized,
} from "~/server/types/api";
import { useQuizStore } from "~/stores/quiz";

const quizStore = useQuizStore();
console.log(quizStore);

const categories = ref<Category[]>([]);
const subthemes = ref<Subtheme[]>([]);
const quizzes = ref<Quiz[]>([]);
const quizPersonalized = ref<QuizPersonalized>({
  quiz_content: [],
});
const maxQuestions = ref<number>(2);
// console.log(quizPersonalized.value.quiz_content, "quizPersonalized");
console.log(quizPersonalized.value, "quizPersonalized");
const { data: categoriesData, error: categoriesError } = await useFetch<
  Category[]
>("/api/categories");
categories.value = categoriesData.value!;
// console.log(categories.value, "categories");

const { data: subthemesData, error: subthemesError } = await useFetch<
  Subtheme[]
>("/api/subthemes");
subthemes.value = subthemesData.value!;
// console.log(subthemes.value, "subthemes");

const { data: quizzesData, error: quizzesError } = await useFetch<Quiz[]>(
  "/api/quiz"
);
quizzes.value = quizzesData.value!;

watch(quizPersonalized.value, (value) => {
  console.log(value, "quizPersonalized");
  quizStore.setQuiz(value);
  quizStore.setMaxQuestions(maxQuestions.value);
  console.log(quizStore.maxQuestions, "quizStore max");

  // console.log(quizStore.quiz, "quizStore");
});
const subthemesWithQuizzes = computed(() => {
  return subthemes.value.map((subtheme) => ({
    ...subtheme,

    quiz_content: quizzes.value
      .filter((quiz) => quiz.subtheme_id === subtheme.id)
      .map((quiz) => quiz.quiz_content)
      .flat(),
    isContentAdded: false,
  }));
});

const categoriesWithSubthemes = computed(() => {
  return categories.value.map((category) => ({
    ...category,
    subthemes: subthemesWithQuizzes.value.filter(
      (subtheme) => subtheme.category_id === category.id
    ),
    isContentAdded: false,
  }));
});

const addQuizContent = (theme: any) => {
  if (Array.isArray(theme)) {
    theme.forEach((subtheme) => {
      if (!subtheme.isContentAdded && subtheme.quiz_content.length > 0) {
        subtheme.quiz_content.forEach((quizContent) => {
          if (!quizPersonalized.value.quiz_content.includes(quizContent)) {
            quizPersonalized.value.quiz_content.push(quizContent);
          }
        });
        subtheme.isContentAdded = true; // Marque comme ajouté
      } else if (subtheme.isContentAdded) {
        subtheme.quiz_content.forEach((quizContent) => {
          quizPersonalized.value.quiz_content =
            quizPersonalized.value.quiz_content.filter(
              (q) => q !== quizContent
            );
        });
        subtheme.isContentAdded = false; // Marque comme retiré
      }
    });
  } else {
    if (!theme.isContentAdded) {
      theme.quiz_content.forEach((quizContent) => {
        if (!quizPersonalized.value.quiz_content.includes(quizContent)) {
          quizPersonalized.value.quiz_content.push(quizContent);
          console.log(quizPersonalized.value, "quizPersonalized");
        }
      });
      theme.isContentAdded = true; // Marque comme ajouté
    } else {
      theme.quiz_content.forEach((quizContent) => {
        quizPersonalized.value.quiz_content =
          quizPersonalized.value.quiz_content.filter((q) => q !== quizContent);
      });
      theme.isContentAdded = false; // Marque comme retiré
    }
  }
};
</script>

<template>
  <div>
    <h1>Quiz creator</h1>
    <h2>Themes</h2>
    <div v-for="category in categoriesWithSubthemes">
      <h2 @click="addQuizContent(category.subthemes)">
        {{ category.title }}
      </h2>
      <ul>
        <li
          v-for="subtheme in category.subthemes"
          @click="addQuizContent(subtheme)"
          :key="subtheme.id"
        >
          {{ subtheme.title }}
        </li>
      </ul>
    </div>
    <h2>Questions</h2>
    <h2>Nombre maximum de questions</h2>
    <input
      type="number"
      v-model.number="maxQuestions"
      min="1"
      @input="quizStore.setMaxQuestions(maxQuestions)"
    />
    <p @click="quizStore.setMaxQuestions(5)">5</p>
    <p @click="quizStore.setMaxQuestions(10)">10</p>
    <p @click="quizStore.setMaxQuestions(15)">15</p>
    <p @click="quizStore.setMaxQuestions(20)">20</p>
    <p @click="quizStore.setMaxQuestions(25)">25</p>
    <p @click="quizStore.setMaxQuestions()">max</p>

    <NuxtLink :to="'/quiz/game'">Démarrer le quiz</NuxtLink>
  </div>
</template>

<style lang="scss"></style>
