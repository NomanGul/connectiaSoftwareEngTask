const { expect } = require("chai");
const request = require("./init.spec.js");

it("GET /api/unknown should return 404", function (done) {
  request
    .get("/api/unknown")
    .expect((res) => {
      expect(res.status).to.equal(404);
      expect(res.body.error).to.equal("resource not found");
    })
    .end(done);
});

it("GET /api/health should return 200", function (done) {
  request
    .get("/api/health")
    .expect((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal("ok");
    })
    .end(done);
});

it("GET /api/fib/:number should return 200", function (done) {
  request
    .get("/api/fib/11")
    .expect((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(5);
      expect(res.body).to.deep.equal([
        [3, 8],
        [3, 3, 5],
        [2, 2, 2, 5],
        [2, 3, 3, 3],
        [2, 2, 2, 2, 3],
      ]);
    })
    .end(done);
});
