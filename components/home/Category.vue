<script lang="ts" setup>
import type { Category } from "~/server/types/api";

const props = defineProps<{
  category: Category;
}>();
</script>

<template>
  <NuxtLink :to="'/categories/' + category.id" class="category">
    <div class="category">
      <div class="cover">
        <img :src="category.cover" alt="" class="inner" />
      </div>
      <div class="info">
        <p class="_2-xl">
          {{ category.title }}
        </p>
        <img src="/icons/square-arrow.svg" alt="" />
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.category {
  display: flex;
  flex-direction: column;
  min-width: 214px;
  min-height: 300px;
  max-width: 214px;
  max-height: 300px;

  .cover {
    width: 100%;
    height: 250px;
    > .inner {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > .info {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
}
</style>
