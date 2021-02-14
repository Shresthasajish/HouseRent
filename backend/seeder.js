import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import properties from './data/properties.js';
import User from './models/userModel.js';
import Property from './models/propertyModel.js';
import Book from './models/bookModel.js';
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Book.deleteMany()
        await Property.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        
        const adminUser = createdUsers[0]._id

        const sampleProperties = properties.map(property => {
            return{...property, user: adminUser}
        })

        await Property.insertMany(sampleProperties)

        console.log('Data Imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Book.deleteMany()
        await Property.deleteMany()
        await User.deleteMany()

        
        console.log('Data Destryoed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}
else{
    importData()
}