document.querySelector("form").addEventListener("submit",carddetails);
var userData= JSON.parse(localStorage.getItem("usercred")) ||[]
function carddetails(){
      event.preventDefault();

      var userObj={
            card:document.querySelector("#card").value,
            expiry:document.querySelector("#exp").value,
            cvv:document.querySelector("#cvv").value,
            otp:document.querySelector("#otp").value,
      }

      // console.log(userObj)
      userData.push(userObj);

      localStorage.setItem("userCred",JSON.stringify(userData))
}