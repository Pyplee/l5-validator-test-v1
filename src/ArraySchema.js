class ArraySchema {
  constructor() {
    this.number = null;
  }

  isValid(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    if (this.number !== null && data.length !== this.number) {
      return false;
    }
    return true;
  }

  length(numberFunc) {
    this.number = numberFunc;
    return this;
  }
}

export default ArraySchema;
