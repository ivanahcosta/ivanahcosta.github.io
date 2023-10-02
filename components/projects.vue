<template>
  <section>
    <div class="container">projects</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          color: "#444cbc",
          title: "Bradescard",
          client: "Bradescard",
          year: "2022",
          roletech: ["✨Desenvolvimento", "SEO", "Javascript", "11ty", "SASS"],
        },
        {
          color: "#271c35",
          title: "Máquinas do Futuro",
          client: "Bradesco",
          year: "2019",
          roletech: ["✨Desenvolvimento", "Javascript", "Webpack", "✨AOS.js"],
        },
        {
          color: "#81b75f",
          title: "Leroy Merlin ComVc",
          client: "Leroy Merlin",
          year: "2018",
          roletech: ["✨Desenvolvimento", "Razor", "Javascript"],
        },
      ],
    };
  }, 
};
</script>
