const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, maxLength: 250} ,
    description: {type: String, maxLength: 250},
    image: {type: String, maxLength: 250},
    videoid: {type: String, maxLength: 250},
    level: {type: String, maxLength: 250},
    slug: { type: String, slug: 'name', unique: true }
  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Course', Course);

