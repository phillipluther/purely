import server from '../../server';
import request from 'supertest';

afterEach((done) => {
  server.close();
  done();
});

describe('routes/posts', () => {
  test('GET returns a list of posts', async () => {
  });

  test('POST is not allowed', async () => {
    const response = await request(server).post('/posts');
    expect(response.status).toEqual(405);
  });

  test('PUT is not allowed', async () => {
    const response = await request(server).post('/posts');
    expect(response.status).toEqual(405);
  });

  test('DELETE is not allowed', async () => {
    const response = await request(server).post('/posts');
    expect(response.status).toEqual(405);
  });
});
