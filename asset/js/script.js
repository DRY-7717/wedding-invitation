let containerName = document.querySelector(".section-1 .container_name");
let banyan = document.querySelector(".section-1  .banyan_tree");
let bigBushes = document.querySelector(".section-1  .big_bushes");
let birds = document.querySelector(".section-1 .birds_on_tree");
let lastScrollTop = 0;
let userclickbutton = false;
let iconWrapper = document.querySelector(".audio-icon-wrapper");
let lihatUndangan = document.querySelector(".lihat-undangan");
let isPlaying = false;
let nav = document.querySelector('.wedding-nav')
const audioIcon = document.querySelector('.audio-icon-wrapper i')
const song = document.getElementById("song");

window.addEventListener("scroll", () => {
  handleClickButton();
  let value = window.scrollY;
  containerName.style.marginTop = value * 2.5 + "px";
  containerName.style.zIndex = 2;

  banyan.style.left = `-${value * 1.5}px`;
  birds.style.display = `none`;
  bigBushes.style.right = `-${value * 1.5}px`;
  if (value < lastScrollTop) {
    containerName.style.zIndex = 10;
    setTimeout(() => {
      birds.style.display = `block`;
    }, 200);
  }
  lastScrollTop = value;
});

function handleClickButton() {
  if (!userclickbutton) {
    window.scrollTo(0, 0);
  }
}

lihatUndangan.addEventListener("click", () => {
  userclickbutton = true;
  window.removeEventListener("scroll", handleClickButton);
  nav.style.display = 'block'
  playAudio();
});


function playAudio() {
  song.play();
  iconWrapper.style.display = "flex";
  isPlaying = true;
}

iconWrapper.addEventListener('click', () => {
    if (isPlaying === true) {
        song.pause()
        audioIcon.classList.remove('bi-disc')
        audioIcon.classList.add('bi-pause-circle')
    } else {
        song.play()
        audioIcon.classList.add('bi-disc')
        audioIcon.classList.remove('bi-pause-circle')
    }

    isPlaying = !isPlaying
})

const tanggalTujuan = new Date("Feb 4, 2024 09:00:00").getTime();
let hitungMundur = setInterval(() => {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const day = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const hour = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((selisih % (1000 * 60)) / 1000);

  let hari = document.querySelector(".hari");
  let jam = document.querySelector(".jam");
  let menit = document.querySelector(".menit");
  let detik = document.querySelector(".detik");

  hari.innerHTML = day;
  jam.innerHTML = hour;
  menit.innerHTML = minute;
  detik.innerHTML = second;

  if (selisih < 0) {
    clearInterval(hitungMundur);
    hari.innerHTML = "00";
    jam.innerHTML = "00";
    menit.innerHTML = "00";
    detik.innerHTML = "00";
  }
}, 1000);


const urlParams = new URLSearchParams(window.location.search);
const namaTamuUndangan = document.querySelector('.nama-tamu-undangan')
const nama = urlParams.get('to') || '-'

namaTamuUndangan.innerHTML = nama

console.log(nama);