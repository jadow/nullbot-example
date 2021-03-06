'use strict';

var options = {
    name: process.env.BOTNAME,
    token: process.env.TOKEN,
    url: process.env.URL,
    port: process.env.PORT || 5000
};

var bot = require('nullbot')(options);

function LastMessage(req, res, next) {
	res.sendMessage('I dont understand.');
    next();
}

function World(req, res, next) {
    res.sendMessage('world');
    next();
}

function Google(req, res, next) {
	var link = req.message.text;
	link = link.replace("google ", "https://www.google.com.sg/search?q=");
	link = link.replace(/ /g, "+");
	res.sendMessage(link);
    next();
}

function Sticker(req, res, next) {
	res.sendMessage(req.message.text);
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
bot.filter(/^google/).use(Google);
bot.filter({subtype: 'sticker'}).use(Sticker);
bot.filter('finalHandler').use(LastMessage).use(Cleanup);
bot.listen();
