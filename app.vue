<template>
  <div>
    <Header />
    <main class="max-w-[490px]">
      <about />
      <works />
      <contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Lenis from "@studio-freight/lenis";

onMounted(() => {
  const smoother = new Lenis({
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
  htmlAttrs: {
    lang: "pt",
  },
});

useSeoMeta({
  title: "Ivana Costa ▪ Desenvolvedora frontend",
  ogTitle: "Ivana Costa ▪ Desenvolvedora frontend",
  description:
    "Ivana é uma Desenvolvedora Web especializada em Frontend e mais de 7 anos de experiência.",
  ogDescription:
    "Ivana é uma Desenvolvedora Web especializada em Frontend e mais de 7 anos de experiência.",
  ogImage: "https://ivanahcosta.github.io/meta.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style>
body {
  animation: fadeIn 1.3s linear;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
