import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import ping from './routes/ping';
import posts from './routes/posts';
import { config } from './config';

const app = new Koa();
const PORT = config.port;

app.use(bodyParser());
app.use(logger());
// routes
app.use(ping.routes());
app.use(posts.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
  })
  .on('error', (err) => {
    console.error(err);
  });

export default server;
