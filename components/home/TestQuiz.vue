<script lang="ts" setup></script>

<template>
  <div class="testQuiz">
    <div class="inner1">
      <p>Not so sure of the utility?</p>
    </div>
    <div class="innner2">
      <p>START A TEST QUIZ RIGHT NOW</p>
    </div>
    <div class="testQuizChoice">
      <HomeTestQuizDifficulty difficulty="easy" />
      <HomeTestQuizDifficulty difficulty="medium" />
      <HomeTestQuizDifficulty difficulty="hard" />
    </div>
  </div>
</template>

<style lang="scss">
.testQuiz {
  display: flex;
  flex-direction: column;
  font-size: 48px;
  text-transform: uppercase;
  > .inner1 {
    margin-top: 92px;
    width: 40%;
    margin-right: auto;
  }
  > .innner2 {
    margin-top: 132px;
    width: 100%;
    p {
      width: 40%;
      margin-left: auto;
    }
  }

  > .testQuizChoice {
    margin-top: 180px;
  }
}
</style>
