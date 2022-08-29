const mongoose =require("mongoose")
const DB='mongodb+srv://Nishi:12345.nishi@cluster0.nujgyo5.mongodb.net/?retryWrites=true&w=majority'

const conncetionBD =async()=>{
    try {
        const conn = await mongoose.connect(DB);
        console.log(`mongodb connceted${conn}`)
    } 
    catch (error) {

        console.error(`Error:${error} `)
        process.exit() 
    }
}

module.exports = conncetionBD ;