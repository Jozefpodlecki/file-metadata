import * as express from 'express';
import * as cors from 'cors';
import * as moment from 'moment';
import * as pretty from 'express-prettify'
import * as bodyParser from 'body-parser';
import pug from 'pug';
import routes from './routes';
const app = express();
const port = process.env.PORT as any;

const corsOptions: any = {
  optionSuccessStatus: 200
};

app.use(bodyParser.urlencoded({'extended': false}));
app.use(pretty({ query: 'pretty' }));
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));

routes(app);

const listener = app.listen(port, () => {
  
  console.log('Listening on port ' + port);
});