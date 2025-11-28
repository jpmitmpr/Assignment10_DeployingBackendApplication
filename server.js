// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models');

const authRoutes = require('./routes/auth');
const tasksRoutes = require('./routes/tasks');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.json());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api/tasks', tasksRoutes);

app.get('/api/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ status: 'ok', environment: NODE_ENV, db: 'connected' });
  } catch (err) {
    res.status(500).json({ status: 'error', environment: NODE_ENV, db: 'disconnected' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
