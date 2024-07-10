<script lang="ts" setup>
import type { Category, Subtheme } from "~/server/types/api";

const supabase = useSupabaseClient();
const category = ref<Category[]>([]);

const route = useRoute();
const categoryId = route.params.theme as string;
// console.log(route.params);

const { data, error } = await useFetch<Category[]>(
  `/api/categories/${categoryId}`
);

category.value = data.value[0];

const subThemes = ref<Subtheme[]>([]);

const { data: dataSubthemes } = await useFetch<Category[]>(
  `/api/subthemes/category-${categoryId}`
);
subThemes.value = dataSubthemes.value;
// console.log(subThemes.value);
</script>

<template>
  <div>page d'un theme</div>
  <div>
    <h2>
      {{ category.title }}
    </h2>
    <h3>Subthemes</h3>
    <ul>
      <li v-for="subtheme in subThemes" :key="subtheme.id">
        <nuxt-link :to="`/categories/${category.id}/${subtheme.id}`">{{
          subtheme.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
