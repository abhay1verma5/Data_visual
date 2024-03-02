const Data = require('../models/Data');

exports.adddata = async (data) => {
  try {
    // Check if each data entry already exists in the database
    const newData = [];
    for (const entry of data) {
      const existingEntry = await Data.findOne(entry);
      if (!existingEntry) {
        newData.push(entry);
      }
       console.log(entry)
    }

    // If there are new entries to save, insert them into the database
    if (newData.length > 0) {
      const savedData = await Data.insertMany(newData);
      console.log('New data saved successfully:');
      return savedData;
    } else {
      console.log('No new data to save.');
      return [];
    }
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};
