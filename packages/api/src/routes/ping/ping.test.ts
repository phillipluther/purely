import server from '../../server';
import request from 'supertest';

afterEach((done) => {
  server.close();
  done();
});

describe('routes/ping', () => {
  test('pongs when pinged', async () => {
    const response = await request(server).get('/ping');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data).toEqual('pong');
  });
});
