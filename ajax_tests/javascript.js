
(function($) {

  $(document).ready(function() {

    // var ajax_url = 'http://localhost:8888/';
    var ajax_url = 'ajax_content.html';

    $('div.ajax_content').load(ajax_url, function(response, status, xhr) {

      // if (status == 'error') {
      //   $('.status').html(xhr.status + ' ' + xhr.statusText);
      // }
      $('.status').html(xhr.status + ' ' + xhr.statusText);

    });

  });

})(jQuery);
