let dayNight =document.querySelector('.dayNight');
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');


dayNight.onclick = function(){
    body.classList.toggle('dark');

    dayNight.classList.toggle('active')


}



menuToggle.onclick= function(){
    menuToggle.classList.toggle('active');

}

