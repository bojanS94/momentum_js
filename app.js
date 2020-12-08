//DOM elements

const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus');

//show time 

function showTime() {

    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Output time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add zero to clock

function addZero(t) {

    return (parseInt(t, 10) < 10 ? '0' : '') + t;
}

//set bg based on time of the day

function setBgImage() {

    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {

        //Morning
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {

        //Afternoon
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {

        //Evening
        document.body.style.backgroundImage = "url('./images/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = "#fff";
    }
}

//Get name function

function getName() {

    if (localStorage.getItem('name') === null) {

        name.textContent = '[Enter Name]';
    } else {

        name.textContent = localStorage.getItem('name');
    }
}

//Set name

function setName(e) {

    if (e.type === 'keypress') {

        //Check if enter is pressed

        if (e.which == 13 || e.keyCode == 13) {

            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {

        localStorage.setItem('name', e.target.innerText);
    }
}

//Get focus function

function getFocus() {

    if (localStorage.getItem('focus') === null) {

        focus.textContent = '[Enter Focus]';
    } else {

        focus.textContent = localStorage.getItem('focus');
    }
}

//Set focus

function setFocus(e) {

    if (e.type === 'keypress') {

        //Check if enter is pressed

        if (e.which == 13 || e.keyCode == 13) {

            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    } else {

        localStorage.setItem('focus', e.target.innerText);
    }
}

//Event listeners

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run function
showTime();
setBgImage();
getName();
getFocus();





