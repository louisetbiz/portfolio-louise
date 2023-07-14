function updatePageColor(){
    var now= new Date();
    var hour = now.getHours();

    if (hour >=6 && hour < 19){
        document.body.className = 'daylight';
    }else{
        document.body.className = 'dark';
    }
    }

updatePageColor();
setInterval(updatePageColor, 3600000);