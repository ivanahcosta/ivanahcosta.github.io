<template>
  <section
    class="flex min-h-screen flex-col justify-end pt-[100px]"
    id="about"
    style="min-height: calc(var(--vh, 1vh) * 100)"
  >
    <div class="container">
      <h1 class="pb-0">Ivana Costa</h1>
      <p class="text-zinc-500 dark:text-zinc-400">Desenvolvedora frontend</p>
    </div>
    <div class="container">
      <h2 class="text-xl leading-snug">
        Sou uma desenvolvedora web especializada em frontend com mais de 7 anos
        de experiência ajudando a construir e promover produtos, campanhas e
        serviços digitais.
      </h2>
    </div>
    <div class="container">
      <a
        class="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 p-1 pr-5 dark:bg-zinc-900"
        href="#contact"
      >
        <span
          class="flex aspect-square w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800"
        >
          <span
            class="flex aspect-square w-2 items-center justify-center rounded-full bg-green-500"
            data-status
          ></span>
        </span>
        <span>Disponível a partir de Jul/23</span>
      </a>
    </div>
  </section>
</template>

<script>
if (process.client) {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
</script>

<style scoped>
[data-status] {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.8);
    box-shadow: 0 0 0 0 green;
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.8);
  }
}
</style>
