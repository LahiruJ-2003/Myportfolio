var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
  var sidemenu = document.getElementById("sidemenu");

  function openmenu() {
    sidemenu.style.right = "0";
  }

  function closemenu() {
    sidemenu.style.right = "-200px";
  }

  document.querySelector(".fa-bars").addEventListener("click", openmenu);
  document.querySelector(".fa-xmark").addEventListener("click", closemenu);
});

// Define openmenu function
function openmenu() {
  var sidemenu = document.getElementById("sidemenu");
  sidemenu.style.right = "0";
}

// Define closemenu function
function closemenu() {
  var sidemenu = document.getElementById("sidemenu");
  sidemenu.style.right = "-200px";
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".fa-bars").addEventListener("click", openmenu);
  document.querySelector(".fa-xmark").addEventListener("click", closemenu);
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwqU7hFpGfQC4-2FB1Axdd9Ka-gtB7kcyzYAfj_UNq01wPVsT6LdNcRv-SQ_Q_rZUKL/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      form.reset(); // Reset the form fields
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
    })
    .catch((error) => console.error("Error!", error.message));
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("myBtn");
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  var clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  var scrolledToBottom =
    Math.ceil(scrollPosition + clientHeight) >= scrollHeight;

  if (scrolledToBottom) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .h1-title", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .about-info, .services-list, .work-list, .btn",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-col-1 img, .contact-left", {
  origin: "left",
});
ScrollReveal().reveal(".p1, .p2, .contact-right", { origin: "right" });

// typewriter
const typed = new Typed(".multiple-text", {
  strings: ["UI/UX Engineer", "Graphic Designer"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});
