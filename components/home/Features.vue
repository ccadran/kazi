<script lang="ts" setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const backgroundRef = ref<HTMLElement | null>(null);
const featuresContainerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (backgroundRef.value && featuresContainerRef.value) {
    gsap.to(backgroundRef.value, {
      scrollTrigger: {
        trigger: featuresContainerRef.value,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      background: `radial-gradient(
        70.67% 70.67% at 50% 50%,
        rgba(250, 107, 3, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      ), #000`,
    });
  } else {
    console.error("Les références ne sont pas correctement initialisées.");
  }
});
</script>

<template>
  <div class="features">
    <div class="featuresIntro">
      <h3>BY A DEVELOPER FOR THE DEVELOPERS</h3>
      <p class="_lg">
        This site is the brainchild of a developer who, after exploring the
        Internet and its many Three.js tutorials, realized there was a problem.
        Three.js contains a huge number of different themes, and trying to
        remember them all is a real pain! While practice is still the best way
        to learn, a quiz site that allows you to test yourself on a daily basis
        isn't a bad option either.
      </p>
    </div>

    <div class="featuresContent" ref="featuresContainerRef">
      <div class="title" ref="backgroundRef">
        <h2>
          This is why the <br />
          website contains
        </h2>
      </div>
      <div class="featuresList">
        <h2 class="feature">
          DOZENS OF <br />
          CATEGORIES
        </h2>
        <h2 class="feature">
          hundreds of <br />
          questions
        </h2>
        <h2 class="feature">a quiz saver</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.features {
  > .featuresIntro {
    margin: 0 60px 342px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .featuresContent {
    height: 500svh;
    color: var(--c-white);
    opacity: 1;

    > .title {
      background: radial-gradient(
          10.67% 10.67% at 50% 50%,
          rgba(250, 107, 3, 0.2) 0%,
          rgba(0, 0, 0, 0) 100%
        ),
        #000;
      height: 100svh;
      position: sticky;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      top: 0;
      // mix-blend-mode: difference;
    }
    > .featuresList {
      padding: 0 120px;
      margin-top: 50svh;
      position: relative;
      z-index: 1;
      mix-blend-mode: difference;
      .feature {
        width: fit-content;
        &:nth-child(2) {
          margin: 90svh 0 90svh auto;
        }
        &:nth-child(3) {
          margin-left: 60px;
        }
      }
    }
  }
}
</style>
