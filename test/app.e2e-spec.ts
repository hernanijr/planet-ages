import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/calculate-age (GET)', () => {
    return request(app.getHttpServer())
      .get('/calculate-age')
      .query({ seconds: 2500000000, type: 'Venus' })
      .expect(200)
      .expect('48.74 Venus-years-old');
  });

  it('/calculate-age (GET) with error', () => {
    return request(app.getHttpServer())
      .get('/calculate-age')
      .query({ seconds: 2500000000, type: 'InvalidPlanet' })
      .expect(400)
      .expect({
        message: 'Invalid input',
        error: 'Please provide valid seconds and planet type.',
        statusCode: 400,
      });
  });
});
