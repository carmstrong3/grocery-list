const listQueries = require("../db/queries.lists.js");

module.exports = {
  index(req, res, next){
    // use getAllLists method to bring all the lists in database
    listQueries.getAllLists((err, lists) => {
      if(err){ // if error, redirect to homepage
        res.redirect(500, "static/index");
      } else { // render the list of lists
        res.send(lists);
      }
    })
  },

  listById(req, res, next){
    res.send("This is list number:" + req.params.id)
  }
}
