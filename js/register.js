const registerNewUserBtn = document.querySelector('#registerNewUserBtn');
const backdrop = document.querySelector('.backdrop');
const newUserForm = document.querySelector('.new-user-form');


const makeBackdrop = () => {
    if (backdrop) {
        backdrop.classList.toggle('visible');
    }
};

const showRegisterForm = () =>{
    if(newUserForm){
        newUserForm.classList.toggle('visible');
        makeBackdrop();
    }
};



registerNewUserBtn.addEventListener('click', showRegisterForm);
backdrop.addEventListener('click', showRegisterForm);