import 'normalize.css';
import './assets/fonts/index.scss';
import './assets/scss/app.scss';
import 'jquery/dist/jquery.js';
import $ from 'jquery';
import './assets/js/jquery.maskedinput.min';


let time = 7200;

document.getElementById('timer').innerText = new Date(time * 1000).toISOString()
    .substr(12, 7);
const timer = () => {
    time--;
    document.getElementById('timer').innerText = new Date(time * 1000).toISOString()
        .substr(12, 7);
    console.log(time);
    if(!time){
        clearInterval(x);
    }
}

let x = setInterval(timer,1000);

$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+38(099) 999-99-99");
});

const date = new Date().toLocaleDateString();
document.getElementById('date').innerText = date;