var User = require('./User');

class UserRouter {
    constructor (express) {
    this.router = express.Router();
    this.prepareRoute();
  }

  prepareRoute () {
    var user = new User();

    this.router.get('/', function (req, res) {
      res.send(user.getUsers());
    });
  }

  exposeRoute () {
    return this.router;    
  }
}

module.exports = UserRouter;
