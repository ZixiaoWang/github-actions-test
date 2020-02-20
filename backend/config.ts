import path from 'path';
import SwaggerJSDoc from 'swagger-jsdoc';
import SwaggerUI from 'swagger-ui-express';

// Cookie Session
export const sessionOptions: any = {
    name: 'Session',
    secret: 'SECRET',
    cookie: {
        maxAge: Date.now() + 1000*60*60*24*7,
        sameSite: true,
        httpOnly: true,
        signed: true,
        secret: 'SECRET'
    }
};

export const nextOptions: any = {
    dev: true,
    dir: path.resolve(__dirname, '../../frontend/src')
}

export const swaggerUIJsonObject: SwaggerUI.JsonObject = SwaggerJSDoc({
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Github Action Test',
            version: '1.0.0',
            description: 'An simple website for some interesting stuff'
        }
    },
    apis: [
        path.resolve(__dirname, './routers/index.js'),
        path.resolve(__dirname, './routers/posts.router.js'),
        path.resolve(__dirname, './routers/comments.router.js'),
        path.resolve(__dirname, './routers/users.router.js'),
    ]
});

export const interestingBanner: string = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  _oo0oo_
                 o8888888o
                 88" . "88
                 (| -_- |)
                 0\\  =  /0
               ___/'---'\\___
             .' \\\\|     |// '.
            / \\\\|||  :  |||// \\ 
           / _||||| -:- |||||- \\ 
          |   | \\\\\\  -  /// |   |
          | \\_|  ''\\---/''  |_/ |
          \\  .-\\__  '-'  ___/-. /
        ___'. .'  /--.--\\  '. .'___
     ."" '<  '.___\\_<|>_/___.' >' "".
    | | :  '- \\'.;'\\ _ /';.'/ - ' : | |
    \\  \\ '_.   \\_ __\\ /__ _/   .-' /  /
====='-.____'.___ \\_____/___.-'___.-'=====
                  '=---='
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
               NO BUG FOREVER
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;