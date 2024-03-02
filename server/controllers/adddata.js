const Data = require('../models/Data');

exports.adddata = async (data) => {
  try {
    // Filter out entries with undefined or null _id properties
    const validData = data.filter(entry => entry && entry._id);

    // Extract unique identifiers (_id) from the valid data
    const uniqueIdentifiers = validData.map(entry => entry._id);

    // Find existing entries in the database that match any of the unique identifiers
    const existingEntries = await Data.find({ _id: { $in: uniqueIdentifiers } });

    // Convert existingEntries to a Set for faster lookup
    const existingEntriesSet = new Set(existingEntries.map(entry => entry._id.toString()));

    // Filter out new data entries that already exist in the database
    const newData = validData.filter(entry => !existingEntriesSet.has(entry._id.toString()));

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
