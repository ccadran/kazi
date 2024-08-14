<script lang="ts" setup></script>

<template>
  <footer>
    <div class="footerContent">
      <h4>Let’s start learning the best way</h4>
      <div class="footerLinks _xl">
        <a href="/categories">CATEGORIES</a>
        <a href="/quiz">QUIZ</a>
        <a href="/community">community</a>
        <a href="/profile">my Account</a>
        <a href="/story">our story</a>
      </div>
      <div class="credits _lg-u">
        <p>Clario Cadran</p>
        <p>All rights reserved @ 2024</p>
        <p>Kazi@gmail.com</p>
      </div>
    </div>
    <div class="kazi">Kazi</div>
  </footer>
</template>

<style lang="scss">
footer {
  // background: linear-gradient(
  //     180deg,
  //     rgba(0, 0, 0, 0) 60.74%,
  //     rgba(250, 107, 3, 0.2) 99.97%
  //   ),
  //   #000;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 60%,
      rgba(250, 107, 3, 0.2) 100%
    ),
    #000;
  // border: 1px solid #000;
  // margin: -1px;
  // transform: translateZ(0);

  clip-path: polygon(
    100% 100%,
    100% 0%,
    13.75% 0%,
    0% 16.5%,
    0% 100%,
    100% 100%
  );
  color: var(--c-white);
  overflow: hidden;
  height: 100svh;
  .footerContent {
    padding-top: 10svh;
    height: 60svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h4 {
      text-transform: none;
      font-size: 48px;
    }

    .footerLinks {
      display: flex;
      gap: 20px;
      a {
        color: var(--c-white);
      }
    }

    .credits {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 30px 12px;
      border-bottom: 1px solid var(--c-white);
    }
  }
  .kazi {
    height: 40svh;
    font-size: 36vw;
    text-transform: uppercase;
    letter-spacing: -10px;
    text-align: center;
    line-height: 80%;
    font-weight: 700;
    margin-top: 24px;
  }
}
</style>
