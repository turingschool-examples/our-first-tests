$(document).ready(function() {
  var box = new Box();

  $("button").on("click", function(e) {
    e.preventDefault();

    var amount = $("input").val();
    var dimension = $("#select option:selected").val();
    box.incrementSize(amount, dimension);
  });
  
});
