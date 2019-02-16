const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/lists/";
const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;

describe("routes : lists", () => {
  // create fake data before running further tests in suite
  beforeEach((done) => {
    this.list;
    sequelize.sync({force: true}).then((res) => {
      List.create({
        title: "Thanksgiving Dinner Shopping List",
        description: "List for Thanksgiving party"
      })
        .then((list) => {
          this.list = list;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    })
  })
  // Test suite for the http GET of ../lists.
  describe("GET /lists", () => {
    // It should get the page with status code of 200 and all the lists
    it("should return a status code 200 and all lists", (done) => {
      request(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Lists");
        expect(body).toContain("Thanksgiving Dinner Shopping List")
        done();
      });
    });
  });
});
