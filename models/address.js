const mongoose = require("mongoose");
const  deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;
const findVisible = require('./findVisible');
const AddressSchema = new Schema({
  country: {
    type: String,
    required: [true, "country field is required"],
  },
  city: {
    type: String,
    required: [true, "city field is required"],
  },
  road: {
    type: String,
    required: [true, "road field is required"],
  },
  isVisible : {type: Boolean, default: true},
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});
const populate =[];
module.exports = mongoose.model("Address", AddressSchema);
