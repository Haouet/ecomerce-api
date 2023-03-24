var express = require('express');
var router = express.Router();
var catCtl = require('../controllers/cat');
/**
 * @swagger
 *  components:
 *      schemas:
 *          Category:
 *              type: object
 *              required:
 *                  - name
 *                  - desc                   
 *              properties:
 *                  id:
 *                      type: string
 *                      description: auto generated unique id of the category
 *                  name:
 *                      type: string
 *                      description: the category name
 *                  desc:
 *                      type: string
 *                      description: the description category            
 *  
 *              example:
 *                  id: 636b93a181bc3489dafdeaa1
 *                  name: Fruit & Nut Gifts
 *                  desc: Fruit & Nut Gifts                                       
 *                    
 */
/**
 * @swagger
 *  tags:
 *      name: Category
 *      description: The category managing API
 */

/**
 * @swagger
 * /api/cat:
 *  get:
 *      summary: Get all categorys
 *      tags: [Category]
 *      responses:
 *          200:
 *              description: The list of the category
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          404:
 *              description: No category were found
 */
/* GET persons listing. */
router.get('/',catCtl.getAllCat);


/**
 * @swagger
 * /api/cat/{id}:
 *  get:
 *      summary: Get category by id
 *      tags: [Category]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: The category id
 *      responses:
 *          200:
 *              description: Category object by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          404:
 *              description: No category found
 */
router.get('/:id',catCtl.getByid);
/* GET category by id. */


/**
 * @swagger
 * /api/cat/name/{name}:
 *  get:
 *      summary: Get category by name
 *      tags: [Category]
 *      parameters:
 *        - in: path
 *          name: name
 *          required: true
 *          schema:
 *              type: string
 *          description: category Name
 *      responses:
 *          200:
 *              description: category list by  name
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          404:
 *              description: No category found
 */

router.get('/name/:name',catCtl.getByName);
// router.get('/:id',personCtl.getPerson);
// /* GET user listing. 
// :3000/persons/add */
// router.post('/add',catCtl.addCat);
router.post('/addall',catCtl.addManyCat);
// //Add All persons :3000/persons/addall
// router.post('/addall',personCtl.addAll);
// //Find One
// // router.get('/findone',personCtl.findOne);
// // /* Remove person listing. */
// router.delete('/:id',productCtl.deleteProduct);
// // /* Update person listing. */
// router.put('/:id',productCtl.updateProduct);
// router.delete('/removeMany/:name',personCtl.deleteManyPersons);

module.exports = router;
