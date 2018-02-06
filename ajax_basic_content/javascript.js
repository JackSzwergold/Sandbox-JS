
(function($) {

  $(document).ready(function() {

    // Set the Ajax option values.
    // var data_url = 'http://localhost:8888/';
    var data_url = 'ajax_content.html';
    var data_type = 'html';
    var data_method = 'get';

    // Set the Ajax options.
    var ajax_options = {
      url: data_url,
      dataType: data_type,
      method: data_method,
      async: true,
      cache: false,
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache'
      },
      success: function(data, textStatus, jqXHR) {
        // $('div.ajax_content').html(data);
        // $('div.ajax_content').html($(data).filter('div.shape#this_one'));
        $('div.ajax_content').hide().html($(data).filter('div.shape#this_one')).fadeIn(300);
        $('.status').html(jqXHR.status + ' ' + textStatus);
      },
      error: function(jqXHR, textStatus) {
        $('.status').html(jqXHR.status + ' ' + textStatus);
      }
      // complete: function(jqXHR, textStatus) {
      //   $('.status').html(jqXHR.status + ' ' + textStatus);
      // }
    };

    if (true) {
      // Run the Ajax call via the standard method.
      $.ajax(ajax_options);
    }
    else {
      // Run the Ajax call via the 'load' shorthand method.
      data_url = data_url + ' div.shape#this_one';
      $('div.ajax_content').load(data_url, function(response, status, xhr) {

        // if (status == 'error') {
        //   $('.status').html(xhr.status + ' ' + xhr.statusText);
        // }
        $('.status').html(xhr.status + ' ' + xhr.statusText);

      });
    }




  });

})(jQuery);
