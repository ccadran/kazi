import { type } from '../../.nuxt/types/imports';
<script lang="ts" setup>
const props = defineProps({
  difficulty: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="testQuizDifficulty">
    <p class="_3-xl">{{ `${difficulty} difficulty` }}</p>
    <img src="/icons/arrow.svg" alt="" width="60px" />
  </div>
</template>

<style lang="scss">
.testQuizDifficulty {
  display: flex;
  width: 40%;
  justify-content: space-between;
  padding: 22px 0;
  border-top: 1px solid var(--c-black);
  border-bottom: 1px solid var(--c-black);
  p {
  }
}
</style>
