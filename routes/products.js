var express = require('express');
var router = express.Router();
var productCtl = require('../controllers/products');
var upload = require("../middlewares/multer-config");
/**
 * @swagger
 *  components:
 *      schemas:
 *          Product
 *              type: object
 *              required:
 *                  - title 
 *                  - description
 *                  - price 
 *                  - stock
 *                  - category
 *                  - thumbnail
 *                  - images                                  
 *              properties:
 *                  id:
 *                      type: string
 *                      description: auto generated unique id of the product
 *                  title:
 *                      type: string
 *                      description: the product name
 *                  description:
 *                      type: string
 *                      description: the description product        
 *                  price :
 *                      type: Number
 *                      description: the price product    
 *                  stock :
 *                      type: Number
 *                      description: the quantity product   
 *                  category:
 *                      type: object
 *                      description: the category product  
 *                  thumbnail:
 *                      type: string
 *                      description: the category product 
 *                  images:
 *                      type: array
 *                      description: the category product 
 *  
 *              example:
 *                  id: 638769497ece3db6ae8280c7
 *                  title: produuuuu
 *                  description: prod2005
 *                  price: 200
 *                  stock": 5
 *                  category: 
 *                      _id: 636b93a181bc3489dafdeaa0
 *                      name: Vegetables
 *                      desc: Vegetables
 *                  images: 
 *                      _id: 638769497ece3db6ae8280c4
 *                      name: pd-4.jpg
 *                      type: image/jpeg
 *                      fileUrl: http://localhost:5000/files/images-20221130143137567-pd-4.jpg
 *                                                   
 *                    
 */
/**
 *  @swagger
 *   tags:
 *       name: Product
 *       description: The products managing API
 */
/**
 * @swagger
 * /api/product:
 *  get:
 *      summary: Get all products
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: The list of the product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: No products were found
 */

router.get('/',productCtl.getAllProducts);
/**
 * @swagger
 * /api/product/{id}:
  *  get:
 *      summary: Get product by id
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: The product id
 *      responses:
 *          200:
 *              description: product object by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: No product found
 */
router.get('/:id',productCtl.getProductId); 
router.get('/paginate',productCtl.getAllProductsPagination);
/* Get comment  member listing. */
router.get('/cat/:id', productCtl.getProductByCat);
router.get('/:title', productCtl.getProductByTitle);
router.get('/category/:name', productCtl.getProductByCatName);
/**
 * @swagger
 * /api/product/add:
 *  post:
 *    summary: Add a new product
 *    tags: [Product]
 *    parameters:
 *      - title: title
 *        description: title of the new product
 *        in: body
 *        required: true
 *        type: string
 *        example: product 2023
 *      - description: description
 *        description: description of the new product
 *        in: body
 *        required: true
 *        type: string
 *        example: description of new product 2023
 *      - price: price
 *        description: price of the new product
 *        in: body
 *        required: true
 *        type: number
 *        example: price product 2023
 *      - stock: stock 
 *        description: stock of the new product
 *        in: body
 *        required: true
 *        type: number
 *        example: stock  product 2023
 *      - category: category
 *        description: category of the new product
 *        in: body
 *        required: true
 *        type: string
 *        example: Fruit & Nut Gifts
 *      - thumbnail: thumbnail 
 *        description: thumbnail of the new product
 *        in: body
 *        required: true
 *        type: string
 *        example: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png
 *      - images: images
 *        description: images of the new product
 *        in: body
 *        required: true
 *        type: string
 *        example: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png"]
 *    responses:
 *      201:
 *        description: New product created
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              description: New product created
 *              type: boolean
 *              example: true
 *      400:
 *        description: Please check provided values
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              description: Please check provided values
 *              type: boolean
 *              example: false
 */

// :5000/product/add */
 router.post('/add',upload.array("images"),productCtl.addproduct);
// //Add All products :5000/product/addall
router.post('/addall',productCtl.addManyProducts); 
// //Find One
// // router.get('/findone',personCtl.findOne);
// // /* Remove person listing. */
// router.delete('/:id',productCtl.deleteProduct);
// // /* Update person listing. */
 router.put('/:id',productCtl.updateProduct);
// router.delete('/removeMany/:name',personCtl.deleteManyPersons);
router.delete("/", productCtl.isVisibleProduct); 
/* Delete Product by id listing. */
router.delete("/:id", productCtl.deleteProduct); 
module.exports = router;
