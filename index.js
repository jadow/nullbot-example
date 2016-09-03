'use strict';

var options = {
    name: process.env.BOTNAME,
    token: process.env.TOKEN,
    url: process.env.URL,
    port: process.env.PORT || 5000
};

var bot = require('nullbot')(options);

function middlewareOne(req, res, next) {
    console.log('I am middleware one');
    next();
}

function middlewareTwo(req, res, next) {
    console.log('I am middleware two');
    next();
}

bot.use(middlewareOne).use(middlewareTwo);

// Make sure to close unhandled requests.
bot.filter('finalHandler').use(function (req, res, next) {
    if (!res.finished) {
        res.writeHead(200);
        res.end();
    }
	bot.use(sayHelloWorld);
    next();
});

bot.listen();
