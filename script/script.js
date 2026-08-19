// script the logic baby
let imgArray = [
  "buitymounten.jpg",
  "cityanime.jpg",
  "clouds.png",
  "birdtree.jpg",
  "earth.jpg",
  "snowwater.jpg",
  "waterbird.jpg",
  "night.jpg",
  "bird.jpg",
  "snowleopard.jpg",
  "mounten.jpg",
  "whitetree.jpg",
];

function init() {
  for (let i = 0; i < imgArray.length; i++) {
    document.getElementById("foto_section").innerHTML += `<img onclick="openDialog(${i})" src="./assets/images/${imgArray[i]}" alt="" />`;
  }
}

const dialogRef = document.getElementById("dialog_section");
function openDialog(i) {
  dialogRef.showModal();
  document.getElementById("dialog_section").innerHTML = `<div class="big_foto_mode">
    <div class="img_info">
    <p>Alaska-810433_1280</p>
    <button onclick="closeDialog()" class="close_button"><img src="./assets/icons/close.svg" alt="" /></button>
    </div>
    <img src="./assets/images/${imgArray[i]}" alt="" />
    <div class="back_forward">
    <button onclick="back_button()" class="arrow_button"><img src="./assets/icons/left.svg" alt="" /></button>
    <p>1/12</p>
    <button onclick="foward_button()" class="arrow_button"><img src="./assets/icons/right.svg" alt="" /></button>
    </div>
    </div>`;
}
function closeDialog() {
  dialogRef.close();
}

function back_button() {
  console.log("back");
}
function foward_button() {
  console.log("forward");
}
