module.exports = function titlechanger(mod) {
    let config = require('./config.json');
    let debug = config.debug || false;
    let chosenTitle = config.defaultTitle || -1;

    mod.command.add('title', (cmd, x) => {
        switch (cmd) {
            case 'set':
                mod.send('S_APPLY_TITLE', 3, {
                    gameId: mod.game.me.gameId,
                    title: x
                });
                chosenTitle = x;
                break;
            case 'debug':
                debug = !debug;
                mod.command.message('Title debug: ' + (debug ? 'enabled' : 'disabled'));
                break;
            default:
                mod.command.message('Usage: title [set|debug] [achievement id]');
                break;
        }
    });

    mod.hook('S_APPLY_TITLE', 3, (event) => {
        if (debug) mod.command.message('Title applied: ' + event.title);
    });

    mod.game.on('change_zone', () => {
        if (chosenTitle == -1) return;

        mod.send('S_APPLY_TITLE', 3, {
            gameId: mod.game.me.gameId,
            title: chosenTitle
        });
    });

    mod.game.on('enter_game', () => {
        if (chosenTitle == -1) return;
        // timeout 1.5 seconds so the title is applied after the client has loaded the title
        setTimeout(() => {
            mod.send('S_APPLY_TITLE', 3, {
                gameId: mod.game.me.gameId,
                title: chosenTitle
            });
        }, 1500);
    });
}