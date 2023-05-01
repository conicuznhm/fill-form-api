// const {validateFill} = require("")
exports.fill = async (req, res, next) => {
  try {
    // const result = validateFill(req.body)
    console.log(req.body);
    res.status(201).json("filled ok!!!");
  } catch (err) {
    console.error(err);
    next(err);
  }
};
