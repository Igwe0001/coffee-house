
// Sticky Navbar
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky-top", window.scrollY > 0);
});

window.addEventListener('scroll', () => {
    let topArrow = document.querySelector('.back-to-top');
    topArrow.classList.toggle('show', window.scrollY > 100)
})


// // jQuery
// $el.animate({ params }, speed);

// // Native
// el.style.transition = 'all ' + speed;
// Object.keys(params).forEach((key) => {
//   el.style[key] = params[key];
// });