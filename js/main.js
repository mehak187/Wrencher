$(document).ready(function () {
  $('.chevron-icon').on('click', function (event) {
      event.preventDefault(); // Prevent the link from being followed
      const target = $($(this).data('target'));
      const isTargetOpen = target.hasClass('show');
      $('.mydropdown').removeClass('show').each(function () {
          const otherIcon = $('.chevron-icon[data-target="#' + this.id + '"]');
          otherIcon.removeClass('rotate');
      });
      if (!isTargetOpen) {
          target.addClass('show');
          $(this).addClass('rotate');
      }
  });
});