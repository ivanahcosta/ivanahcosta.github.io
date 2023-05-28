define(['jquery', 'gsap', 'ScrollTrigger', 'Draggable'], function ($, gsap, ScrollTrigger, Draggable) {
  var gsap = gsap.gsap;
  var ScrollTrigger = ScrollTrigger.ScrollTrigger;
  var Draggable = Draggable.Draggable;
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Draggable);
  return {
    openProjectModal: function () {
      $('body').on('click', '[data-project-title]', function (e) {
        var project = $(this).closest('[data-project]');
        var projectContent = $(project).find('[data-project-content]');
        $(project).addClass('active');
        if ($(window).width() > 640) {
          $(projectContent)
            .css('top', e.pageY - 50 + 'px')
            .css('left', e.pageX - 140 + 'px');
          Draggable.create(projectContent);
        }
      });
    },
    closeProjectModal: function () {
      $('body').on('click', '[data-action="project-close"], [data-project].active [data-project-title]', function (e) {
        var project = $(this).closest('[data-project]');
        $(project).removeClass('active');
      });
    },
    init: function () {
      this.openProjectModal();
      this.closeProjectModal();
    },
  };
});
