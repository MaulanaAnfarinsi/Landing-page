/**
 * interaksi dengan elemen menu 
 */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

/**
 * interaksi dengan elemen navigasi dan bagian-bagian halaman.
 */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

/**
 * memberikan fungsionalitas untuk tautan navigasi saat pengguna menggulir halaman.
 */
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a [href*=" + id + "]").classList.add("active");
            }
            )
        }
    }
    )
    /**
     * Responsive Menu
     */
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    }
}

 // Ambil semua tombol dengan kelas 'show-video'
 const buttons = document.querySelectorAll('.show-video');

 // Tambahkan event listener untuk setiap tombol
 buttons.forEach(button => {
     button.addEventListener('click', function() {
         // Temukan elemen .projects-info di dalam kotak yang sama
         const info = this.nextElementSibling;

         // Toggle tampilan elemen .projects-info
         if (info.style.display === "none" || info.style.display === "") {
             info.style.display = "block"; // Tampilkan video
         } else {
             info.style.display = "none"; // Sembunyikan video
         }
     });
 });

 
 function toggleVideo(videoId) {
     var video = document.getElementById(videoId);
     if (video.style.display === "none") {
         video.style.display = "block";
     } else {
         video.style.display = "none";
     }
 }
