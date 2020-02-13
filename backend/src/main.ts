import express from 'express';
import path from 'path';
import colors from 'colors';
import figlet from 'figlet';
import bodyParser from 'body-parser';
import { AuthRouter } from './routers';

const app = express();
const port: number = Number(process.env.PORT || 8080);

app.use(bodyParser());
app.use('/ui', express.static(path.resolve(__dirname, '../../frontend/dist')));
app.use('/api/v1', AuthRouter);
app.use('/', (req: express.Request, res: express.Response) => res.redirect('/ui'))

app.listen(port, () => {
    figlet(
        'TESTING SERVER', 
        'Basic',
        (err, result) => {
            console.log('\n');
            console.log(colors.green(result || ''));
            console.log(colors.magenta('======================================='));
            console.log(`  Server is listening to ${ colors.green(port.toString()) }`);
            console.log(colors.magenta('======================================='));
        })
})