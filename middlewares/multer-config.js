const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =`${new Date()
      .toISOString()
      .replace(/\.|:|-|T/g, "")
      .slice(0, -1)}-${file.originalname.replace(/\s/g, "")}`
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
module.exports = multer({
  storage: storage,
 
  limits: { fileSize: 10000000 },
});