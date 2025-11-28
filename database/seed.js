// database/seed.js
const { User, Task } = require('../models');

(async () => {
  try {
    const alice = await User.create({ username: 'alice', password: 'password123', role: 'user' });
    const admin = await User.create({ username: 'admin', password: 'adminpass', role: 'admin' });

    await Task.bulkCreate([
      { title: 'Buy groceries', description: 'Milk, eggs, bread', userId: alice.id },
      { title: 'Finish homework', description: 'Complete assignment', userId: alice.id }
    ]);

    console.log('Seed data created.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
})();
