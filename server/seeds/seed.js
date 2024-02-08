const db = require('../config/connection');
const { User, Appointments, Hospital, Doctor } = require('../models');
const cleanDB = require('./cleanDB');

const seedData = require('./userData.json');

db.once('open', async () => {
  // await cleanDB('Tech', 'teches');

  await User.insertMany(seedData);

  console.log('Data seeded!');
  process.exit(0);
});
