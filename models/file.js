const mongoose = require('mongoose');
const  deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible');
const FilesSchema = mongoose.Schema(
    {

    name: {
        type: String
    },
    type: {
        type: String
    },
    fileUrl: {
        type: String
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
      },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },      
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
    deleted_at: {
        type: Date
    }
  

});
const populate =[{
    path : 'product_id',
    match : {isVisible : true}
},
{
    path : 'category_id',
    match : {isVisible : true}
},
{
    path : 'user_id',
    match : {isVisible : true}
}
];
FilesSchema.pre('find', findVisible(populate));
FilesSchema.pre('findOne', findVisible(populate));
FilesSchema.pre('findOneAndUpdate', findVisible());
FilesSchema.pre('count', findVisible());
FilesSchema.pre('countDocuments', findVisible());

FilesSchema.plugin(deepPopulate,{})
const File = mongoose.model('file', FilesSchema);
 module.exports = File;
