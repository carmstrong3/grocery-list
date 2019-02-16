const List = require("./models").List;

module.exports = {

  // find all the lists in database; CRUD - Read
  getAllLists(callback){
    return List.findAll()
      .then((lists) => {
        callback(null, lists);
      })
      .catch((err) => {
        callback(err);
      })
  },
  // find a specific list in the database; CRUD - Read;
  getList(id, callback){
    return List.findByPk(id)
      .then((list) => {
        callback(null, list);
      })
      .catch((err) => {
        callback(err);
      })
  },

  // add a new list to the database; CRUD - Create;
  addList(newList, callback){
    return List.create({
      title: newList.title,
      description: newList.description
    })
      .then((list) => {
        callback(null, list);
      })
      .catch((err) => {
        callback(err);
      })
  },

  // delete a list from the database; CRUD - Delete;
  deleteList(id, callback){
    return List.destroy({
      where: {id}
    })
      .then((list) => {
        callback(null, list);
      })
      .catch((err) => {
        callback(err);
      })
  },

  // update a list in the database; CRUD - Update;
  updateList(id, updatedList, callback){
    return List.findByPk(id)
      .then((list) => {
        if(!list){
          return callback("List not found")
        }

        list.update(updatedList, {
          fields: Object.keys(updatedList)
        })
          .then(() => {
            callback(null, list);
          })
          .catch((err) => {
            callback(err);
          });
      });
  },

}
