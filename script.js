let currentlyOnDisplay = '';
let save = [];
var result = 0;
var now = '';



function display(){
    document.getElementById('display').innerHTML = currentlyOnDisplay;
}


function press(key){
    const keys = document.getElementsByClassName("keys");
    let logKey = keys[key].innerHTML;
    document.getElementById('operation').innerHTML = '';

    if(logKey == '+' || logKey == '-' || logKey == 'x' || logKey == '/'){
        now = logKey;
        document.getElementById('operation').innerHTML = now;
        calculation();
    }else{
        currentlyOnDisplay += logKey;
        display();
    }
    
}

function deleteLast(){
    let last = currentlyOnDisplay.length - 1
    currentlyOnDisplay = currentlyOnDisplay.slice(0,last);
    document.getElementById('operation').innerHTML = 'del';
    display();
}


function calculation(){
    if(currentlyOnDisplay != NaN){
    save.push(parseFloat(currentlyOnDisplay));
    currentlyOnDisplay = '';
    save.push(now);
    }
    
    for (let index = 0; index < save.length; index++) {
        if (save[index] == '+') {
            if(save[index-1] != undefined && save[index+1] != undefined ){
                result = save[index-1] + save[index+1];
                save.splice(0,3)
                save.unshift(result);
                currentlyOnDisplay = result;
                display();
                currentlyOnDisplay = '';
            }
        }
    }
    
    for (let index = 0; index < save.length; index++) {
        if (save[index] == '-') {
            if(save[index-1] != undefined && save[index+1] != undefined ){
                result = save[index-1] - save[index+1];
                save.splice(0,3)
                save.unshift(result);
                currentlyOnDisplay = result;
                display();
                currentlyOnDisplay = '';
            }
        }
    }

    for (let index = 0; index < save.length; index++) {
        if (save[index] == 'x') {
            if(save[index-1] != undefined && save[index+1] != undefined ){
                result = save[index-1] * save[index+1];
                save.splice(0,3)
                save.unshift(result);
                currentlyOnDisplay = result;
                display();
                currentlyOnDisplay = '';
            }
        }
    }

    for (let index = 0; index < save.length; index++) {
        if (save[index] == '/') {
            if(save[index-1] != undefined && save[index+1] != undefined ){
                result = save[index-1] / save[index+1];
                save.splice(0,3)
                save.unshift(result);
                currentlyOnDisplay = result;
                display();
                currentlyOnDisplay = '';
            }
        }
    }
}



function equal(){
        calculation();
        document.getElementById('operation').innerHTML = '=';
}


function reset(){
    currentlyOnDisplay = '';
    save = [];
    result = 0;
    now = '';
    document.getElementById('operation').innerHTML = 'R';
    display();
}



