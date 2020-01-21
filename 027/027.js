Array.prototype.square = function () {
  if (Array.isArray(this) && this.length) {
    return this.map((val) => val * val);
  } else {
    return NaN;
  }
}

Array.prototype.cube = function () {
  if (Array.isArray(this) && this.length) {
    return this.map((val) => val * val * val);
  } else {
    return NaN;
  }
}

Array.prototype.average = function () {
  if (Array.isArray(this) && this.length) {
    return this.reduce((acc, cur) => {
      return acc += cur;
    }, 0) / this.length;
  } else {
    return NaN;
  }
}

Array.prototype.sum = function () {
  if (Array.isArray(this) && this.length) {
    return this.reduce((acc, cur) => {
      return acc += cur;
    }, 0);
  } else {
    return NaN;
  }
}

Array.prototype.even = function () {
  if (Array.isArray(this) && this.length) {
    return this.filter((val) => !(val % 2));
  } else {
    return NaN;
  }
}

Array.prototype.even = function () {
  if (Array.isArray(this) && this.length) {
    return this.filter((val) => val % 2);
  } else {
    return NaN;
  }
}
