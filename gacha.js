//TODO: implement gacha system
import {wish_req, pool, has} from './consts.js';
import * as Utils from './backend_util.js';
export let coins = Utils.getCoins();
document.addEventListener('DOMContentLoaded', function(){
    const roll = document.getElementById('roll');
    roll.addEventListener('click', roll_waifu);
})
function roll_waifu() {
    if (coins < wish_req) {
        alert('Work harder to get more primogems, so you can take me home!');
        return;
    }
    const result = pool[Math.floor(Math.random() * pool.length)];
    coins -= wish_req;
    console.log(`${coins} coins left : rolled #${result} waifu`);
    Utils.saveCoins();
    Utils.saveCollection();
}