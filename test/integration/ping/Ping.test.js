const path = '/';

describe('Ping', () => {
  it('Check Ping', done => {
    chai
      .request(server)
      .get(path)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          checkHeaders(res, 200);
          res.body.status.toLowerCase().should.have.to.include('alive!');
        }
        done();
      });
  });
});
