import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../index';

chai.use(chaiHTTP);
describe('Test get all entries', () => {
 it('Checking the status of the api', done => {
   chai
     .request(app)
     .get('/api/v1/entries')
     .end((err, res) => {
       expect(res.status).to.equals(200);
       expect(res.body).to.be.an('object');
       done();
     });
 });
});
// get by id
describe('testing entries by id',() =>{
  it('checking entries ', done =>{
    chai
    .request(app)
    .get('/api/v1/entries/:id')
    .end((err,res) =>{
      expect(res.status).to.equals(404);
      expect(res.body).to.be.an('object');
      done();
    })
  });
});
// post entries
describe('testing posted entreis',() =>{
  it('checking posted entries ', done =>{
    chai
    .request(app)
    .post('/api/v1/entries')
    .end((err,res) =>{
      expect(res.status).to.equals(201);
      expect(res.body).to.be.an('object');
      done();
    })
  });
});
// update the entries
describe('testing updated entreis',() =>{
  it('checking updated entries ', done =>{
    chai
    .request(app)
    .put('/api/v1/entries')
    .end((err,res) =>{
      expect(res.status).to.equals(404);
     
      expect(res.body).to.be.an('object');
      done();
    })
  });
});