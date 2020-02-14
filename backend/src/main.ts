import express from 'express';
import path from 'path';
import colors from 'colors';
import bodyParser from 'body-parser';
import { AuthRouter } from './routers';
import { LoggerMiddleware } from './middlewares';

const app = express();
const port: number = Number(process.env.PORT || 8080);

app.use(bodyParser());
app.use(LoggerMiddleware);
app.use('/ui', express.static(path.resolve(__dirname, '../../frontend/dist')));
app.use('/api/v1', AuthRouter);
app.use('/', (req: express.Request, res: express.Response) => res.redirect('/ui'))

app.listen(port, () => {
    console.log('\n');
    console.log(colors.magenta('======================================='));
    console.log(`  ${ colors.green('TESTING SERVER') }`);
    console.log(`  Server is listening to ${ colors.green(port.toString()) }`);
    console.log(colors.magenta('======================================='));
})