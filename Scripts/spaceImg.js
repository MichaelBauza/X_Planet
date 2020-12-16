//Author: Michael Bauza
//Date: 9-25-20

var gData;
window.onload = function(){
    var result = document.querySelector("#result");
    var btn = document.querySelector("#spaceImgBtn");
    btn.addEventListener('click', loadData,false);

    console.log(gData.items.length);
}

function loadData(){
    var url = "https://www.flickr.com/services/feeds/photos_public.gne/?jsoncallback=processData&id=36868531@N00&format=json";

    var script = document.createElement("script");
    script.setAttribute("src",url);

    var head = document.head;

    head.appendChild(script);
}

function processData(data){
    gData = data;
    console.table(gData);
    
    var imgs = document.getElementsByTagName("img"); 

    if( imgs.length >= 18){
        
        for(var i=0;i<(gData.items.length-2);i++){

            var img = document.createElement("img");
            img.setAttribute("src",gData.items[i].media.m);
            result.appendChild(img);  
            
        }
        for(var x=0;x<18;x++){
            document.getElementsByTagName("img")[x].remove();
        }

    }else{

        for(var i=0;i<(gData.items.length-2);i++){

            var img = document.createElement("img");
            img.setAttribute("src",gData.items[i].media.m);
            result.appendChild(img);  
            
        }
    }
    
}

