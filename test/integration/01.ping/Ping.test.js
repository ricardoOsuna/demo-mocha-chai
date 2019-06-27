const path = '/';

describe('Ping API', () => {
  it('Check Ping', done => {
    chai
      .request(server)
      .get(path)
      .end((err, res) => {
        checkHeaders(res, 200);
        res.body.status.toLowerCase().should.have.to.include('alive!');
        done();
      });
  });
});
