console.log("Working Fine");

// script for loading animation start
var myVar;
function myFunction() {
myVar = setTimeout(showPage, 2000);
}
function showPage() {
document.getElementsByClassName("spinner")[0].style.display = "none";
document.getElementsByClassName("myDiv")[0].style.display = "block";
}
// script for loading end 