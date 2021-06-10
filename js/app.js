const imgToChange = document.querySelector('#changeImage');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileVersionBtn = document.querySelector('#mobileMenu');
const backdrop = document.querySelector('.backdrop');
const mobileNavExitBtn = document.querySelector('#mobileNavExitBtn');

let g = 1;
setInterval(() => {
    g++;
    imgToChange.style.backgroundImage = `url('imgs/main-backgroud${g}.jpg')`;
    imgToChange.style.transitionDuration = "1s";
    if (g === 3) {
        g = 0;
    }
}, 4000);

const makeBackdrop = () => {
    if (backdrop) {
        backdrop.classList.toggle('visible');
    }
};

const showMobileNavbar = () => {
    if (mobileMenu) {
        mobileMenu.classList.toggle('visible');
        makeBackdrop();
    }
};

// const hideMobileMenu = () =>{
//     if(mobileVersionBtn.className == "mobile-exit visible"){
//         console.log('hi');
//     }
// };


mobileVersionBtn.addEventListener('click', showMobileNavbar);
// backdrop.addEventListener('click', showMobileNavbar);
mobileNavExitBtn.addEventListener('click', ()=>{
    // if(mobileMenu){
    //     mobileMenu.classList.toggle("hide");
    // }
    showMobileNavbar();
});




const aboutUsBtn = document.querySelectorAll('.about-us-btn');
const outOfferBtn = document.querySelectorAll('.our-offer-btn');
const contactBtn = document.querySelectorAll('.contact-btn');
const aboutUsArea = document.querySelector('#aboutUs');
const offersArea = document.querySelector('.offers');
const contactArea = document.querySelector('.contact');

aboutUsBtn.forEach(x => {
    x.addEventListener('click', () => {
        if (mobileMenu.classList == "mobile-menu visible") {
            showMobileNavbar();
        }
        aboutUsArea.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});

outOfferBtn.forEach(x => {
    x.addEventListener('click', () => {
        if (mobileMenu.classList == "mobile-menu visible") {
            showMobileNavbar();
        }
        offersArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

contactBtn.forEach(x => {
    x.addEventListener('click', () => {
        if (mobileMenu.classList == "mobile-menu visible") {
            showMobileNavbar();
        }
        contactArea.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});


const sendFormBtn = document.querySelector('.contact-form_button');
const alert = document.querySelector('.correct-send-form');
const closeAlert = document.querySelector('.close-alert');
const userInputs = document.querySelectorAll('.user-inputs');

const clearInputsAfterSend = () => {
    userInputs.forEach(x => {
        x.value = "";
    })
};


const showAlert = () => {
    alert.classList.toggle('visible');
};

const correctFormSend = () => {
    makeBackdrop();
    showAlert();
    clearInputsAfterSend();
};

sendFormBtn.addEventListener('click', correctFormSend);
closeAlert.addEventListener('click', correctFormSend);

const slideUp = document.querySelector('.slider-up');
slideUp.addEventListener('click', () =>{
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
})


const offerBtns = document.querySelectorAll('.order-button');
const selectedOfferBox = document.querySelector('.selected-offer-alert');
const confirmOfferBtn = document.querySelector('.selected-offer__confirm');
const declineOfferBtn = document.querySelector('.selected-offer__decline');


const showOfferAlert = () =>{
    selectedOfferBox.classList.toggle('visible');
    makeBackdrop();
};


confirmOfferBtn.addEventListener('click', () =>{
    window.location.replace('loginPage.html');
});

declineOfferBtn.addEventListener('click', showOfferAlert);

offerBtns.forEach(x =>{
    x.addEventListener('click', event => {
        showOfferAlert();
    })
});

const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', () => console.log('hi'));