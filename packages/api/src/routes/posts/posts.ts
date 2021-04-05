import Router from 'koa-router';

const router = new Router();

router.all('/posts', async (ctx) => {
  try {
    ctx.response.status = 405;
  } catch (err) {
    console.error(err);
  }
});

router.get('/posts', async (ctx) => {
  try {
    ctx.body = {
      status: 'success',
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;
