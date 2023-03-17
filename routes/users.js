var express = require("express");
var router = express.Router();
var userCtrl = require("../controllers/users");
var auth = require("../middlewares/auth");
/**
 * @swagger
 *  components:
 *      schemas:
 *          Users:
 *              type: object
 *              required:
 *                  - username
 *                  - email
 *                  - password
 *                  - first_name
 *                  - last_name
 *                  - phone
 *                  - role
 *                  - address
 *              properties:
 *                  id:
 *                      type: string
 *                      description: auto generated unique id of the address
 *                  username:
 *                      type: string
 *                      description: the username
 *                  email:
 *                      type: string
 *                      description: the email user
 *                  password:
 *                      type: string
 *                      description: the password
 *                  first_name:
 *                      type: string
 *                      description: the first_name
 *                  last_name:
 *                      type: string
 *                      description: the last_name
 *                  phone:
 *                      type: string
 *                      description: the phone number
 *                  role: 
 *                     type: string
 *                     description: the role of the user  
 *  
 *              example:
 *                  id: 637b4ef3d720af0bb53cb696
 *                  username: taher
 *                  email: taherhaouet@gmail.com
 *                  password: $2a$10$brTNlJ5tKh1qdjR6abVWJeNC7/VORH.9.1vJBGusOYP5ESoKUJbIq
 *                  first_name: Taher                   
 *                  last_name: haouet
 *                  phone: 52928451
 *                  role: User
 *                  address: 
 *                        _id: 637b4ef3d720af0bb53cb694
 *                        country: tunisie
 *                        city: la marsa
 *                        road: habib bourghiba                       
 *                    
 */
/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: The users managing API
 */
/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Get all users
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: The list of the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 *          404:
 *              description: No users were found
 */

router.get("/",  userCtrl.getUsers); //ok
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Get user by id
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: The users id
 *      responses:
 *          200:
 *              description: users object by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 *          404:
 *              description: No user found
 */

router.get("/:id", auth, userCtrl.getUserId); //ok
/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Add a new user
 *    tags: [Users]
 *    parameters:
 *      - username: Username
 *        description: username of the new user
 *        in: body
 *        required: true
 *        type: string
 *        example: taher
 *      - name: "email"
 *        description: email of the new user
 *        in: body
 *        required: true
 *        type: string
 *        example: taherhaouet@gmail.com
 *      - name: password
 *        description: password of the new user
 *        in: body
 *        required: true
 *        type: string
 *        example: $2a$10$brTNlJ5tKh1qdjR6abVWJeNC7/VORH.9.1vJBGusOYP5ESoKUJbIq
 *    responses:
 *      201:
 *        description: New user created
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              description: New user created
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
router.post("/signup", userCtrl.addUser); // ok
router.put("/:id", auth,userCtrl.updateUserId);//ok
router.delete("/:id", auth, userCtrl.deleteUserId);//ok
/// connection 
router.post("/login", userCtrl.login);
router.post("/token", userCtrl.token);
router.post("/verify/account", auth, userCtrl.requestVerify);
router.get("/verify/account", userCtrl.verifyUser);
router.post("/reset/password", userCtrl.forgetPass);
router.put("/reset/password", userCtrl.resetPass);

module.exports = router;
