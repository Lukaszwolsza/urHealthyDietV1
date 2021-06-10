const getUserLogin = () => document.querySelector('#userLogin').value;
const getUserPassword = () => document.querySelector('#userPass').value;
const loginBtn = document.querySelector('.user-login-form__loginbtn');

const checkData = () =>{
    console.log('user login = ' + getUserLogin());
    console.log('user password = ' + getUserPassword());
    if(getUserLogin() === 'admin' && getUserPassword() === 'admin'){
        console.log('youre logged');
    } else{
        console.log('bad data');
    }
};

loginBtn.addEventListener('click', checkData);