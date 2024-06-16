
let currIndex = 0;
function showSlide (index) {
    const slideImg = document.querySelectorAll(".slide");

    if (index>= slideImg.length){
        currIndex = 0;
    }else if (index < 0) {
        currIndex = slideImg.length -1;
    } else {
        currIndex = index;
    }

    for (let i = 0; i<slideImg.length; i++){
        slideImg[i].style.display = 'none';
    }
    slideImg[currIndex].style.display = 'block';

}

function changeSlide (n) {
    showSlide(currIndex + n);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    changeSlide(-1);
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    changeSlide(1);
});
  