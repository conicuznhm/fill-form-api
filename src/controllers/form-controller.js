// const {validateFill} = require("")
const { Form } = require("../models");
exports.fill = async (req, res, next) => {
  try {
    // const input = validateFill(req.body)
    const input = req.body;
    const result = await Form.create(input);
    console.log(input);
    console.log(result);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getDetail = async (req, res, next) => {
  try {
    // const param = req.param;
    const { id } = req.params;
    const result = await Form.findOne({
      where: { id }
    });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getAllDetails = async (req, res, next) => {
  try {
    const result = await Form.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
