
(function($) {

  function scrollHandler() {

    console.log("scroll (debounced)");

    var position = $(this).scrollTop();
    if (position >= 0) {
      console.log('common ' + position);
    }
    else {
      console.log('hip the top ' + position);
    }

  };

  $(document).ready(function () {

    // How to call the '.debounce' function.
    var debouncedScrollHandler = _.debounce(scrollHandler, 50);

    $(window).scroll(function() {

      // Normal scroll.
      console.log('scroll (normal)');

      // Debounced scroll.
      debouncedScrollHandler();

    });

  });

})(jQuery);
