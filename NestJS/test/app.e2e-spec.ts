import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
const chai = require('chai')
const expect = chai.expect

describe('Calculator', () => {
  describe('Addition', () => {
    it('1 + 1 should be equals to 2', () => {
      expect(1 + 1).to.equal(2)
    })
    // it('should sum two numbers', () => {
    //   expect(calculator.add(2, 2)).to.equal(4)
    //   expect(calculator.add(50, 39)).to.equal(89)
    //   expect(calculator.add(-31, 32)).to.equal(1)
    //   expect(calculator.add(10000, 89999)).to.equal(99999)
    // })
  })
})

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
