const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 25} ,
    description: {type: String, maxLength: 250},
    image: {type: String, maxLength: 250},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},

  });

  module.exports = mongoose.model('Course', Course);

