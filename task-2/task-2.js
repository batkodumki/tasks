/* 7 завдання */

let imgs = document.querySelectorAll("img");


let info = document.getElementById("info");


let now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();


if (day < 10) day = "0" + day;
if (month < 10) month = "0" + month;
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;

let dateString = day + "." + month + "." + year + " " + hours + ":" + minutes;


info.innerText = "Кількість картинок: " + imgs.length + " | Дата: " + dateString;


/* 8 завлання */

let modal = document.getElementById("modal");
let big = document.getElementById("big");
let close = document.getElementById("close");


document.querySelectorAll(".grid img").forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    big.src = img.src;
  }
});


close.onclick = () => {
  modal.style.display = "none";
};

