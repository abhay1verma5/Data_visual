const mongoose = require('mongoose');

// Define the schema for the Data model
const dataSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: Date,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

// Create the Data model using the schema
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
