<template>
  <section id="works">
    <div
      class="container grid grid-cols-2 items-end border-b border-zinc-100 dark:border-zinc-900"
    >
      <h3 class="border-b-2">
        <span class="hidden md:inline">Projetos</span> selecionados
        <sup>17</sup>
      </h3>
      <h3
        class="cursor-no-drop pl-5 text-zinc-300 dark:text-zinc-500"
        aria-disabled="true"
      >
        Lab <Icon name="ph:sparkle" color="currentColor" />
      </h3>
    </div>
    <div class="container grid gap-5">
      <div class="relative">
        <div
          class="pointer-events-none absolute left-0 top-0 z-20 h-full w-full scale-[1.03] bg-gradient-to-t from-zinc-50 dark:from-zinc-950"
        ></div>
        <div
          class="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center"
        >
          <div class="relative w-32 max-[320px]:w-28">
            <svg
              class="pointer-events-none absolute left-0 top-0 z-10 aspect-square w-full fill-zinc-800 font-bold uppercase tracking-wider dark:fill-zinc-300"
              viewBox="0 0 100 100"
              data-badge
            >
              <defs>
                <path
                  id="circle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text font-size="10.5">
                <textPath xlink:href="#circle">
                  Entre em contato para saber mais —
                </textPath>
              </text>
            </svg>
            <a
              class="flex aspect-square w-full items-center justify-center rounded-full bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
              href="mailto:ivanahcosta@gmail.com"
              aria-label="Entre em contato para saber mais"
            >
              <Icon name="material-symbols:lock-outline" color="currentColor" />
            </a>
          </div>
        </div>
        <div class="grid">
          <div
            class="rleative z-10 grid gap-10 rounded-xl p-7 text-zinc-50"
            :style="`background-color: ${item.color}`"
            v-for="item in works"
            data-project
          >
            <div class="flex items-start justify-between gap-5">
              <div>
                <p class="opacity-50">{{ item.type }}</p>
                <h4 class="text-xl leading-snug">{{ item.title }}</h4>
                <p>{{ item.client }}</p>
              </div>
              <p>{{ item.date }}</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-1">
                <span
                  class="rounded-full border border-zinc-50/30 p-1 uppercase leading-none"
                  v-for="tag in item.tags"
                  >{{ tag }}</span
                >
              </div>
              <span
                class="inline-flex aspect-square w-12 shrink-0 items-center justify-center rounded-full bg-zinc-950 mix-blend-screen shadow-xl"
              >
                <Icon :name="item.icon" color="currentColor" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <p class="text-zinc-500 dark:text-zinc-400">
        Tive a oportunidade de contribuir em projetos para
        <span class="text-zinc-800 dark:text-zinc-300">Bradesco</span>,
        <span class="text-zinc-800 dark:text-zinc-300">Leroy Merlin</span>,
        <span class="text-zinc-800 dark:text-zinc-300">Burger King</span> e
        <span class="text-zinc-800 dark:text-zinc-300"
          >muitas outras marcas incríveis</span
        >. Entre em contato para conhecer mais sobre a minha experiência.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          type: "Site institucional",
          color: "#Ce2566",
          title: "Bradescard",
          client: "Bradescard",
          date: "2022",
          tags: ["Dev", "SEO", "JS", "11ty", "SASS"],
          emoji: "💳",
          icon: "material-symbols:add-card-outline-rounded",
        },
        {
          type: "Hotsite",
          color: "#4c157d",
          title: "Máquinas do Futuro",
          client: "Bradesco",
          date: "2019",
          tags: ["Dev", "JS", "Webpack", "AOS"],
          emoji: "🚗",
          icon: "material-symbols:electric-car-outline",
        },
        {
          type: "Site/CMS",
          color: "#4bad15",
          title: "Leroy Merlin ComVc",
          client: "Leroy Merlin",
          date: "2018",
          tags: ["Dev", "Razor", "JS"],
          emoji: "🧱",
          icon: "ph:wall",
        },
        {
          type: "Plataforma",
          color: "#09a1c8",
          title: "Aquaseed",
          client: "TNC",
          date: "2018",
          tags: ["Dev", "JS", "GA"],
          emoji: "🌱",
          icon: "ph:potted-plant",
        },
        {
          type: "Landing page/CMS",
          color: "#Ce5525",
          title: "Burger King Franquias",
          client: "Burger King",
          date: "2017",
          tags: ["Dev", "Razor", "JS", "GA"],
          emoji: "🍔",
          icon: "majesticons:burger-line",
        },
      ],
    };
  },

  mounted() {
    const projects = useGsap.utils.toArray("[data-project]");
    projects.forEach((project, i) => {
      if (i > 0) {
        useGsap.to(project, {
          marginTop: -150,
          scrollTrigger: {
            trigger: project,
            scrub: true,
            start: "top 100%",
          },
        });
      }
    });

    useGsap.to("[data-badge]", {
      rotation: "+=360",
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
      duration: 10,
    });
  },
};
</script>
