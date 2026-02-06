const hamburger = document.getElementById("hamburger")
const mobileNav = document.getElementById("mobile-nav")

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    mobileNav.classList.toggle('active')
})

document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// gsap animation
// ヒーローエリア
const tl = gsap.timeline();
tl
  .from(".hero", {
    opacity: 0,
    duration: 0.8
  })
  .from(".hero__title", {
    opacity: 0,
    y: 40,
    duration: 0.8
  }, "-=0.3");

// 商品ラインナップ
gsap.from(".product-link", {
  scrollTrigger: {
    trigger: ".product",
    start: "top 20%",
    // markers: true
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out"
});



