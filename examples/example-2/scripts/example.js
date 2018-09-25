const area = document.querySelector('section');
const text = area.querySelector('h1');
const distance = 500;

const tornado = (e) => {
    const { offsetWidth: width, offsetHeight: height } = area;
    //receives object area, accesses offsetWidth and sets width equal to it same with height
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xChange = Math.round((x / width * distance) - (distance / 2));
    const yChange = Math.round((y / height * distance) - (distance / 2));

    text.style.textShadow = `
        ${xChange}px ${yChange}px 0 #f00,
        ${xChange * -1}px ${yChange}px 0 #0f0,
        ${yChange}px ${xChange * -1}px 0 #00f,
        ${yChange}px ${xChange}px 0 #fff
    `;
};

area.addEventListener('mousemove', tornado);