//Created by: Michael Bauza
//Date: 9-27-2020
//File: security.js

var spot = document.querySelector("#securityI");

function addInfo(x){
    var p = document.createElement("p");
    var info = document.createTextNode(x);

    p.appendChild(info);
    spot.appendChild(p);
}

addInfo("Online: " + navigator.onLine);
addInfo("Agent: " + navigator.userAgent);
addInfo("App Name: " + navigator.appName);
addInfo("Version: " + navigator.appVersion);
addInfo("Platform: " + navigator.platform);




