$(document).ready(function() {
  var box = new Box();

  $("button").on("click", function(e) {
    e.preventDefault();

    var amount = parseInt($("input").val());
    var dimension = $("#select option:selected").val();
    $("input").val('');
    box.incrementSize(amount, dimension);
  });
  
});
