const images = document.querySelectorAll('.img');
const containerimage = document.querySelector('.container-img');
const imagecont = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closemodal = document.querySelector('.bx.bx-x');
images.forEach(image => {
    image.addEventListener('click', () => {

        addimage(image.getAttribute('src'), image.getAttribute('alt'));

    });
});
const addimage = (src, alt) => {
    containerimage.classList.toggle('move');
    imagecont.classList.toggle('show');
    imagecont.src = src;
    copy.innerHTML = alt;
};
closemodal.addEventListener('click', () => {
    containerimage.classList.toggle('move');
    imagecont.classList.toggle('show');
});
