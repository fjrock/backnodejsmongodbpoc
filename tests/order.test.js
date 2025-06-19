const request = require('supertest');
const app = require('../src/app');

describe('Pedidos API', () => {
  it('debería obtener 200 en GET /api/orders', async () => {
    const res = await request(app).get('/api/orders');
    expect(res.statusCode).toBe(200);
  });
}); 