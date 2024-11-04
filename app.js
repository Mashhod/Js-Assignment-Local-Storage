function setUserData() {

    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    let userData = {name: userName, email: userEmail, password: userPassword};

    let users = JSON.parse(localStorage.getItem('users'));

    // console.log(users);
    

    if (users) {
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
    //   console.log(users)

   
    }else{
       localStorage.setItem("users", JSON.stringify([userData]));


    }

    // localStorage.setItem("users", JSON.stringify(users))
    // localStorage.setItem("users", JSON.stringify(userData))

    console.log(users);
    // console.log(userData)
 


    // if (users[0].email == userEmail) {
    //     alert("Already");
    
    // }else{
    //     alert("Success Full Sign Up");
    // }


    let notMached = true;

    for(let i=0; i < users.length; i++){
        if(users[i].email != userEmail){
            notMached = false;
            if(userPassword != users[i].password || userPassword == users[i].password){
                alert("Success")
            
            }else if(users[i].email == userEmail) {
                alert("Already!");

            }
            
            
            else{
                alert("Invalid Password")
            }
            break;
        }
    }

    if(notMached){
        alert("Already!");
    }

    


        
       
    }







function checkUser(){
    let userEmail = document.getElementById("inpEmail").value;
    let userPass = document.getElementById("inpPassword").value;
    let allUsers = JSON.parse(localStorage.getItem("users"));

    let notMached = true;

    for(let i=0; i < allUsers.length; i++){
        if(allUsers[i].email == userEmail){
            notMached = false;
            if(userPass == allUsers[i].password){
                alert("Success")
                window.location.href = "./dashboard.html"
            }else{
                alert("Invalid Password")
            }
            break;
        }
    }

    if(notMached){
        alert("Don't have an account? Please Sign up!");
    }

}











// function checkUser() {
//     let userEmail = document.getElementById("inp-email").value;
//     let userPass = document.getElementById("inp-password").value;
//     let allUsers = JSON.parse(localStorage.getItem("users"));


//     let notMached = true;


//     for (let i=0; i < allUsers.length; i++) {

//         if(allUsers[0].email == userEmail) {

//             notMached = false;
//             if(userPass == allUsers[0].password) {
//                 alert("Success");
//                 window.location.href = "./dashboard.html"

//             }else{
//                 alert("Invalid Password");
//             }

//             break;
//         }

//     };

//     if(notMached) {
      
//     alert("Don't have an account? Please Sign up!")
//     }

//     console.log(allUsers);


   


    
// };


// function checkUser() {
//     let userEmail = document.getElementById("inp-email").value;
//     let userPass = document.getElementById("inp-password").value;
//     let userData = JSON.parse(localStorage.getItem("users"));

//     console.log(userEmail, userPass, userData);

 

//     if(userData) {
//         if(userEmail == userData.email){
//             if(userPass == userData.password){
//                 alert("Success")
//                 window.location.href = "./dashboard.html"
            
//             }else{
//                 alert("Invalid Password")
//             }

//         }else if (userEmail != userData.email || userPass!= userData.password) {
//             alert("Please Register Now")

//         }
        
        
        
//         else{
//             alert("Invalid Email")
//         }

    
//     }else{
//         alert("Please Register User First!")
//     }



    
// };