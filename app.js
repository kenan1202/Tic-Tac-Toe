const box = document.querySelectorAll('.box');
const icons = document.querySelectorAll('.box div');
const applyBtn = document.querySelector('.apply');
const restartBtn = document.querySelector('.restartBtn');
const user = document.querySelectorAll('.user');
const userProfile = document.querySelectorAll('.userProfile');
const userSelect = document.querySelectorAll('.userSelect');
const userName = document.querySelectorAll('.userName');


const winingConditions = [
    [0,1,2],
    [3,4,5],
    [0,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



let active = 0;
let player1 = 0;
let player2 = 1;
let firstNames = ['username', 'username'];
let signs = ['sign', 'sign'];


user[player1].style.backgroundColor = 'rgba(0,0,0, 0.5)';
user[player2].style.backgroundColor = 'rgba(255,255,255, 0.2)';


let workingProgram = true;

applyBtn.addEventListener("click", function() {
    if(workingProgram) {
        firstNames[player1] = userProfile[player1].value;
        firstNames[player2] = userProfile[player2].value;
        signs[player1] = userSelect[player1].value;
        signs[player2] = userSelect[player2].value;
    
    
    
        userName[player1].innerHTML = firstNames[player1];
        userName[player2].innerHTML = firstNames[player2];
    }    
});



for(let i = 0; i < box.length; i++) {
    let workingIcon = true;
    box[i].addEventListener("click", function() {
        if(workingProgram) {
            if(workingIcon) {
                workingIcon = false;
                if(signs[active] == 'X') {
                    icons[i].innerHTML = 'X';
                }
                else if(signs[active] == 'O') {
                    icons[i].innerHTML = 'O';
                }
                user[active].style.backgroundColor = 'rgba(0,0,0, 0.5)';
                user[Number(!active)].style.backgroundColor = 'rgba(255,255,255, 0.2)';
    
                for(j = 0; j < winingConditions.length; j++) {
                    if((icons[winingConditions[j][0]].innerHTML == 'X' && icons[winingConditions[j][1]].innerHTML == 'X' 
                    && icons[winingConditions[j][2]].innerHTML == 'X') || (icons[winingConditions[j][0]].innerHTML == 'O' 
                    && icons[winingConditions[j][1]].innerHTML == 'O' && icons[winingConditions[j][2]].innerHTML == 'O')) {
                        user[active].style.backgroundColor = 'green';
                        workingProgram = false;
                    }
                }
        
                active = active == 0 ? 1 : 0;
            }
        }
    });

    restartBtn.addEventListener("click", function() {
        icons[i].innerHTML = '';
        active = 0;
        user[active].style.backgroundColor = 'rgba(0,0,0, 0.5)';
        user[Number(!active)].style.backgroundColor = 'rgba(255,255,255, 0.2)';

        userName[player1].innerHTML = 'User 1';
        userName[player2].innerHTML = 'User 2';

        workingProgram = true;
        workingIcon = true;

        signs[player1] = '';
        signs[player2] = '';
        userSelect[player1].value = 'X';
        userSelect[player2].value = 'X';

        userProfile[player1].value = '';
        userProfile[player2].value = '';
    });
}    