<script lang="ts" setup>
import type { Category } from "~/server/types/api";

const categories = ref<Category[]>([]);

const { data, error } = await useFetch<Category[]>("/api/categories");
categories.value = data.value;

console.log(categories.value);
</script>

<template>
  <div class="popularCategories">
    <div class="categoriesIntro">
      <h3>Popular categories</h3>
      <p class="_lg">
        If people like it, it must be good. Discover the 6 categories most
        played by our users!
      </p>
    </div>
    <div class="categories">
      <HomeCategory
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </div>
</template>

<style lang="scss">
.popularCategories {
  margin-top: 244px;
  > .categoriesIntro {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  > .categories {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    justify-items: center;
    align-items: center;
    row-gap: 144px;
    margin: 124px 74px 244px;
    @include media("<desktop") {
      grid-template-columns: repeat(2, 1fr);
    }
    @include media("<tablet") {
      grid-template-columns: 1fr;
    }
  }
}
</style>
