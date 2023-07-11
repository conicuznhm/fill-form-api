// const {validateFill} = require("")
const formServices = require("../services/form-services");

exports.fill = async (req, res, next) => {
  try {
    // const input = validateFill(req.body);
    const input = req.body;
    const result = await formServices.fillService(input);
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
    const result = await formServices.getService(id);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getAllDetails = async (req, res, next) => {
  try {
    const result = await formServices.getAllService();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
