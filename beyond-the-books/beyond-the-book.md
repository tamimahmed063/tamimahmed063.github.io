---
layout: default
title: tamim063
extra_script: |
  <script>
      document.addEventListener("DOMContentLoaded", () => {
          const images = document.querySelectorAll('.album-row img');
          const sizes = ['300px', '300px', '300px'];
          images.forEach(img => {
              const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
              img.style.maxWidth = randomSize;
          });
      });
  </script>
---

<div class="hero">
    <video autoplay muted loop playsinline class="background-video">
        <source src="files/VID_20191205_164628.mp4" type="video/mp4">
    </video>
    <div class="overlay">
        <h1>BEYOND THE BOOKS</h1>
        <div class="arrow">
            <span>TRAVELLING THE WORLD</span>
            <span class="subtext">Photography | Exploration | Favorites</span>
        </div>
    </div>
</div>

<section class="likings-section">
    <h2>My Favorites</h2>
    <div class="likings-container">
        <div class="liking-item">
            <img src="files/snape.png" alt="books">
            <h3>Severus Snape</h3>
            <p>When I was 10–12 years old, I first started with the fantasy novel series of Harry Potter by J.K. Rowling. I was really intrigued by the book of <b>Half Blood Prince</b>, one of my favorite characters till now. Severus Snape's story is one of redemption, sacrifice, and the complexity of human nature. He is a character who lived in the gray areas between good and evil, driven by love, guilt, and a desire to atone for his mistakes.</p>
        </div>
        <div class="liking-item">
            <img src="files/artcell.jpg" alt="Music">
            <h3>Music</h3>
            <p>I believe <br><b>"Music should be your escape"</b><br> I am a melomaniac with the Bangladeshi metal band <b>ARTCELL</b>. <a href="https://www.youtube.com/watch?v=ECh1rS2ipJw" target="_blank" rel="noopener" style="color:#000;">Dukkho Bilash</a> is the most favorite to me. Their songs reflect the struggles, aspirations and give voice to a generation's hopes, frustrations, and dreams.</p>
        </div>
        <div class="liking-item">
            <img src="files/dragon.jpg" alt="anime">
            <h3>Movie, TV Series, Animation</h3>
            <p>My favorite movie character is Robert Downey Jr. as Iron Man. I love to watch Marvel produced movies. Also, I love to watch Tom Cruise and Christian Bale. One of my favorite TV series is The Big Bang Theory. Its really fun to watch Dragon Ball series. Goku is a resemblance to me as Never Give Up.</p>
        </div>
        <div class="liking-item">
            <img src="files/k.jpg" alt="Travel">
            <h3>Travel</h3>
            <p>Exploring places and the beauty of nature have always been my source of a way to reconnect with myself. I love to travel solo — pick up your backpack, travel wherever you want. I have travelled all over Bangladesh and visited India. Currently in Pullman, WA and would love to explore the US!</p>
        </div>
    </div>
</section>

<section class="photography-album">
    <h2>Photography Album</h2>
    <div class="album">
        <div class="album-row">
            <img src="files/t0.jpg" alt="Photo 1">
            <img src="files/t1.jpg" alt="Photo 2">
            <img src="files/t2.jpg" alt="Photo 3">
            <img src="files/t2_1.jpg" alt="Photo 4">
        </div>
        <div class="album-row">
            <img src="files/t3.jpg" alt="Photo 5">
            <img src="files/t4.jpg" alt="Photo 6">
            <img src="files/t5.jpg" alt="Photo 7">
        </div>
        <div class="album-row">
            <img src="files/t6.jpg" alt="Photo 8">
            <img src="files/t7.jpg" alt="Photo 9">
            <img src="files/t8.jpg" alt="Photo 10">
        </div>
        <div class="album-row">
            <img src="files/t9.jpg" alt="Photo 11">
            <img src="files/t10.jpg" alt="Photo 12">
        </div>
    </div>
</section>
