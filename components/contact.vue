<template>
  <section id="contact">
    <div
      class="container grid gap-10 border-b border-zinc-100 dark:border-zinc-900"
    >
      <h3>Contato</h3>
    </div>
    <div class="container grid gap-2">
      <p class="text-xl leading-snug">
        Quer transformar sua visão em realidade ou simplesmente deseja bater um
        papo? Entre em contato e vamos construir algo memorável juntos.
      </p>
      <p class="text-zinc-500 dark:text-zinc-400">
        Estou aqui para ouvir, colaborar e criar soluções de digitais que
        ressoem.
      </p>
    </div>
    <div class="container flex flex-wrap items-center gap-1 leading-none">
      <NuxtLink
        class="inline-flex items-center justify-start gap-2 rounded-full bg-zinc-200 p-5 dark:bg-zinc-800"
        href="mailto:ivanahcosta@gmail.com"
        target="_blank"
      >
        <Icon name="mi:email" color="currentColor" />
        <span>ivanahcosta@gmail.com</span>
      </NuxtLink>
      <NuxtLink
        class="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 p-5 dark:bg-zinc-900"
        :href="item.url"
        target="_blank"
        :aria-label="item.text"
        v-for="item in links"
      >
        <Icon :name="item.icon" color="currentColor" />
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: "Github",
          url: "https://github.com/ivanahcosta",
          username: "@ivanahcosta",
          icon: "grommet-icons:github",
        },
        {
          text: "Behance",
          url: "https://behance.net/ivana-costa",
          username: "@ivana-costa",
          icon: "mdi:behance",
        },
        {
          text: "Discord",
          url: "https://discordapp.com/channels/@me/ivana#9261/",
          username: "@ivana#9261",
          icon: "ic:baseline-discord",
        },
      ],
    };
  },
};
</script>
