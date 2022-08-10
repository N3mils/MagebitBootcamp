const cookie = document.querySelector('·cookie');
const money = document.querySelector('·money');
const upgradeButton = document.querySelector('button');
const upgradeCostContainer = document.querySelector('.upgrade-cost');

let moneyCount = 0;
let upgradeCost = 10;
let curentCookieMul = 1;

cookie.addEventListener('click', function(){
    moneyCount += curentCookieMul;
    money.textContent = moneyCount;

})

upgradeButton.addEventListener('click', function(){
    if(moneyCount >= upgradeCost){
        curentCookieMul *= 2;
        moneyCount = moneyCount - upgradeCost;
        upgradeCost *= 3;
        upgradeCostContainer.textContent = upgradeCost;
        money.textContent = moneyCount;
    }
    
})









