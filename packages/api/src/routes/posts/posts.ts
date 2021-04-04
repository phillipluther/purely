import Router from 'koa-router';

const router = new Router();

router.get('/posts', async (ctx) => {
  try {
    ctx.body = {
      status: 'success',
    };
  } catch (err) {
    console.error(err);
  }
});

router.post('/posts', async (ctx) => {
  try {
    ctx.response.status = 405;
  } catch (err) {
    console.error(err);
  }
});

router.put('/posts', async (ctx) => {
  try {
    ctx.response.status = 405;
  } catch (err) {
    console.error(err);
  }
});

router.delete('/posts', async (ctx) => {
  try {
    ctx.response.status = 405;
  } catch (err) {
    console.error(err);
  }
});

export default router;
