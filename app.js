document.addEventListener("submit" , (event)=>{
  console.log("Validating")
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  let request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/authorize");
  //request.send(new FormData(formElement));
  console.log("Validated")

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(`user=${user}&password=${password}`);

  event.preventDefault()
})

const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");

    acceptBtn.onclick = ()=>{
      //setting cookie for 1 month, after one month it'll be expired automatically
      document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
      if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide"); //hide cookie box
      }else{ //if cookie not set then alert an error
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");