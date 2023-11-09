// ==UserScript==
// @name         Goodbye Fandom
// @namespace    https://github.com/WesternIcelander/GoodbyeFandom
// @version      0.1
// @description  Fandom sucks
// @author       WesternIcelander
// @supportURL   https://github.com/WesternIcelander/GoodbyeFandom/issues
// @match        https://*.fandom.com/wiki/*
// @icon         https://www.fandom.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add your redirections here! Please keep it in alphabetical order!
    let redirections = {
        "calamity": "https://calamitymod.wiki.gg/wiki/",
        "minecraft": "https://minecraft.wiki/w/",
        "minecraft-archive": "https://minecraft.wiki/w/",
        "oldschoolrunescape": "https://oldschool.runescape.wiki/w/",
        "runescape": "https://runescape.wiki/w/",
        "terraria": "https://terraria.wiki.gg/wiki/"
    };

    // Do not touch below unless you know what you're doing! :D

    let currentUrl = self.location.href;
    let startOfWikiName = currentUrl.indexOf("://") + 3;
    let endOfWikiName = currentUrl.indexOf(".fandom.com");
    let startOfArticleName = currentUrl.indexOf("/wiki/") + 6;
    if (startOfWikiName == 2 || endOfWikiName == -1 || startOfArticleName == 5) {
        console.log(startOfWikiName, endOfWikiName, startOfArticleName);
        return;
    }
    let wikiName = currentUrl.substring(startOfWikiName, endOfWikiName);
    let articleName = currentUrl.substring(startOfArticleName);

    if (redirections[wikiName]) {
        self.location.href = redirections[wikiName] + articleName;
    }
})();
