let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../apigateway/app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('GET Notes for a particular UserID', () => {

  it('should return note for userId', () => {

    chai.request(server)
      .get('/notes/?userId=1')
      .then((resp) => {

        expect(resp).to.have.status(200);
        expect(resp.body).to.have.property('noteId');
        expect(resp.body).to.have.property('title');
        expect(resp.body).to.have.property('text');
        expect(resp.body).to.have.property('state');
        const noteId = resp.body.noteId;
        expect(noteId).to.equal(1);
        const userId = resp.body.userid;
        expect(userId).to.equal('1');
      });
  });

});

describe('GET User details for UserID', () => {

  it('should return user for userId', () => {
    chai.request(server)
      .get('/users/1')
      .then((resp) => {
        expect(resp).to.have.status(200);
        expect(resp.body).to.have.property('userId');
        expect(resp.body).to.have.property('username');
        expect(resp.body).to.have.property('password');
        const userID = resp.body.userId;
        expect(userID).to.equal('1');

      });
  });

});
