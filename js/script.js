function clickMe(state){
    // alert("OK");
    
    if(state == 'on'){
        document.body.style.backgroundColor = 'yellow';
        document.getElementById('myImg').setAttribute('src', './img/bulb2.png')
    }else{
        document.body.style.backgroundColor = 'black';
        document.getElementById('myImg').setAttribute('src', './img/bulb1.png')
    }
    

}