const mongoose = require("mongoose");
const  deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;
const findVisible = require('./findVisible');
const OrdersSchema = new Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  payment_method: {
    type: String,
    enum: ["Cash On Delivery", "Credit Card"],
    required: true,
  },
  isVisible : {type: Boolean, default: true},
  is_confirmed: {
    type: Boolean,
    default: false,
  },
  is_paid: {
    type: Boolean,
    default: false,
  },
  is_delivered: {
    type: Boolean,
    default: false,
  },
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
const populate =[{
    path : 'products',
    match : {isVisible : true}
},
{
    path : 'user',
    match : {isVisible : true}
}
];
OrdersSchema.pre('find', findVisible(populate));
OrdersSchema.pre('findOne', findVisible(populate));
OrdersSchema.pre('findOneAndUpdate', findVisible());
OrdersSchema.pre('count', findVisible());
OrdersSchema.pre('countDocuments', findVisible());

OrdersSchema.plugin(deepPopulate,{})
module.exports = mongoose.model("Orders", OrdersSchema);
