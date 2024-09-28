// var hourUp, hier zit het HTML element in met de ID js--hour-up dat is een span
var hourUp = document.getElementById("js--hour-up");
// var hourDown, hier zit het HTML element in met de ID js--hour-down dat is een span
var hourDown = document.getElementById("js--hour-down");


var hour = 0;
var timeHour = document.getElementById("js--time-hour");
hourUp.onclick = function(){
    // hour += 1, hier zit een code waar de hour wordt verhoogd
    hour += 1;
    if(hour > 23){
        hour = 0;
    }
    if(hour < 10){
        timeHour.innerText = "0" + hour;
    }
    else{
        timeHour.innerText = hour;
    }
    
}

hourDown.onclick = function(){
    //hour -=1, hier zit een code waar de hour wordt verlaagd
    hour -= 1;
    if (hour < 0){
        hour = 23;
    }
    if(hour < 10){
        timeHour.innerText = "0" + hour;
    }
    else{
        timeHour.innerText = hour;
    }
}


var minute = 0;
// var timeMinute, hier zit een HTML element met de ID js--time-minute, dat is een Button
var timeMinute = document.getElementById("js--time-minute");
// var timeMinute, hier zit een HTML element met de ID js--minute-up, dat is een Button
var minuteUp = document.getElementById("js--minute-up");
minuteUp.onclick = function(){
    //minute +=1, hier zit een code waar de minute wordt verhoogd
    minute += 1;
    if(minute > 59){
        minute = 0;
    }
    if(minute < 10){
        timeMinute.innerText ="0" + minute;
    }
    else{
        timeMinute.innerText = minute;
    }

}
// var minuteDown, hier zit het HTML element met de ID js--minute-down, dat is een Button
var minuteDown = document.getElementById("js--minute-down");
minuteDown.onclick = function(){
    // minute -=1, hier zit een code waar de minute wordt verlaagd
    minute -= 1;
    if(minute < 0){
        minute = 59;
    }
    if(minute < 10){
        timeMinute.innerText = "0" + minute;
    }
    else{
        timeMinute.innerText = minute;
    }
    
}

// var toggle, hier zit het HTML element in met de ID js--toggle dat is ook een span
var toggle = document.getElementById("js--toggle");
var timer = null;
toggle.checked = false;
var getTimerOut = null;
// var dialogue, hier zit het HTML element in met de ID js--dialogue, dat heeft een dialogue tag
var dialogue = document.getElementById("js--dialogue");
// var audio, hier zit het HTML element in met de ID js--audio, dat heeft een dialogue tag
var audio = new Audio("/sounds/wowowowowowowow-103214.mp3");
toggle.onchange = function(){
    if(toggle.checked === true){
        // dialogue.innerText, is een stuk code waar je de wekker selecteerd 
        dialogue.innerText = "Je alarm is gezet om " + hour + " uur en " + minute + " minuten."; 
        toggle.classList.add("alarm__toggle--checked");
        dialogue.style.display = "flex";
        getTimerOut = setTimeout(function(){
            dialogue.style.display = "none";
            // De dialoog verdwijnt na 3,5 seconden
        },3500)
        // setInterval, hier staan functie over jou gekozen uren en minuten van je wekker  
         timer = setInterval(function(){
            var date = new Date();
            var dateHour = date.getHours(); 
            var dateMinute = date.getMinutes(); 
            if(hour === dateHour && minute === dateMinute){
                audio.play();
    
            }
            // wekker gaat pas over een seconden af na de geselecteerde tijd
        },1000)
    }
    else{
        // Als de toggle hier niet wordt aangevinkt, dan verwijder je de alarminstellingen en reset de weergave
        dialogue.style.display = "none";
        toggle.classList.remove("alarm__toggle--checked");
        clearTimeout(getTimerOut);
        clearInterval(timer);
}

}


