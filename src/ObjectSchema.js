class ObjectSchrema {
  constructor() {
    this.validations = {};
  }

  shape(newData) {
    this.validations = newData;
    return this;
  }

  isValid(data) {
    const dataKeys = Object.keys(data);
    const schemaKeys = Object.keys(this.validations);

    if (dataKeys.length !== schemaKeys.length) {
      return false;
    }

    return schemaKeys.every((key) => this.validations[key].isValid(data[key]));
  }
}

export default ObjectSchrema;
