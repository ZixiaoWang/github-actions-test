import express from 'express';

const whitelist: string[] = [
    '/login'
];

export const verificationMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const request: any = req;

    if (request.method.toLowerCase() === 'post' && request.path === '/login') {
        res.cookie('USER', 'user', { signed: true });
        res.redirect('/Index');
        next();
    } else {
        if (request.signedCookies['USER'] === 'user') {
            next();
        } else {
            res.send(`
                <style>
                    .container {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    button {
                        padding: 20px;
                        font-size: 22px;
                    }
                </style>
                <div class="container">
                    <button onclick="login()">Click me</button>
                </div>
                <script>
                    function login() {
                        fetch('/login', { method: "POST" })
                            .then(() => {
                                location.href = "/Index"
                            })
                    }
                </script>
            `);
        }
    }
}