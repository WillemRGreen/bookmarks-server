const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../src/app')

describe('get request should return a list of all bookmarks', () => {
  it('should return bookmarks from a get request', () => {
    return supertest(app)
      .get('/bookmarks')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array')
        expect(res.body).to.have.lengthOf.at.least(1);
      })
  })
})