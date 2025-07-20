const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({

    article_title:{
        type:String,
        require:true
    },
      article_description:{
        type:String,
        require:true
    },
      article_tag:{
        type:String,
        require:true
    },
  article_image:{
        type:String,
        require:true
    },
    articleuser_id: {
        type: String,
        required: false
    }
},{timestamps:true})

module.exports = mongoose.model('reduxarticles',articleSchema)