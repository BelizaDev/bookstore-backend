const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        ISBN:{
            type:String
        },
        pages:{
            type:Number
        },
        price:{
            type:Number,
            required:true
        },
        description:{
            type:String
        },
        imageUrl:{
            type:String
        }
    },
   {
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
   }
)

module.exports = mongoose.model("book", BookSchema)