const slider = document.querySelector('.slider');
const sliderStyles = getComputedStyle(slider);
const slides = document.querySelectorAll('.slide');
const slideWidth = document.querySelector('.slide').clientWidth;
const arrowForward = document.querySelector('.arrow-forward');
const arrowBackward = document.querySelector('.arrow-backward');

let imageIndex = 0;
let translateValue = sliderStyles.getPropertyValue('--translateValue');

const back = () => {
    if (imageIndex === 0) {
        imageIndex = slides.length -1;
        translateValue = -1 * (imageIndex) * slideWidth;
        //break;
    } else {
        imageIndex--;
        translateValue = translateValue + slideWidth;
    }
    //Update the translateValue

    console.log(translateValue);

    slider.style.setProperty('--translateValue', `${translateValue}px`);
};

const forward = () => {
    imageIndex++;

    if (imageIndex === slides.length) {
        imageIndex = 0;
        translateValue = 0;
        //break;
    } else {
        translateValue = translateValue - slideWidth;
    }
    //Update the translateValue

    console.log(translateValue);

    slider.style.setProperty('--translateValue', `${translateValue}px`);
};

arrowForward.addEventListener(
    'click',
    (e) => forward() //Increment the imageIndex

);

arrowBackward.addEventListener(
    'click',
    (e) => back() //Increment the imageIndex
);

document.addEventListener(
    'keydown',
    (e) => {
        console.log(e.code);
        switch (e.code){
            case "ArrowRight": forward();
                break;
            case "ArrowLeft": back();
                break;
            case "ArrowUp": forward();
                break;
            case "ArrowDown": back();
                break;
            case "Space": forward();
                break;
        }
    }
);

