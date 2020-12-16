//Created by: Michael Bauza
//Project: X Planet

console.log("Java Works");
window.onload = init;

function init(){getFile();}

var pandemicChance = 0;
var disasterChance = 0;
var heroCost = 0;
var docCost = 0;
var pop = 0;
var moneyCost = 0;
var money = 0;

$(document).ready(function(){//REPLACED WITH JQUERY SELECTORS
    var diffE = $("#diffE"); // document.getElementById("diffE");
    var diffM = $("#diffM"); //document.getElementById("diffM");
    var diffH = $("#diffH"); //document.getElementById("diffH"); 
});

var rndNameBtn = document.querySelector("#rndNameBtn");
rndNameBtn.addEventListener('click', RandomNameGen);
var lastName;
var info;

var feedlist = "";

function getFile(){
    var url = "http://apollo.gtc.edu/~bauzarom1/XPlanet/Data/names.json";
    var request = new XMLHttpRequest();

    request.open("GET", url);
    request.onload = function(){
        if(request.status == 200){
            UpdateInfo(request.responseText);
        }
    };
    request.send(null);
}

function UpdateInfo(responseText){
    var infoDiv = document.getElementById("info");
    info = JSON.parse(responseText);
    console.log(info);
}


function readSetup(){
    difficultyCheck();
}

function difficultyCheck(){
    if(diffE.checked){

        var pname = document.getElementById("pname").value;
    
        pandemicChance = 100;
        disasterChance = 100;
        heroCost = 3000;
        docCost = 500;
        moneyCost = 3000;
        money = 40000; //Change Later
        pop = 2000000;

        localStorage.setItem("planetname", pname);
        localStorage.setItem("popu", pop);
        localStorage.setItem("pandemicChance", pandemicChance);
        localStorage.setItem("disasterChance", disasterChance);
        localStorage.setItem("heroCost", heroCost);
        localStorage.setItem("docCost", docCost);
        localStorage.setItem("moneyCost", moneyCost);
        localStorage.setItem("playerMoney", money);

    }
    else if(diffM.checked){

        var pname = document.getElementById("pname").value;

        pandemicChance = 90;
        disasterChance = 90;
        heroCost = 5000;
        docCost = 2200;
        moneyCost = 5000;
        money = 50000;
        pop = 900000; 

        localStorage.setItem("planetname", pname);
        localStorage.setItem("popu", pop);
        localStorage.setItem("pandemicChance", pandemicChance);
        localStorage.setItem("disasterChance", disasterChance);
        localStorage.setItem("heroCost", heroCost);
        localStorage.setItem("docCost", docCost);
        localStorage.setItem("moneyCost", moneyCost);
        localStorage.setItem("playerMoney", money);

    }
    else if(diffH.checked){

        var pname = document.getElementById("pname").value;

        pandemicChance = 60;
        disasterChance = 60;
        heroCost = 5000;
        docCost = 3200;
        moneyCost = 5000;
        money = 50000;
        pop = 600000;

        localStorage.setItem("planetname", pname);
        localStorage.setItem("popu", pop);
        localStorage.setItem("pandemicChance", pandemicChance);
        localStorage.setItem("disasterChance", disasterChance);
        localStorage.setItem("heroCost", heroCost);
        localStorage.setItem("docCost", docCost);
        localStorage.setItem("moneyCost", moneyCost);
        localStorage.setItem("playerMoney", money);

    }
    else{
        //SET TO REJECT FORM
        alert("No Difficulty Checked!");
    }
}

//FEEDBACK
function FormValidation(){//TRY,CATCH
    var feedForm = document.forms[0];
    
    try{
        for(var i=0;i<(feedForm.elements.length-1);i++){
            var element = feedForm.elements[i].value;

            console.log(feedForm.elements[i]);

            if(element == ""){
                feedForm.elements[i].focus();
                throw "Please Fill out all fields!";
            }
            
        }
        if(feedForm.elements[1].value.length < 7){
            throw "Please Enter valid Email!";
        }
        alert("Thank you for your feedback!");

    }catch(e){
        alert(e);
        return false;
    }

}

function SendFeedback(){
    alert(feedlist);
}

//NAME GEN
function RandomNameGen(){
    var rnd = randomInteger(1,20);
    var target = document.querySelector("#randomNameSpot");

    if(rnd == 1 && rnd != lastName){
        pname.value = info[0];
        lastName = 1;
    }
    else if(rnd == 2 && rnd != lastName){
        pname.value = info[1];
        lastName = 2;
    }
    else if(rnd == 3 && rnd != lastName){
        pname.value = info[2];
        lastName = 3;
    }
    else if(rnd == 4 && rnd != lastName){
        pname.value = info[3];
        lastName = 4;
    }
    else if(rnd == 5 && rnd != lastName){
        pname.value = info[4];
        lastName = 5;
    }
    else if(rnd == 6 && rnd != lastName){
        pname.value = info[5];
        lastName = 6;
    }
    else if(rnd == 7 && rnd != lastName){
        pname.value = info[6];
        lastName = 7;
    }
    else if(rnd == 8 && rnd != lastName){
        pname.value = info[7];
        lastName = 8;
    }
    else if(rnd == 9 && rnd != lastName){
        pname.value = info[8];
        lastName = 9;
    }
    else if(rnd == 10 && rnd != lastName){
        pname.value = info[9];
        lastName = 10;
    }
    else if(rnd == 11 && rnd != lastName){
        pname.value = info[10];
        lastName = 11;
    }
    else if(rnd == 12 && rnd != lastName){
        pname.value = info[11];
        lastName = 12;
    }
    else if(rnd == 13 && rnd != lastName){
        pname.value = info[12];
        lastName = 13;
    }
    else if(rnd == 14 && rnd != lastName){
        pname.value = info[13];
        lastName = 14;
    }
    else if(rnd == 15 && rnd != lastName){
        pname.value = info[14];
        lastName = 15;
    }
    else if(rnd == 16 && rnd != lastName){
        pname.value = info[15];
        lastName = 16;
    }
    else if(rnd == 17 && rnd != lastName){
        pname.value = info[16];
        lastName = 17;
    }
    else if(rnd == 18 && rnd != lastName){
        pname.value = info[17];
        lastName = 18;
    }
    else if(rnd == 19 && rnd != lastName){
        pname.value = info[18];
        lastName = 19;
    }
    else if(rnd == 20 && rnd != lastName){
        pname.value = info[19];
        lastName = 20;
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
