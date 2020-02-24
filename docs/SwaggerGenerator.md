# Swagger Document Generator

### DOCs to refer
- [Swagger: Time to document that Express API you built!](https://levelup.gitconnected.com/swagger-time-to-document-that-express-api-you-built-9b8faaeae563)
- [Swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md)

-----
## Key points
- `swagger-jsdoc` is to read your comments and convert them into a valid swagger JSON format
- `swagger-ui-express` is to generate the UI based on the specification. 
- Use both libraries together.

-----
## Example 
**How to config**  
```javascript
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// To have a router, or app
const router = express.Router();

// To generate spec which swagger ui express needs
const swaggerUIJSONObject = swaggerJSDoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your title here',
            version: 'Version here',
            description: 'Description here'
        }
    },
    apis: [
        './path/to/the/router/files.js'
    ]
});

// Define the routes where Swagger DOC will be generated
router.get('/doc', swaggerUI.serve, swagger.setup(swaggerUIJSONObject, { explorer: true }));
```

<br />
<br />
<br />

**How to write comments**
```javascript
/**
 * @swagger
 * definitions:
 *  User:
 *      type: object
 *      properties:
 *          uuid:
 *              type: string
 *          name:
 *              type: string
 *          age:
 *              type: number
 * */

/**
 * @swagger
 * path:
 *  /users:
 *      get:
 *          tags: [USERS]
 *          description: Get all the users
 *          produces:
 *              - application/json
 *          responses:
 *              200:
 *                  description: Get all the users
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/User'
 *      
 * */
router.get('/users', (request, response, next) => {
    // some logics here
})
```