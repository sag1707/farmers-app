const mongoose = require('mongoose');
const CropSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    productname: {
        type: String,
        required: true,
    },
    farmersname: {
        type: String,
        required: true,
    },
    farmersnumber: {
        type: String,
        required: true,
    },
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
},
    {
        timestamps: true,
    }
);

const Crop = mongoose.model('Crop', CropSchema);
module.exports = Crop;