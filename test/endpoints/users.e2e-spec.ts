import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';

describe('Users controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it('/info (GET) all users', async () => {
    const res = await request(app.getHttpServer()).get('/user-management');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      {
        id: 'ee6f0ea7-0ee3-429f-b1af-2c099a7fb2cd',
        name: 'Vic 2',
        age: 30,
        role: 'student',
        active: true,
        created_at: '2022-08-12T13:00:16.775Z',
        updated_at: '2022-08-12T13:00:16.775Z',
      },
    ]);
  });
});
