var express = require('express');
var admin = express();

var UserRouter = require('./user/controllers/UserRouter');

class AdminApp {
    constructor () {
        this.userRouter = new UserRouter(express);
        this.configRoutes();        
    }

    configRoutes () {
        admin.use('/users', this.userRouter.exposeRoute());
    }

    publish() {
        return admin;
    }
}

module.exports = AdminApp;