
function userRegistered(fname,lname,username,password,gender){
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('gender', gender);
}



function user(){
    let Fname=document.userinfo.fname.value;
    let Lname = document.userinfo.Lname.value;
    let username = document.userinfo.username.value;
    let password = document.userinfo.password.value;
    let gender = document.userinfo.gender.value;
    userRegistered(Fname,Lname,username,password,gender);
    document.getElementById('statue').textContent = `user ${username} s'est inscris avec sucess`;
    document.getElementById('login').innerText = `
    username : ${localStorage.getItem('username')}
    password : ${localStorage.getItem('password')}`
}