<script lang="ts" setup>
import type { Category, SubTheme, Quiz } from "~/server/types/api";
import { useQuizStore } from "~/stores/quiz";

const quizStore = useQuizStore();

const categories = ref<Category[]>([]);
const subthemes = ref<SubTheme[]>([]);
const quizzes = ref<Quiz[]>([]);

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
// console.log(quizzes.value, "quizzes");

const subthemesWithQuizzes = computed(() => {
  return subthemes.value.map((subtheme) => ({
    ...subtheme,
    quiz_content: quizzes.value
      .filter((quiz) => quiz.subtheme_id === subtheme.id)
      .map((quiz) => quiz.quiz_content)
      .flat(),
  }));
});
// console.log(subthemesWithQuizzes.value, "subthemes filtered");

const categoriesWithSubthemes = computed(() => {
  return categories.value.map((category) => ({
    ...category,
    subthemes: subthemesWithQuizzes.value.filter(
      (subtheme) => subtheme.category_id === category.id
    ),
  }));
});

console.log(categoriesWithSubthemes.value, "categoriesWithSubthemes");

const addQuizContent = (theme) => {
  if (Array.isArray(theme)) {
    console.log(theme, "theme");

    theme.forEach((subtheme) => {
      if (subtheme.quiz_content.length > 0) {
        console.log(subtheme.quiz_content, "subthemeQuizContent");
      }
    });
  } else {
    console.log(theme.quiz_content, "quizContent");
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
