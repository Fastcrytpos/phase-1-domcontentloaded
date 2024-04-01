// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    console.log(document.querySelector('#text').textContent)
    document.querySelector('#text').textContent="This is really cool!"
    console.log(document.querySelector('#text').textContent)
});
console.log(document.querySelector('#text').textContent)
