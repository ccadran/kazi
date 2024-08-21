<script lang="ts" setup></script>

<template>
  <section class="premium">
    <div class="intro">
      <h3>unlock all the features</h3>
      <p class="_lg">
        We're sorry, we gotta make a bit of money... But if you decide to
        support us, it won't be for charity! You'll unlock game-changing
        features in your learning experience of Three .js with KAZI. Don't worry
        if you don't have the budget, KAZI is a game-changer by itself, so
        enjoy-it !
      </p>
    </div>
    <div class="premiumContainer"></div>
  </section>
</template>

<style lang="scss">
.premium {
  > .intro {
    margin: 258px 60px;
    display: flex;
    flex-direction: column;
    gap: 42px;
    width: 70%;
  }
  > .premiumContainer {
    height: 100svh;
    background-color: var(--c-black);
    width: 100%;
  }
}
</style>
