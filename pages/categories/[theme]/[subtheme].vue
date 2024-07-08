<script lang="ts" setup>
import type { Subtheme } from "~/server/types/api";

const route = useRoute();
const categoryId = route.params.subtheme as string;
console.log(route.params);

const subthemeContent = ref<Subtheme[]>([]);

const { data } = await useFetch<Category[]>(`/api/subthemes/${categoryId}`);
console.log(data);
subthemeContent.value = data.value[0];
console.log(subthemeContent.value);
</script>

<template>
  <div>page d'un sous thème</div>
  <h1>{{ subthemeContent.title }}</h1>
</template>

<style lang="scss"></style>
