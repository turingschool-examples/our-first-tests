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
  }

  saveDetails() {
    localStorage.setItem('box', { 
      height: this.height,
      width: this.width
    });
  }
}

module.exports = Box;