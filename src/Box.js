if (typeof module !== "undefined") {
  domUpdates = require("../src/domUpdates.js");
}

class Box {
  constructor(height = 100, width = 100) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  incrementSize(amount, dimension) {
    this[dimension] += amount;
    domUpdates.updateSize(this[dimension], dimension);
    this.saveDetails();
  }

  saveDetails() {
    const dimensions = {
      height: this.height,
      width: this.width
    }

    localStorage.setItem("box", JSON.stringify(dimensions));
  }
}

if (typeof module !== "undefined") {
  module.exports = Box;
}
