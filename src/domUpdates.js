const domUpdates =  {
  updateSize(amount, dimension) {
    $(".box").css({
      [dimension]: amount
    });
  }
};

if (typeof module !== "undefined") {
  module.exports = domUpdates;
}
