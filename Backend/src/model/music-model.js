const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({

     title:{
          type: String,
          required:true,
          trim: true
     },

     artist:{
          type:String,
          required:true,
          trim: true
     },

     uri:{
          type:String,
          required:true,
     },

     coverImage:{
          type:String,
          required:true
     },

     uploadedBy:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"user",
          required:true
     },

    
}, {timestamps:true})

const musicModel = mongoose.model('music', musicSchema);

module.exports = musicModel