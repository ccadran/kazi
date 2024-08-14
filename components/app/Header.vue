<script lang="ts" setup></script>

<template>
  <nav class="navbar">
    <div class="navbarContent">
      <a href="/">
        <img src="/icons/kazi-logo.svg" alt="" height="50px" />
      </a>
      <div class="navbarLinks _xl">
        <a href="/categories">CATEGORIES</a>
        <a href="/quiz">QUIZ</a>
        <a href="/community">community</a>
        <a href="/profile">my Account</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  position: fixed;
  width: 100%;
  mix-blend-mode: difference;
  z-index: 100;
  > .navbarContent {
    margin: 24px 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .navbarLinks {
      display: flex;
      gap: 20px;
      text-transform: uppercase;
    }
  }
}
</style>
