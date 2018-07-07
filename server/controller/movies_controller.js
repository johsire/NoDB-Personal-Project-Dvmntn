let movies = [];
let id = 0;

module.exports = {
  read: ( req, res ) => {
    res.status(200).send( movies );
  }
}
