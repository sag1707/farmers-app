const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const Crop = require('../models/Crop');
const cropRoutes = express.Router();

//Create crop
cropRoutes.post('/', expressAsyncHandler(async (req, res) => {
    const crop = await Crop.create(req.body);
    if (crop) {
        res.status(200);
        res.json(crop);
    }
    else {
        res.status(500);
        throw new Error('Crop addition failed');
    }
})
);

//fetch crops
cropRoutes.get('/', expressAsyncHandler(async (req, res) => {
    const crop = await Crop.find({});
    if (crop) {
        res.status(200);
        res.json(crop);
    }
    else {
        res.status(500);
        throw new Error('no such product found');
    }
})
);

//update crops entry
cropRoutes.put('/:id', authMiddleware, expressAsyncHandler(async (req, res) => {
    const crop = await Crop.findById(req.params.id);

    if (crop) {
        const updatedCrop = await Crop.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });
        res.status(200);
        res.json(updatedCrop);
    }
    else {
        res.status(500);
        throw new Error('update failed');
    }
}))
    ;

//delete crop
cropRoutes.delete('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const crop = await Crop.findByIdAndDelete(req.params.id);
        res.status(200);
        res.send(crop);

    } catch (error) {
        throw new Error('deletion failed');
        res.send(error);
    }
})
);



module.exports = cropRoutes;