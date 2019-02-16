module.exports = {
  index(req, res, next){
    res.send("items will be here soon")
  },

  listById(req, res, next){
    res.send("This is list number:" + req.params.id)
  }
}
