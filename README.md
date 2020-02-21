## POC project
An experimental project with some **interesting** stuff

### Interesting stuff include
- Dependency Injection implementation in ReactJS
- Put Frontend & Backend in the same repo
- Server side rendering (SSR)
- Codebase reuse in SSR & CSR
- Protected routes
- Swagger Doc generation
- Simple Github Actions implementation
- Simple Unit test design (Jest based)
- Simple Integration test design (Jest based)
- Implemented Service Workers (Test site now is intallable🌼🌼)

### Quick start
```
    git clone <this-repo>
    yarn install
    yarn start
```

### Server
```
    express
        .use(LoggerMiddleware)                          // to log every request in console
        .use(AuthMiddleware)                            // check if user has logged in
        .use('/api/v1', APIMiddleware)                  // expose RESTFul APIs to Client side
        .use('/csr', express.static(FRONTEND_DIR))      // "/csr" returns CSR code
        .use(NextMiddleware)                            // other routes return SSR code
        .listen(8080)
```

### Frontend routes (CSR)
```
http://localhost:8080/csr/#
    /Home
    /Posts
    /Posts/{postId}
    /Comments/{commentId}
    /Users/{UserId}
```

### TODO
- ~~Service workers inplementation~~
- ~~Integration test cases design~~