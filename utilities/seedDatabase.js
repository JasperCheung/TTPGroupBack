const { Student, Campus } = require('../database/models');
const campuses = require('../data/campuses'); // 51 players;

const populateCampusTable = async (campuses) => {
  for (let i = 0; i < campuses.length; i++) {
    let currentCampus = campuses[i];
    let builtCampus = await Campus.build(currentCampus);
    builtCampus.teamId = i + 1;
    await builtCampus.save();
  }
};

const seedDatabase = async () => {
  try {
    // await populateTeamsTable(teams);
    await populateCampusTable(campuses);
    // await populateTrainersTable(trainers);
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDatabase();
