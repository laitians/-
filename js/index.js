gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scrollDist",
      start: "0 0",
      end: "100% 100%",
      scrub: 2,
    },
  })
  .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
  .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
  .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
  .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
  .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
  .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
  .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0)
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scrollDist",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 2,
      duration: 2,
    },
  })
  .fromTo(".login", { y: 234 }, { y: 462 }, 1)
  .fromTo(".logo", { y: -500}, { y: 150,}, 2)


const logins = document.getElementById("login");
logins.addEventListener("click", () => {
  setTimeout(() => {
    alert("跳转至登录页面");
    window.location.href = "../html/login.html";
  }, 500);
});

//触底加载
// window.addEventListener('scroll', function () {
//   if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight+700) {
//     window.location.href = '../html/login.html';
//   }
// });