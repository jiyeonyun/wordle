const answers =['apple','happy','house','maple','bread','knife','basic','beach','clock','count','cover','cross','fresh','frame','grade','learn','horse','heart','lunch','magic','movie','place','photo','plane','plant','start','sweet','title','today','total','under','young','white','while','write','stone','sound','sorry','small','sleep','prize','radio','bacon','liver','grape','lemon','mango','melon','peach','trout','onion','chips','olive','cream','plain','yeast','honey','pasta','pizza',''];
const EnterBtn = document.querySelector('button');
const modalTitle = document.querySelector('.modal_title');
const modal = document.querySelector('.modal');
const nullModal =document.querySelector('.null_modal')
const resultModal = document.querySelector('.result_modal');
const resultModalResult = document.querySelector('.result_modal_result');
const resultmodalTitle = document.querySelector('.resultmodal_title');
const game = document.querySelector('.game');
const keyboard = document.querySelector('.keyBorad');
const color = ['rgb(139 195 74 / 66%)','rgb(255 207 34 / 58%)','rgb(255 59 0 / 54%)','whitesmoke'];

let colorNum = 0;
let times = 0;
let answer = '';

function changeColor(e){
    let target = e.target;
    console.log(colorNum);
    
    if(colorNum <3){
        target.style.background = `${color[colorNum]}`
        colorNum=colorNum+1
    }
    else if(colorNum == 3){
        target.style.background = `${color[colorNum]}`
        colorNum= 0
        
        
    }
}

function reload(){
    location.reload();
}

//랜덤 숫자 생성 
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 플레이 버튼
function play(){
    let randnum = rand(0,answers.length-1);
        answer = answers[randnum];
        console.log(answer);
        
    modal.setAttribute('class','modal hide')
    game.setAttribute('class','game')
    keyboard.setAttribute('class','keyBorad')
}



function answerCheck(){
    let input = document.querySelectorAll('.answer'); 
    let realAnswer = input[0].value+input[1].value+input[2].value+input[3].value+input[4].value; 
    if(times < 5){
        if(input[0].value == '',input[1].value == '', input[2].value == '',input[3].value == '' ,input[4].value == ''){
            nullModal.setAttribute('class','.null_modal');
        }
        else{
            if(realAnswer == answer){
                game.setAttribute('class','game hide');
                resultModal.setAttribute('class','result_modal');
                keyboard.setAttribute('class','keyBorad hide');
            }
            else{
                nullModal.setAttribute('class','.null_modal hide');
            for(let i = 0; i < 5; i++){
                if(input[i].value == answer[i]){
                    input[i].style.background = 'rgb(139 195 74 / 66%)';
                }
                else if(answer.includes(input[i].value)){
                    input[i].style.background = 'rgb(255 207 34 / 58%)';
                }
                else{
                    input[i].style.background = 'rgb(255 59 0 / 54%)';
                }
                input[i].classList.remove('answer');
            }
        
            const template = `<div>
            <input type="text" id="n1" maxlength="1" class="answer" autocomplete="off">
            <input type="text" id="n2" maxlength="1" class="answer" autocomplete="off">
            <input type="text" id="n3" maxlength="1" class="answer" autocomplete="off">
            <input type="text" id="n4" maxlength="1" class="answer" autocomplete="off">
            <input type="text" id="n5" maxlength="1" class="answer" autocomplete="off">
            </div>`;
            document.querySelector('.game').insertAdjacentHTML('beforeend',template);
            
            times= times+1;
            }
        }
    }
    else{
        game.setAttribute('class','game hide');
        keyboard.setAttribute('class','keyBorad hide')
        resultModal.setAttribute('class','result_modal');
        resultModalResult.innerText = `   you lose 👻
        answer is "${answer}"!!`
    }
    
}


EnterBtn.addEventListener('click',answerCheck);
modalTitle.addEventListener('click',play);
resultmodalTitle.addEventListener('click',reload)
keyboard.addEventListener('click',changeColor);


//ㅇㅔㄴ터치면 전송할것
//자동포커스 구현할것 22.02.27