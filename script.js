let slides = document.getElementsByClassName('slides');
let currenslides = 0;
document.getElementById('next').addEventListener('click', () => {
    changeSlide(currenslides + 1);
});
document.getElementById('prev').addEventListener('click', () => {
    changeSlide(currenslides - 1);
});
function changeSlide(moveTo){
    if(moveTo >= slides.length)
    {
        moveTo = 0;
    }
    if(moveTo < 0)
    {
        moveTo = slides.length -1;
    }
    slides[currenslides].classList.toggle('active');
    slides[moveTo].classList.toggle('active');
    currenslides = moveTo;
}