const path = '/users';
const tests = require('./providers/create');

/* eslint-disable */
describe('User', () => {
  describe('Creating', () => {
    tests.data.forEach(test => {
      it(test.title, done => {
        chai
        .request(server)
        .post(path)
        .send(test.data)
        .end((err, res) => {
          checkHeaders(res, test.expect.status);
          res.body.code.should.be.equal(test.expect.code);
          res.body.message.should.be.equal(test.expect.message);
          done();
        });
      });
    });
  });
});
/* eslint-enable */
