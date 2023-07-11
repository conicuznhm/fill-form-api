const { Form } = require("../models");
const fillService = async input => {
  try {
    const result = await Form.create(input);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const getService = async id => {
  try {
    const result = await Form.findOne({
      where: { id }
    });
    return result;
  } catch (err) {
    console.error(err);
  }
};

const getAllService = async () => {
  try {
    const result = await Form.findAll();
    return result;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { fillService, getService, getAllService };
