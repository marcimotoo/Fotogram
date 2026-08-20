// script the logic baby
const imgObjects = [
  {
    src: "./assets/images/buitymounten.jpg",
    title: "Mountain Landscape",
    alt: "Mountain landscape surrounded by clouds",
  },
  {
    src: "./assets/images/cityanime.jpg",
    title: "Anime City",
    alt: "Colorful anime-style city surrounded by tall buildings",
  },
  {
    src: "./assets/images/clouds.png",
    title: "Cloudy Sky",
    alt: "White clouds in a blue sky",
  },
  {
    src: "./assets/images/birdtree.jpg",
    title: "Bird on a Tree",
    alt: "Bird sitting on a tree branch",
  },
  {
    src: "./assets/images/earth.jpg",
    title: "Earth",
    alt: "View of Earth from space",
  },
  {
    src: "./assets/images/snowwater.jpg",
    title: "Snowy Landscape",
    alt: "Snow-covered landscape next to calm water",
  },
  {
    src: "./assets/images/waterbird.jpg",
    title: "Bird on the Water",
    alt: "Bird standing on the surface of the water",
  },
  {
    src: "./assets/images/night.jpg",
    title: "Night Sky",
    alt: "Dark night sky with stars",
  },
  {
    src: "./assets/images/bird.jpg",
    title: "Sweet Bird",
    alt: "Bird sitting outdoors",
  },
  {
    src: "./assets/images/snowleopard.jpg",
    title: "Snow Leopard",
    alt: "Snow leopard resting in a snowy landscape",
  },
  {
    src: "./assets/images/mounten.jpg",
    title: "Mountain",
    alt: "Large mountain surrounded by a natural landscape",
  },
  {
    src: "./assets/images/whitetree.jpg",
    title: "White Tree",
    alt: "Tree covered in white snow",
  },
];
// ${imgObjects[i].src}
// ${imgObjects[i].title}
// ${imgObjects[i].alt}
function getFotoSectionTemplate(i) {
  return `<button class="imgButton" aria-haspopup="dialog" aria-controls="foto_section" onclick="openDialog(${i})">
    <img src="${imgObjects[i].src}" alt="${imgObjects[i].alt}"/>
  </button>`;
}
function getBigPictureTemplate(i) {
  return `<article class="big_foto_mode">
    <div class="img_info">
      <h2 id="dialogTitle">${imgObjects[i].title}</h2>
      <button aria-label="Dialog closed" onclick="closeDialog()" class="close_button">
        <img src="./assets/icons/close.svg" alt="x symbol" />
      </button>
    </div>
    <div class="bigImage">
    <img src="${imgObjects[i].src}" alt="${imgObjects[i].alt}" />
    </div>
    <div class="back_forward">
      <button onclick="back_button(${i - 1})" class="arrow_button">
        <img src="./assets/icons/left.svg" alt="left button arrow" />
      </button>
      <p>${i + 1}/12</p>
      <button onclick="foward_button(${i + 1})" class="arrow_button">
        <img src="./assets/icons/right.svg" alt="right button arrow" />
      </button>
    </div>
  </article>`;
}

const contentRef = document.getElementById("foto_section");
function init() {
  for (let i = 0; i < imgObjects.length; i++) {
    contentRef.innerHTML += getFotoSectionTemplate(i);
  }
}

const dialogRef = document.getElementById("dialog_section");
function openDialog(i) {
  dialogRef.showModal();
  dialogRef.innerHTML = getBigPictureTemplate(i);
}
function closeDialog() {
  dialogRef.close();
}

function back_button(i) {
  if (i >= 0) {
    dialogRef.innerHTML = getBigPictureTemplate(i);
  }
}
function foward_button(i) {
  if (i <= 11) {
    dialogRef.innerHTML = getBigPictureTemplate(i);
  }
}
