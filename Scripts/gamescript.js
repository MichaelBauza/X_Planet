//Created by: Michael Bauza
//Project: X Planet


//Get Data form LocalStorage
var planetName = localStorage.getItem("planetname");
var startPop = localStorage.getItem("popu");
var pandiMax = localStorage.getItem("pandemicChance");
var disasterMax = localStorage.getItem("disasterChance");
var heroCost = Number(localStorage.getItem("heroCost"));
var docCost = Number(localStorage.getItem("docCost"));
var moneyCost = Number(localStorage.getItem("moneyCost"));
var money = Number(localStorage.getItem("playerMoney"));
var docAmount = 0;
var heroAmount = 0;
var disasterAmount = 0;
var pandiAmount = 0;
var newsItems = 0;
var lastNewsItem = 0;

console.log(startPop);

//Target Display Tags
var nameSpot = document.querySelector("#pname-display");
var popSpot = document.querySelector("#population-Disp");
var moneySpot = document.querySelector("#money-display");
var addHumanSpot = document.querySelector("#humanNum");
var docSpot = document.querySelector("#docNum");
var heroSpot = document.querySelector("#heroNum");
var disasterList = document.querySelector("#disaster-ul");
var diseaseList = document.querySelector("#disease-ul");
var positivesList = document.querySelector("#positives-list");
var newsList = document.querySelector("#newslist");
var eventPopup = document.querySelector("#Epopup");
var eventbtn = document.querySelector("#popupBtn");
var span = document.querySelector("#Eclose");
var eventDiv = document.querySelector("#event");
var blocker = document.querySelector("#blocker");
var birthRateDisp = document.querySelector("#bRateDisp");
var moneyRateDisp = document.querySelector("#mRateDisp");
var yearTag = document.querySelector("#yearsH3");

//Audio
var music = document.querySelector("#nextBtnSound");
var eventSound = document.querySelector("#eventSound");
var badSound = document.querySelector("#badSound");
var rumbleSound = document.querySelector("#rumbleSound");
var birthSound = document.querySelector("#birthSound");
var meteorSound = document.querySelector("#meteorSound");


//Amounts
var docs = 0;
var heros = 0;
var popu = Number(startPop);
var bRate = 200;
var moneyRate = 200;
var year = 1940;

//Display Information
nameSpot.innerHTML = planetName;
popSpot.innerHTML = "Population: " + formatNumber(startPop);
moneySpot.innerHTML = "Atoms: " + formatNumber(money);
addHumanSpot.innerHTML = "@" + formatNumber(moneyCost);
docSpot.innerHTML = "@" + formatNumber(docCost);// GET TO SHOW
heroSpot.innerHTML = "@" + formatNumber(heroCost);
birthRateDisp.innerHTML = "Birth Rate: " + bRate;
yearTag.innerHTML = "Year:" + year;
moneyRateDisp.innerHTML = "MoneyRate: "+ moneyRate;

var date = new Date();

function GameLoop(){
    var rndDisaster = randomInteger(1,disasterMax);
    var rndDisease = randomInteger(1, pandiMax);

    //PlayMusic();
    Disease(rndDisease);
    Disaster(rndDisaster);
    NegativeAmountCheck();
    NewsReport();
    Births(bRate);
    RandomEvents();
    AmountCheck();
    money = money + moneyRate;
    newsItems++;
    year++;
    yearTag.innerHTML = "Year:" + year;
    moneySpot.innerHTML = "Money: $" + formatNumber(money);
    popSpot.innerHTML = "Population: " + formatNumber(popu);
}

function EventP(){//EVENT POPUP OPEN
    eventPopup.style.display = "block";
    blocker.style.display = "block";
    eventSound.play();
    eventSound.volume = .3;
}

span.onclick = function() {// EVENT POPUP CLOSE
    eventPopup.style.display = "none";
    blocker.style.display = "none";
    for(var i=1;i<eventDiv.getElementsByTagName("p").length;i++){
        eventDiv.getElementsByTagName("p")[i].remove();
    }
}

function PlayMusic(){
    music.play();
    music.volume = 0.1;
}

function StopMusic(){
    music.pause();
}

function RandomDisasterName(){
    var rndD = randomInteger(1,5);
    
    if(rndD == 1){
        return "EarthQuake";
    }
    else if(rndD == 2){
        return "Flood";
    }
    else if(rndD == 3){
        return "Tornado";
    }
    else if(rndD == 4){
        return "Typhon";
    }
    else{
        return "Alien Invasion";
    }
}

function RandomNews(){
    var rndD = randomInteger(1,15);
    
    if(year > 2000){
        if(rndD == 1 && lastNewsItem != 1){
            lastNewsItem = 1;
            return "Baby saved by flying Racoon";
        }
        else if(rndD == 2 && lastNewsItem != 2){
            lastNewsItem = 2;
            return "Reports of a man wearing a bat costume";
        }
        else if(rndD == 3 && lastNewsItem != 3){
            lastNewsItem = 3;
            return "Recent poll shows 80% of " + planetName + " residents prefer Chocolate over Vanilla";
        }
        else if(rndD == 4 && lastNewsItem != 4){
            lastNewsItem = 4;
            return "A meteor just missed " + planetName + " by mere inches";
        }
        else if(rndD == 5 && lastNewsItem != 5){
            lastNewsItem = 5;
            return "Study suggest that " + planetName + " is ACTUALLY round";
        }
        else if(rndD == 6 && lastNewsItem != 6){
            lastNewsItem = 6;
            return "Is it just me or is it getting hotter every year";
        }
        else if(rndD == 7 && lastNewsItem != 7){
            lastNewsItem = 7;
            return "One Country is at war with another";
        }
        else if(rndD == 8 && lastNewsItem != 8){
            lastNewsItem = 8;
            return "There will be a full moon tonight, Beware of Werewolf's";
        }
        else if(rndD == 9 && lastNewsItem != 9){
            lastNewsItem = 9;
            return "WE ARE BEING CONTROLLED BY [REDACTED], THEY CHOOSE WHAT WE [REDACTED] AND [REDACTED]. [REDACTED] SAVE YOURSELF!!";
        }
        else if(rndD == 10 && lastNewsItem != 10){
            lastNewsItem = 10;
            return "The Annual World awards have been cancelled ";
        }
        else if(rndD == 11 && lastNewsItem != 11){
            lastNewsItem = 11;
            return "Weather Report: It is Thundering.";
        }
        else if(rndD == 12 && lastNewsItem != 12){
            lastNewsItem = 12;
            return "Weather Report: It is raining.";
        }
        else if(rndD == 13 && lastNewsItem != 13){
            lastNewsItem = 13;
            return "Weather Report: It is hot.";
        }
        else if(rndD == 14 && lastNewsItem != 14){
            lastNewsItem = 14;
            return "Weather Report: It is cold.";
        }
        else{
            lastNewsItem = 15;
            return "Nothing to report...";
        }
    }
    else if(year >= 1970){
        if(rndD == 1 && lastNewsItem != 1){
            lastNewsItem = 1;
            return "Disco Clubs are opening up all over.";
        }
        else if(rndD == 2 && lastNewsItem != 2){
            lastNewsItem = 2;
            return "New Mustang model to be revealed later this year.";
        }
        else if(rndD == 3 && lastNewsItem != 3){
            lastNewsItem = 3;
            return "The Olympics are under way";
        }
        else if(rndD == 4 && lastNewsItem != 4){
            lastNewsItem = 4;
            return "Famous Chef Boyardee to open new restaurants around the globe.";
        }
        else if(rndD == 5 && lastNewsItem != 5){
            lastNewsItem = 5;
            return "The year is " + (year + 1);
        }
        else if(rndD == 6 && lastNewsItem != 6){
            lastNewsItem = 6;
            return "An assasination attempt has been made againts a world leader.";
        }
        else if(rndD == 7 && lastNewsItem != 7){
            lastNewsItem = 7;
            return "New technology is being created as we speak.";
        }
        else if(rndD == 8 && lastNewsItem != 8){
            lastNewsItem = 8;
            return "A famous actor has passed away...";
        }
        else if(rndD == 9 && lastNewsItem != 9){
            lastNewsItem = 9;
            return "Sports News: Steelers beat the Raiders 31-19 in the Super Bowl";
        }
        else if(rndD == 10 && lastNewsItem != 10){
            lastNewsItem = 10;
            return "New Nintendo console to launch this year.";
        }
        else if(rndD == 11 && lastNewsItem != 11){
            lastNewsItem = 11;
            return "Slow news day...";
        }
        else if(rndD == 12 && lastNewsItem != 12){
            lastNewsItem = 12;
            return "Where does are come from? the answer may suprise you..";
        }
        else if(rndD == 13 && lastNewsItem != 13){
            lastNewsItem = 13;
            return "Weather Report: It is cold.";
        }
        else if(rndD == 14 && lastNewsItem != 14){
            lastNewsItem = 14;
            return "Weather Report: It is hot.";
        }
        else{
            lastNewsItem = 15;
            return "Nothing to report...";
        }
    }
    else if(year < 1970){
        if(rndD == 1 && lastNewsItem != 1){
            lastNewsItem = 1;
            return "Typewriters are just amazing";
        }
        else if(rndD == 2 && lastNewsItem != 2){
            lastNewsItem = 2;
            return "Presidential debates are taking place.";
        }
        else if(rndD == 3 && lastNewsItem != 3){
            lastNewsItem = 3;
            return "The people of " + planetName + " created a space rocket";
        }
        else if(rndD == 4 && lastNewsItem != 4){
            lastNewsItem = 4;
            return "The Dung Beetles released their last album.";
        }
        else if(rndD == 5 && lastNewsItem != 5){
            lastNewsItem = 5;
            return "The year is " + (year + 1);
        }
        else if(rndD == 6 && lastNewsItem != 6){
            lastNewsItem = 6;
            return "An assasination attempt has been made againts a world leader.";
        }
        else if(rndD == 7 && lastNewsItem != 7){
            lastNewsItem = 7;
            return "New technology is being created as we speak.";
        }
        else if(rndD == 8 && lastNewsItem != 8){
            lastNewsItem = 8;
            return "A famous actress has passed away...";
        }
        else if(rndD == 9 && lastNewsItem != 9){
            lastNewsItem = 9;
            return "Sports News: the Cleveland indians defeat the Chicago White Sox's 1-0";
        }
        else if(rndD == 10 && lastNewsItem != 10){
            lastNewsItem = 10;
            return "Looney Toon's new character makes its debut on tonights airing";
        }
        else if(rndD == 11 && lastNewsItem != 11){
            lastNewsItem = 11;
            return "Slow news day...";
        }
        else if(rndD == 12 && lastNewsItem != 12){
            lastNewsItem = 12;
            return "Does the Swamp Creature actually exist? more on this topic later.";
        }
        else if(rndD == 13 && lastNewsItem != 13){
            lastNewsItem = 13;
            return "Weather Report: It is cold.";
        }
        else if(rndD == 14 && lastNewsItem != 14){
            lastNewsItem = 14;
            return "Weather Report: It is hot.";
        }
        else{
            lastNewsItem = 15;
            return "Nothing to report...";
        }
    }
}

function RandomDiseaseName(){
    var rndD = randomInteger(1,5);
    
    if(rndD == 1){
        return "Flu";
    }
    else if(rndD == 2){
        return "Black Plague";
    }
    else if(rndD == 3){
        return "Spanish Flu";
    }
    else if(rndD == 4){
        return "Antonine Plague";
    }
    else{
        return "Cholera Pandemic";
    }
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function NegativeAmountCheck(){

    if(pandiAmount > 0){
        popu = popu - (pandiAmount * 10);
    }

    if(disasterAmount > 0){
        popu = popu - (disasterAmount * 10);
    }
}

function Births(num){
    popu = popu + num;
    birthRateDisp.innerHTML = "Birth Rate: " + num;
}

function AddMoney(){
    
    if(money >= moneyCost){
        moneyRate += 25;
        money -= moneyCost
        moneySpot.innerHTML = "Money: $" + formatNumber(money);
        moneyRateDisp.innerHTML = "Money Rate: " + moneyRate;
        AmountCheck();
    }
}

function AddDoc(){
    if(money >= docCost && pandiAmount > 0){
        docAmount++;
        money = money - docCost;
        var spaned = document.createElement("li");
        var text = document.createTextNode("Pandemic Cured -" + year);

        if(pandiAmount > 0){
            pandiAmount--;
            diseaseList.getElementsByTagName("li")[0].remove();
        }

        moneySpot.innerHTML = "Money: $" + formatNumber(money);

        spaned.appendChild(text);

        if(positivesList.getElementsByTagName("li").length >= 7){
            positivesList.getElementsByTagName("li")[0].remove();
            positivesList.getElementsByTagName("li")[1].remove();

        }
        AmountCheck();
        positivesList.appendChild(spaned);
    }
}

function AddHero(){
    if(money >= heroCost && disasterAmount > 0){
        heroAmount++;
        money = money - heroCost;
        var spaned = document.createElement("li");
        var text = document.createTextNode("Disaster Stopped -" + year);

        if(disasterAmount > 0){
            disasterAmount--;
            disasterList.getElementsByTagName("li")[0].remove();
        }
        moneySpot.innerHTML = "Money: $" + formatNumber(money);

        if(positivesList.getElementsByTagName("li").length >= 7){
            positivesList.getElementsByTagName("li")[0].remove();
            positivesList.getElementsByTagName("li")[1].remove();

        }

        AmountCheck();
        spaned.appendChild(text);
        positivesList.appendChild(spaned);
    }
}

function Disaster(rnd){
    var rndDisaster = randomInteger(1,disasterMax);

    if(rnd > (disasterMax - 10)){
        badSound.play();
        badSound.volume = .2;

        popu = popu - (rndDisaster * 35);
        disasterAmount++;

        var spaned = document.createElement("li");
        var text = document.createTextNode(RandomDisasterName());//Make rnd

        popSpot.innerHTML = "Population: " + formatNumber(popu);

        spaned.appendChild(text);
        disasterList.appendChild(spaned);
    }
}

function Disease(rnd){
    var rndDisease = randomInteger(1, pandiMax);

    if(rnd > (pandiMax - 10)){
        badSound.play();
        badSound.volume = .2;

        popu = popu - (rndDisease * 35);
        pandiAmount++;

        var spaned = document.createElement("li");
        var text = document.createTextNode(RandomDiseaseName());

        popSpot.innerHTML = "Population: " + formatNumber(popu);

        spaned.appendChild(text);
        diseaseList.appendChild(spaned);
    }
}

function NewsReport(){
    var spaned = document.createElement("li");
    var text = document.createTextNode(RandomNews());

    if(newsItems >= 2){
        newsItems = 0;

        for(var i=0; i<newsList.getElementsByTagName("li").length;i++){
            newsList.getElementsByTagName("li")[i].remove();
        }
    }

    spaned.appendChild(text);
    newsList.appendChild(spaned);
}

function RandomEvents(){
    //This Creates Random Events that can affect the game

    var rnd = randomInteger(1,50);
    var rndE = randomInteger(1,8);
    var spaned = document.createElement("p");
    var e = "";

    if(rnd < 3){
        if(rndE == 1){
            e = "The economy is booming! $10,000 added to your account.";
            money += 10000;
            moneyRateDisp.innerHTML = "Money: $" + formatNumber(money);
        }
        else if(rndE == 2){
            e = "A Meteor impact has killed 500,000 people!";
            meteorSound.play();
            meteorSound.volume = .4;
            popu = popu - 500000;
            popSpot.innerHTML = "Population: " + formatNumber(popu);
        }
        else if(rndE == 3){
            e = "There has been a recent surge in births! +50 added to Birth Rate.";
            birthSound.play();
            birthSound.volume = .4;
            bRate += 50;
            popu += 1000000;
            popSpot.innerHTML = "Population: " + formatNumber(popu);
            birthRateDisp.innerHTML = "Birth Rate: " + bRate;
        }
        else if(rndE == 4){
            e = "Inhabitants of " + planetName + " are not in the mood... -10 removed from Birth Rate.";
            bRate -= 10;
            birthRateDisp.innerHTML = "Birth Rate: " + bRate;
        }
        else if(rndE == 5){
            e = "New romantic comedy movie has been released!. +20 added to Birth Rate. ";
            birthSound.play();
            birthSound.volume = .4;
            bRate += 20;
            birthRateDisp.innerHTML = "Birth Rate: " + bRate;
        }
        else if(rndE == 6){
            e = "New romantic comedy movie has been released!. +20 added to Birth Rate. ";
            birthSound.play();
            birthSound.volume = .4;
            bRate += 20;
            birthRateDisp.innerHTML = "Birth Rate: " + bRate;
        }
        else if(rndE == 7){
            e = "Multiple sink holes have appeared all over " + planetName + ". 200,000 deaths reported.";
            rumbleSound.play();
            rumbleSound.volume = .4;
            popu -= 200000;
            popSpot.innerHTML = "Population: " + formatNumber(popu);
        }
        else{
            e = "Toxic chemicals were found in the drinking water. -50 removed from Birth Rate.";
            bRate -= 50;
            birthRateDisp.innerHTML =  "Birth Rate: " + bRate;
        }
        EventP();

        var text = document.createTextNode(e);

        spaned.appendChild(text);
        eventDiv.appendChild(spaned);
    }

   
}

function AmountCheck(){ //JQUERY: Changes the color of the text depending on the variable amounts
    if(bRate < 0){
        $(document).ready(function(){
            $("#bRateDisp").css("color", "red");
          });
    }
    else if(bRate > 0){
        $(document).ready(function(){
            $("#bRateDisp").css("color", "rgb(0, 255, 0)");
          });
    }

    if(money < docCost){
        $(document).ready(function(){
            $('#docBuy').css("color","red");
        });
    }
    else if(money >= docCost){
        $(document).ready(function(){
            $('#docBuy').css("color","rgb(0, 255, 0)");
        });
    }

    if(money < heroCost){
        $(document).ready(function(){
            $('#heroBuy').css("color","red");
        });
    }
    else if(money >= heroCost){
        $(document).ready(function(){
            $('#heroBuy').css("color","rgb(0, 255, 0)");
        });
    }

    if(money < moneyCost){
        $(document).ready(function(){
            $('#moneyAdd').css("color","red");
        });
    }
    else if(money >= moneyCost){
        $(document).ready(function(){
            $('#moneyAdd').css("color","rgb(0, 255, 0)");
        });
    }
}
