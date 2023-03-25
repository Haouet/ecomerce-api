var express = require('express');
var router = express.Router();
var productCtl = require('../controllers/products');
var upload = require("../middlewares/multer-config");

/**
 * @swagger
 *  components:
 *      schemas:
 *          Products
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
 *                      type: string
 *                      description: the price product    
 *                  stock :
 *                      type: string
 *                      description: the quantity product   
 *                  category:
 *                      type: string
 *                      description: the category product  
 *                  thumbnail:
 *                      type: string
 *                      description: the category product 
 *                  images:
 *                      type: string
 *                      description: the category product 
 *  
 *              example:
 *                  id: 638769497ece3db6ae8280c7
 *                  title: produuuuu
 *                  description: prod2005
 *                  price: 200
 *                  stock": 5
 *                  category: 
 *                      id: 636b93a181bc3489dafdeaa0
 *                      name: Vegetables
 *                      desc: Vegetables
 *                  images: 
 *                      id: 638769497ece3db6ae8280c4
 *                      name: pd-4.jpg
 *                      type: image/jpeg
 *                      fileUrl: http://localhost:5000/files/images-20221130143137567-pd-4.jpg
 *                                                   
 *                    
 */
/**
 *  @swagger
 *  tags:
 *      name: Products
 *      description: The products managing API
 */

/**
 * @swagger
 * /api/product:
 *  get:
 *      summary: Get all products
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: The list of the product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Products'
 *          404:
 *              description: No products were found
 */

router.get('/',productCtl.getAllProducts);

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
 *    tags: [Products]
 *    parameters:
 *      - title: Country
 *        description: Country of the new address
 *        in: body
 *        required: true
 *        type: string
 *        example: Tunisia
 *      - name: "City"
 *        description: City of the new address
 *        in: body
 *        required: true
 *        type: string
 *        example: Sfax
 *      - name: Road
 *        description: Road of the new address
 *        in: body
 *        required: true
 *        type: string
 *        example: Centre Ville
 *    responses:
 *      201:
 *        description: New address created
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              description: New address created
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
