const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/lists/";

describe("routes : lists", () => {
  // Test suite for the http GET of ../lists.
  describe("GET /lists", () => {
    // It should get the page with status code of 200
    it("should return a status code 200", (done) => {
      request(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});
