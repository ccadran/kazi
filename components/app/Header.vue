<script lang="ts" setup></script>

<template>
  <a href="/" class="logo">
    <img src="/icons/kazi-logo.svg" alt="" height="50px" />
  </a>
  <nav class="navbar">
    <div class="navbarContent">
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
.logo {
  position: fixed;
  left: 30px;
  margin-top: 24px;
}
.navbar {
  position: fixed;
  width: fit-content;
  z-index: 100;
  mix-blend-mode: difference;
  right: 30px;
  > .navbarContent {
    margin-top: calc(24px + 12px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      isolation: isolate;
    }

    > .navbarLinks {
      display: flex;
      gap: 20px;
      text-transform: uppercase;
      color: inherit;
      a {
        color: var(--c-white);
      }
    }
  }
}
</style>
