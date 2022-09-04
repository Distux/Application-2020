// 21.3.22
// store data on webpage visit and prevent items from showing once event is done
$(()=> {
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.firstTime){
            sessionStorage.firstTime = false;
        } else {
            sessionStorage.firstTime = true;
            document.getElementById("hos").style.visibility = "visible";
        }
    }
})
 