menu.onclick = function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}

// // window.onload = function(){
// //     let x = document.querySelector("#myTopnav");
// //     document.querySelector("#menu").onclick = function(){
// //          x.classList.toggle('responsive');
// //     }
// // }

// window.onload = function menuF() {
//     var menu = document.getElementById('myTopnav');
//     menu.onclick = function myFunction() {
//      if (menu.className === 'topnav') {
//       menu.className += ' responsive';
//      } else {
//       menu.className = 'topnav';
//      }
//     }
//     }