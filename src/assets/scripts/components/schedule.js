define(['jquery'], function ($) {
  return {
    setCurrentTime: function () {
      var options = {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric',
      };
      var currentTime = new Date().toLocaleString('en-US', options);
      $('[data-local-time]').text(currentTime);
    },
    init: function () {
      this.setCurrentTime();
    },
  };
});
