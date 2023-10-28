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

    //  const schema3 = validator.object().shape({
    //   id: validator.number().even(),
    //   basket: validator.array().length(2),
    //   payment: validator.array().length(2),
    // });

    // schema1.isValid({ id: 11, basket: ['potatos', 'tomatos', 'oranges'] }), true);
    // schema1.isValid({ id: 12, basket: ['potatos', 'tomatos', 'oranges'] }), false);

    // [id, basket].every((id) => v.number().odd()[id].isValid(11))
    // [id, basket].every((basket) =>
    // v.array().length(3)[basket].isValid(['potatos', 'tomatos', 'oranges']))
  }
}

export default ObjectSchrema;
