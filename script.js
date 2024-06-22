const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click',(n)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(n)=>{
    if(n = imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

//product horizontal mouse whell scroll;

// const scrollcontainer = document.querySelectorAll('.products');
// for (const item of scrollcontainer) {
//     item.addEventListener('wheel', (evt)=>{
//         evt.preventDefault();
//         item.scrollLeft =+ evt.deltaY;

//     })
    
// }
