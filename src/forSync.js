const { sequelize } = require("./models");

// const syncFn = async () => {
//   try {
//     await sequelize.sync({ force: true });
//     process.exit(0);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// syncFn();

(async () => {
  try {
    await sequelize.sync({ force: true });
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
