import 'normalize.css';
import '../fonts/index.scss';
import '../scss/app.scss';
import 'jquery/dist/jquery.js';
import $ from 'jquery';
import './jquery.maskedinput.min';
// let sec = 7200;
// function timer() {
//     let hours = ~~(sec / 3600);
//     let minutes = ~~((sec % 3600) / 60);
//     let seconds = ~~(((sec % 3600) % 60));
//     sec--;
//     let time = `${hours} : ${minutes} : ${seconds}`;
//     document.getElementById('timer').innerText = time;
//     console.log(time);
// };
//  let a = setInterval(timer,1000);
//


$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+38(099) 999-99-99");
});

const date = new Date().toLocaleDateString();
document.getElementById('date').innerText = date;