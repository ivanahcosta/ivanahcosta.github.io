<template>
  <section>
    <div class="container">social</div>
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
        {
          text: "Dev.to",
          url: "https://dev.to/icosta",
          username: "icosta",
          icon: "material-symbols:devices-fold-sharp",
        },
      ],
    };
  }, 
};
</script>
