'use strict';

var options = {
    name: process.env.BOTNAME,
    token: process.env.TOKEN,
    url: process.env.URL,
    port: process.env.PORT || 5000
};

var bot = require('nullbot')(options);

// Filter for text that matches 'hello' and respond with 'world'
bot.filter(/^hello$/).use(function (req, res, next) {
    res.sendMessage('world');
    next();
});

// This filter watches for a single word text message that reads 'cat'
// and responds by sending a picture of a cat.
bot.filter({name: 'cat', regex: /^cat$/}).use(function (req, res, next) {
    res.sendPhoto('./cat.jpg', next);
});

// Make sure to close unhandled requests.
bot.filter('finalHandler').use(function (req, res, next) {
    if (!res.finished) {
        res.writeHead(200);
        res.end();
    }
    next();
});

bot.listen();
