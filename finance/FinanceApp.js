var express = require('express');
var finance = express();

var AccountRouter = require('./account/controllers/AccountRouter');

class FinanceApp {
    constructor () {
        this.AccountRouter = new AccountRouter(express);
        this.configRoutes();        
    }

    configRoutes () {
        finance.use('/accounts', this.AccountRouter.exposeRoute());
    }

    publish() {
        return finance;
    }
}

module.exports = FinanceApp;