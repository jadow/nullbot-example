# nullbot-example
This repository is a working heroku app that can be interfaced with [here](https://telegram.me/nullbotexamplebot). It only responds to ```hello``` and ```cat```. It's meant to be the fastest way to bootstrap the [nullbot](https://github.com/baetheus/nullbot) Telegram bot framework, or really any bot.

## Getting started
This process shouldn't take more than 10 minutes.

1. Fork this repository.

2. Get a bot token from [@BotFather](https://telegram.me/BotFather), just run through the ```/newbot``` setup.

3. Create a [Heroku](https://www.heroku.com) account.

3. Create a new app on Heroku, select deploy via Github, and connect to your forked nullbot-example repository. Be sure to enable automatic deploys.

4. Jump over to the Heroku ```Settings``` for your bot and click ```Reveal Config Vars``` and add the following:

    | Key | Value |
    | --- | --- |
    | BOTNAME | The name of your bot, can be anything. |
    | TOKEN | The bot token supplied by [@BotFather](https://telegram.me/BotFather) |
    | URL | The url of your heroku app, right click on the ```Open app``` button and copy link to get this. Remove the trailing ```/``` |

    *Be sure to click ```Add``` after each key value pair.*

5. Jump back over to ```Deploy```, scroll to the bottom, and click the ```Deploy Branch``` button.

6. All done! Go ahead and message your bot.

## Ok, great, what's next?
From here, you can clone your forked nullbot-example repository to your local machine and start making changes. If you enabled automatic deploys, the heroku app will update and relaunch every time you push to the master branch. It's super easy.

For more information on how to use nullbot [go here](https://github.com/baetheus/nullbot).

Enjoy!

## Contact
If you have any questions, comments, or criticisms, please direct them to
[brandon@null.pub](mailto:brandon@null.pub).