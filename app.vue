<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Lenis from "@studio-freight/lenis";
let smoother;

onMounted(() => {
  smoother = new Lenis({
    duration: 1,
    smooth: true,
    smoothTouch: false,
  });

  function raf(time) {
    smoother.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf); 
});

useHead({
  lang: "pt",
  title: "Ivana H. Costa",
  meta: [{ name: "description", content: "Portfolio de Ivana H. Costa." }],
});
</script>