function user(){
    var Fname=document.userinfo.fname.value;
    var Lname = document.userinfo.Lname.value;
    var username = document.userinfo.username.value;
    var password = document.userinfo.password.value;
    var gender = document.userinfo.gender.value;
    console.log(Fname);
    console.log(Lname);
    console.log(username);
    console.log(password);
    console.log(gender);
    document.write(Fname ,Lname, username, password, gender  );
    var userinfo = 'user firstname '+ Fname + 'username '+ username+ 'passworrd' + password + gender
    document.write(userinfo);
}