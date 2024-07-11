<script lang="ts" setup>
import type { Category, SubTheme, Quiz } from "~/server/types/api";
import { useQuizStore } from "~/stores/quiz";

const quizStore = useQuizStore();

const categories = ref<Category[]>([]);
const subthemes = ref<SubTheme[]>([]);
const quizzes = ref<Quiz[]>([]);
const quizPersonalized = ref([]);

const { data: categoriesData, error: categoriesError } = await useFetch<
  Category[]
>("/api/categories");
categories.value = categoriesData.value;
// console.log(categories.value, "categories");

const { data: subthemesData, error: subthemesError } = await useFetch<
  Category[]
>("/api/subthemes");
subthemes.value = subthemesData.value;
// console.log(subthemes.value, "subthemes");

const { data: quizzesData, error: quizzesError } = await useFetch<Category[]>(
  "/api/quiz"
);
quizzes.value = quizzesData.value;
watch(quizPersonalized, (value) => {
  console.log(value, "quizPersonalized");
  quizStore.setQuiz(value);
  console.log(quizStore.quiz, "quizStore");
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

const addQuizContent = (theme) => {
  if (Array.isArray(theme)) {
    theme.forEach((subtheme) => {
      if (!subtheme.isContentAdded && subtheme.quiz_content.length > 0) {
        subtheme.quiz_content.forEach((quiz) => {
          quizPersonalized.value = [...quizPersonalized.value, quiz];
        });
        subtheme.isContentAdded = true; // Marque comme ajouté
      } else if (subtheme.isContentAdded) {
        subtheme.quiz_content.forEach((quiz) => {
          quizPersonalized.value = quizPersonalized.value.filter(
            (q) => q.id !== quiz.id
          );
        });
        subtheme.isContentAdded = false; // Marque comme retiré
      }
    });
  } else {
    if (!theme.isContentAdded) {
      theme.quiz_content.forEach((quiz) => {
        quizPersonalized.value = [...quizPersonalized.value, quiz];
      });
      theme.isContentAdded = true;
    } else {
      theme.quiz_content.forEach((quiz) => {
        quizPersonalized.value = quizPersonalized.value.filter(
          (q) => q.id !== quiz.id
        );
      });
      theme.isContentAdded = false; // Marque comme retiré
    }
  }
};
</script>

<template>
  <div>
    <h1>Quiz creator</h1>
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
  </div>
</template>

<style lang="scss"></style>
