/**
 * @swagger
 * 
 * definitions:
 *  Post:
 *      type: object
 *      properties:
 *          uuid:
 *              type: string
 *          id:
 *              type: string
 *          userId:
 *              type: string
 *          title:
 *              type: string
 *          body:
 *              type: string
 *  Comment:
 *      type: object
 *      properties:
 *          uuid:
 *              type: string
 *          id:
 *              type: string
 *          postId:
 *              type: string
 *          name:
 *              type: string
 *          body:
 *              type: string
 *          email:
 *              type: string
 *  User:
 *      type: object
 *      properties:
 *          uuid:
 *              type: string
 *          id:
 *              type: string
 *          avatar:
 *              type: string
 *          name:
 *              type: string
 *          username:
 *              type: string
 *          email:
 *              type: string
 *          address:
 *              type: object
 *              properties:
 *                  street:
 *                      type: string
 *                  suite:
 *                      type: string
 *                  city:
 *                      type: string
 *                  zipcode:
 *                      type: string
 *          geo:
 *              type: object
 *              properties:
 *                  lat:
 *                      type: string
 *                  lng:
 *                      type: string
 *          phone:
 *              type: string
 *          website:
 *              type: string
 *          company:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  catchPhrase:
 *                      type: string
 *                  bs:
 *                      type: string
 *          
 */

export * from './auth.router';