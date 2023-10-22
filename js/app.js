// SELECT

let btn = document.querySelector('.box button')
let heading = document.querySelector('h1')


function changeHeading() {
    heading.innerHTML = 'I am Fronted Developer'
}

btn.addEventListener('click', changeHeading);

// onbtn
let onbtn = document.querySelector('.onbtn')
let img = document.querySelector('img')


function lighton() {
    img.src = './images/on.jpg'
}

onbtn.addEventListener('click' , lighton);


// offbtn
let offbtn = document.querySelector('.offbtn')



function lightoff() {
    img.src = './images/off.jpg'
}


offbtn.addEventListener('click' , lightoff);