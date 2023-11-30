const seedOwners = require('./owner-seeds');
const seedTeams = require('./teams-seeds');



const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedOwners();
  console.log('\n----- USERS SEEDED -----\n');

  await seedTeams();
  console.log('\n----- ARTICLES SEEDED -----\n');


  process.exit(0);
};

seedAll();