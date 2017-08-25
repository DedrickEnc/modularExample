var Account = require('./Account');

class AccountRouter {
    constructor (express) {
    this.router = express.Router();
    this.prepareRoute();
  }

  prepareRoute () {
    var account = new Account();

    this.router.get('/', function (req, res) {
      res.send(account.getAccounts());
    });
  }

  exposeRoute () {
    return this.router;    
  }
}

module.exports = AccountRouter;
