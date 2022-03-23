let currentlyOnDisplay = '';
let save = [];
var result = 0;
var now = '';
let sign = '';


function display(){
    document.getElementById('display').innerHTML = currentlyOnDisplay;
}

function saveControl(){
    save.splice(0,3)
    save.unshift(result);
    currentlyOnDisplay = result;
    display();
    currentlyOnDisplay = '';
}

function press(key){
    const keys = document.getElementsByClassName("keys");
    let logKey = keys[key].innerHTML;
    document.getElementById('operation').innerHTML = '';

    if(logKey == '+' || logKey == '-' || logKey == 'x' || logKey == '/'){
        now = logKey;
        document.getElementById('operation').innerHTML = now;
        if (!currentlyOnDisplay) {
              save.pop();
              save.push(now);
        }else{
            calculation();
        }
        
    }else{
        currentlyOnDisplay += logKey;
        display();
    }
    
}

function calculation(){
    if(!!currentlyOnDisplay){
        save.push(parseFloat(currentlyOnDisplay));
        currentlyOnDisplay = '';
        save.push(now);
        console.log('inicijalni save ' + save);
    
        for (let index = 0; index < save.length; index++) {
            // plus
            if (save[index] == '+') {
                if(save[index-1] != undefined && save[index+1] != undefined ){
                    result = save[index-1] + save[index+1];
                    saveControl();
                }
            }
            // minus
            if (save[index] == '-') {
                if(save[index-1] != undefined && save[index+1] != undefined ){
                    result = save[index-1] - save[index+1];
                    saveControl();
                }
            }
            //puta
            if (save[index] == 'x') {
                if(save[index-1] != undefined && save[index+1] != undefined ){
                    result = save[index-1] * save[index+1];
                    saveControl();
                }
            }
            //djeljeno

            if (save[index] == '/') {
                if(save[index-1] != undefined && save[index+1] != undefined ){
                    result = save[index-1] / save[index+1];
                    saveControl();
                }
            }
            
        }
    }  
}

function equal(){
        calculation();
        document.getElementById('operation').innerHTML = '=';
}

function deleteLast(){
    let last = currentlyOnDisplay.length - 1
    currentlyOnDisplay = currentlyOnDisplay.slice(0,last);
    document.getElementById('operation').innerHTML = 'del';
    display();
}

function reset(){
    currentlyOnDisplay = '';
    save = [];
    result = 0;
    now = '';
    document.getElementById('operation').innerHTML = 'R';
    display();
}



