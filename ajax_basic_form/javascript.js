
(function($) {

  $(document).ready(function() {

    $('button[type="submit"]').on('click', function(event) {
      // alert('Hello!');
      event.preventDefault();
      var form_data = $("#this_form :input").filter(function(index, element) {return $(element).val() != '';}).serialize();
      $('.status').html(form_data);
    });

    $('button[type="reset"]').on('click', function(event) {
      // alert('Hello!');
      $("#this_form").find('input:text').removeAttr('value');
      $("#this_form").find('select option:selected').prop('selected', false).removeAttr('selected');
      $("#this_form").find('input:checkbox:checked, input:radio:checked').removeAttr('checked');
    });

  });

})(jQuery);
