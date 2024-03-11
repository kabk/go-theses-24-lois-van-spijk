window.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');

    // $(document).ready(function() {
    // window.onscroll = scrollPage;
    main.onscroll = scrollPage;

  const navbar = document.getElementById("navbar");

  

  function scrollPage() {
    // if (window.pageYOffset >= 700) {
      if (main.firstElementChild.getBoundingClientRect().top <= -700) {
      navbar.classList.remove("is-hidden")
    } else {
      navbar.classList.add("is-hidden");
      navbar.classList.add("closed");
    }
  }

  const toggleMenu = () => {
    navbar.classList.toggle('closed');
  }

  const menutoggle = document.querySelector('#navbar a.toggle');
  menutoggle.addEventListener('click', toggleMenu);
  // } );


  // function showImage(imageId, event) {
  //   event.preventDefault();
  //   var image = document.getElementById(imageId);
  //   if (image.style.display === "none") {
  //     image.style.display = "block";
  //   } else {
  //     image.style.display = "none";
  //   }
  // }

  
  //   const section1 = document.querySelector('.section1');
  // const section2 = document.querySelector('.section2');
  // const section3 = document.querySelector('.section3');
  // const section4 = document.querySelector('.section4');
  // const scrollTop = window.scrollY;

  // // Change colors at certain scroll points
  // if (scrollTop < section2.offsetTop) {
  //     document.body.className = 'section1';
  // } else if (scrollTop < section3.offsetTop) {
  //     document.body.className = 'section2';
  // } else if (scrollTop < section4.offsetTop) {
  //     document.body.className = 'section3';
  // } else {
  //     document.body.className = 'section4';
  // }
  // }

  // const imageModalLinks = document.querySelectorAll('.to-modal-image')

  // imageModalLinks.forEach(function (imageModalLink) {


  //   imageModalLink.addEventListener('click', function (e) {


  //     var imageModalLinkId = this.getAttribute('data-link-id')

  //     var imageModalTarget = document.querySelectorAll('[data-target-id="' + imageModalLinkId + '"]');

  //     imageModalTarget[0].classList.remove('is-hidden');

  //     e.preventDefault();

  //   })

  // })

  let consolecounter = 0;
  let chapterCounter = 0;


  document.querySelector('main').addEventListener('scroll', function () {

    if (document.querySelector(".abstract").getBoundingClientRect().top > 120) {
        chapterCounter = 0;
    }
    if (document.querySelector(".preperation").getBoundingClientRect().top < 120) {
        chapterCounter = 0.5;
    }
    if (document.querySelector(".chapter-1").getBoundingClientRect().top < 120) {
        chapterCounter = 1;
    }
    if (document.querySelector(".chapter-2").getBoundingClientRect().top < 120) {
        chapterCounter = 2;
    }
    if (document.querySelector(".chapter-3").getBoundingClientRect().top < 120) {
        chapterCounter = 3;
    }
    if (document.querySelector(".intergration").getBoundingClientRect().top < 120) {
        chapterCounter = 4;
    }
    if (document.querySelector(".chapterHeadline.fisherprice").getBoundingClientRect().top < 120) {
        chapterCounter = 5;
    }
    if (document.querySelector(".chapterHeadline.reframing").getBoundingClientRect().top < 120) {
        chapterCounter = 6;
    }


    //CHAPTER "MOODTEXT"
    if (chapterCounter == 0) {
        currentColor = "background";
        currentTextColor = "#00000e";
        document.querySelectorAll(".chapterTitle").forEach(function (chapterTitles) {
            chapterTitles.style.color = "#bfbfbf";
        })
        document.querySelector("#console").className = "";
        document.querySelector("#console").classList.toggle(currentColor);
        document.querySelector("h1#headline").className = "";
        document.querySelector("h1#headline").classList.toggle(currentColor);
        document.querySelector(':root').style.setProperty('--main-font-color', '#00000e');
        document.querySelector('.consoleText').textContent = ">APPLIED DEFAULT COLORING.";

      }
  })


  // const imageModals = document.querySelectorAll('.modal-image')

  // imageModals.forEach(function (imageModal) {


  //   imageModal.addEventListener('click', function (e) {


  //     this.classList.add('is-hidden');

  //   })

  // });
})