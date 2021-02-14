import express from 'express';
import asyncHandler from 'express-async-handler';
import Property from '../models/propertyModel.js';

const router = express.Router();



router.get('/', asyncHandler( async (req,res) => {
    const properties = await Property.find({})

    res.json(properties)
}))

router.get('/:id', asyncHandler (async(req,res) => {
    const property = await Property.findById(req.params.id)

    if(property){
        res.json(property)
    }else{
        res.status(404).json({message: 'Property not found'})
    }
   
}))

export default router
