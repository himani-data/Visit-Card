// document.getElementById("flipToBack").addEventListener("click", function(e) {
//     e.stopPropagation();
//     document.querySelector(".card-inner").classList.add("flipped");
// });

// document.getElementById("flipToFront").addEventListener("click", function(e) {
//     e.stopPropagation();
//     document.querySelector(".card-inner").classList.remove("flipped");
// });
// function flipCard() {
//     document.getElementById("card").classList.toggle("flipped");
// }
document.getElementById("flipToBack").addEventListener("click", function(e) {
    e.stopPropagation();
    document.querySelector(".card").classList.add("flipped");
});

document.getElementById("flipToFront").addEventListener("click", function(e) {
    e.stopPropagation();
    document.querySelector(".card").classList.remove("flipped");
});
