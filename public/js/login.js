const loginForm = document.getElementById('login-form');
const useremail = document.getElementById('user-email');
const userpassword = document.getElementById('user-password');

//Send POST to API to sign up
async function loginUser(e){
    e.preventDefault();

    if(useremail === '' || userpassword === ''){
        alert('Please fill in the fields');
    }

    const sendBody = {
        email : useremail.value,
        password : userpassword.value
    };

    try{
        const res = await fetch('/api/demo/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(sendBody)
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            let token = res.token;

            localStorage.setItem('user',JSON.stringify(res));
            alert('Login Successfull');
            window.location.href = './welcome.html';
            
        })
        .catch(err => console.log(err));
        
    }catch(err){
        alert(err);
        return err;
    }
}

loginForm.addEventListener('submit',loginUser);