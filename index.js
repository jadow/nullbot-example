'use strict';

var options = {
    name: process.env.BOTNAME,
    token: process.env.TOKEN,
    url: process.env.URL,
    port: process.env.PORT || 5000
};

var bot = require('nullbot')(options);

function lastMessage(req, res, next) {
	res.sendMessage('I dont understand.');
    next();
}

function World(req, res, next) {
    res.sendMessage('world');
    next();
}

function Cleanup(req, res, next) {
	if (!res.finished) {
        res.writeHead(200);
        res.end();
    }
    next();
}

bot.filter(/^hello$/).use(World);
bot.filter('finalHandler').use(lastMessage).use(Cleanup);
bot.listen();
