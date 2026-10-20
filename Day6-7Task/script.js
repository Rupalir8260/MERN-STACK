const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-i");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
   document.body.classList.toggle("dark-theme");

 if (document.body.classList.contains("dark-theme")) {
if (themeIcon) {
    themeIcon.className = "fas fa-sun";
  }
} else {
 if (themeIcon) {
    themeIcon.className = "fas fa-moon";
}
}
 });
}

//  Smooth Scrolling nav
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

 if (targetId && targetId.length > 1) {
     const target = document.querySelector(targetId);

if (target) {
 event.preventDefault();
 target.scrollIntoView({
behavior: "smooth",
block: "start"
});
 }}   
 });
});

// Back to top btn
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
   backToTop.addEventListener("click", () => {
   window.scrollTo({
   top: 0,
   behavior: "smooth"
 });
});
}

// Hide Back to Top btn
if (backToTop) {
    window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
     backToTop.style.display = "block";
  } else {
            backToTop.style.display = "none";
}
});
};














// window.addEventListener('scroll',()=>{
if (window.scrollY > 50) {
    header.classList.add('scrolled')
}
else {
    header.classList.remove('scrolled');
}
})
document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
    })
})
