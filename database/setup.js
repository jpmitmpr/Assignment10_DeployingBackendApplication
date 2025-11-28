// database/setup.js
const { sequelize } = require('../models');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced (tables created).');
    process.exit(0);
  } catch (err) {
    console.error('Failed to sync DB:', err);
    process.exit(1);
  }
})();
