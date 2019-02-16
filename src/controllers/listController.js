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
  /* Get a list by it's primary key id. This will be used in the api to serve
   individual lists that a user has permissions to see eventually */
  listById(req, res, next){
    // Call getList with the id pulled from the GET request.
    listQueries.getList(req.params.id, (err, list) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.send(list)
      }
    })
  },

  // create a new list and redirect to it's page
  create(req, res, next){
    let newList = {
      title: req.body.title,
      description: req.body.description
    };
    listQueries.addList(newList, (err, list) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.redirect(303, `/api/lists/${list.id}`)
      }
    });
  },

  destroy(req, res, next){
    listQueries.deleteList(req.params.id, (err, list) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.redirect(303, "/api/lists")
      }
    })
  },

  update(req, res, next){
    listQueries.updateList(req.params.id, req.body, (err, list) => {
      if(err || list == null){
        res.redirect(404, `/api/lists/`)
      } else {
        res.redirect(`/api/lists/${list.id}`)
      }
    })
  }

}
