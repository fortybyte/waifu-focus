import {messages} from './consts.js';
document.addEventListener('DOMContentLoaded', function() {
    /*
        blocks website
        loads random text and image
     */
    chrome.storage.local.get(['waifupic'], function(result) {
        if (!result.waifupic) {
            result.waifupic = 'option1';
        }
        //randomizer made by sky_yuo
        const pic = document.getElementById('waifupic');
        const text = document.getElementById('dialogue');
        pic.src = 'images/' + result.waifupic + '.jpeg';
        text.textContent = messages[Math.floor(Math.random() * messages.length)];
    });
});
