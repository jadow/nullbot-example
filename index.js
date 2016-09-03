'use strict';

var options = {
    name: process.env.BOTNAME,
    token: process.env.TOKEN,
    url: process.env.URL,
    port: process.env.PORT || 5000
};

var bot = require('nullbot')(options);

function sayHelloWorld(req, res, next) {
	res.sendMessage('I am Alive!');
    next();
}

bot.filter(/^hello$/).use(function (req, res, next) {
    res.sendMessage('world');
    next();
});

bot.filter(/^google$/).use(function (req, res, next) {
    res.sendMessage('https://www.google.com.sg/#q=something+for+me');
    next();
});

// Make sure to close unhandled requests.
bot.filter('finalHandler').use(function (req, res, next) {
    if (!res.finished) {
        res.writeHead(200);
        res.end();
    }
	res.sendMessage('I am Alive!');
    next();
});

bot.listen();
