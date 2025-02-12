function hideLeftNavbar() {
  let leftNavbar =   document.getElementById("leftNavbarContent")
  if(leftNavbar.style.display === "none"){
    leftNavbar.style.display = "flex";
  }else{
    leftNavbar.style.display = "none";
  }
}

leftNavbarBtn = document.querySelector("#hideLeftNavbarBtn");
leftNavbarBtn.addEventListener("click",hideLeftNavbar);

// resetting leftNavbar on larger screens
window.addEventListener("resize", function () {
  let leftNavbar = document.getElementById("leftNavbarContent");

  if (window.innerWidth > 780) {
    leftNavbar.style.display = "flex";  
  }
});