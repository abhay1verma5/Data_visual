const Data = require('../models/Data');

exports.getData = async (req, res) => {
    try {
       

        const data = await Data.find({}).limit(50);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

