let currentlyOnDisplay = '';
let save = [];
var result = 0;
var currentOperation = '';
var root = document.querySelector(':root');

//THEME

function themChenger(number){
    switch(number){
       case 1:
            root.style.setProperty('--main-bg','hsl(222, 26%, 31%)');
            root.style.setProperty('--toggle-bg','hsl(223, 31%, 20%)');
            root.style.setProperty('--screen','hsl(224, 36%, 15%)');
            root.style.setProperty('--key-r','hsl(225, 21%, 49%)');
            root.style.setProperty('--key-r-shadow','hsl(224, 28%, 35%)');
            root.style.setProperty('--key-e','hsl(6, 63%, 50%)');
            root.style.setProperty('--key-e-shadow','hsl(6, 70%, 34%)');
            root.style.setProperty('--key-bg','hsl(30, 25%, 89%)');
            root.style.setProperty('--key-shadow','hsl(28, 16%, 65%)');
            root.style.setProperty('--num-color','hsl(221, 14%, 31%)');
            root.style.setProperty('--white','hsl(360, 100%, 100%)');
           break;
        case 2:
            root.style.setProperty('--main-bg','hsl(0, 0%, 90%)');
            root.style.setProperty('--toggle-bg','hsl(0, 5%, 81%)');
            root.style.setProperty('--screen','hsl(0, 0%, 93%)');
            root.style.setProperty('--key-r','hsl(185, 42%, 37%)');
            root.style.setProperty('--key-r-shadow','hsl(185, 58%, 25%)');
            root.style.setProperty('--key-e','hsl(25, 98%, 40%)');
            root.style.setProperty('--key-e-shadow','hsl(25, 99%, 27%)');
            root.style.setProperty('--key-bg','hsl(45, 7%, 89%)');
            root.style.setProperty('--key-shadow','hsl(35, 11%, 61%)');
            root.style.setProperty('--num-color','hsl(60, 10%, 19%)');
            root.style.setProperty('--white','hsl(60, 10%, 19%)');
            break;
        case 3:
            root.style.setProperty('--main-bg','hsl(268, 75%, 9%)');
            root.style.setProperty('--toggle-bg','hsl(268, 71%, 12%)');
            root.style.setProperty('--screen','hsl(268, 71%, 12%)');
            root.style.setProperty('--key-r','hsl(281, 89%, 26%)');
            root.style.setProperty('--key-r-shadow','hsl(285, 91%, 52%)');
            root.style.setProperty('--key-e','hsl(176, 100%, 44%)');
            root.style.setProperty('--key-e-shadow','hsl(177, 92%, 70%)');
            root.style.setProperty('--key-bg','hsl(45, 7%, 89%)');
            root.style.setProperty('--key-shadow','hsl(268, 47%, 21%)');
            root.style.setProperty('--num-color','hsl(290, 70%, 36%)');
            root.style.setProperty('--white','hsl(52, 100%, 62%)');
            root.style.setProperty('--white-a','hsl(198, 20%, 13%)');
            
            break;
    }
}





//CALCULATOR
function display(){
    document.getElementById('display').innerHTML = currentlyOnDisplay;
}

function saveControl(){
    save.splice(0,3)
    save.unshift(result);
    currentlyOnDisplay = result;
    overFlow()
    display();
    currentlyOnDisplay = '';
}

function overFlow(){
    if(currentlyOnDisplay.length >= 10 || currentlyOnDisplay >= 9999999999){
        currentlyOnDisplay = "ERROR ERROR"
        document.getElementById('operation').innerHTML = 'error';
        display();
    }
}

function press(key){
    const keys = document.getElementsByClassName("keys");
    let logKey = keys[key].innerHTML;
    document.getElementById('operation').innerHTML = '';
    if(logKey == '+' || logKey == '-' || logKey == 'x' || logKey == '/'){
        currentOperation = logKey;
        document.getElementById('operation').innerHTML = currentOperation;
        if (!currentlyOnDisplay) {
              save.pop();
              save.push(currentOperation);
        }else{
            calculation();
        }
    }else{
        currentlyOnDisplay += logKey;
        overFlow()
        display();
    }
}

function calculation(){
    if(!!currentlyOnDisplay){
        save.push(parseFloat(currentlyOnDisplay));
        currentlyOnDisplay = '';
        save.push(currentOperation);
        console.log('inicijalni save ' + save);
    
        for (let index = 0; index < save.length; index++) {
            // addition
            if (save[index] == '+') {
                if(save[index-1] != undefined && save[index+1] != undefined ){
                    result = save[index-1] + save[index+1];
                    saveControl();
                }
            }
            // subtraction
            if (save[index] == '-') {
                if(save[index-1] != undefined && save[index+1] != undefined ){
                    result = save[index-1] - save[index+1];
                    saveControl();
                }
            }
            //multiplication
            if (save[index] == 'x') {
                if(save[index-1] != undefined && save[index+1] != undefined ){
                    result = save[index-1] * save[index+1];
                    saveControl();
                }
            }
            //division
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
        overFlow()
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
    currentOperation = '';
    document.getElementById('operation').innerHTML = 'R';
    display();
}



