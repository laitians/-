
// 首页动画效果
document.addEventListener('DOMContentLoaded', function() {
    //未登入限制
    const limit = document.getElementById("login-limit")
    limit.addEventListener('click',function(e){
        console.log('ches');
        alert('登入后即可查看')
        e.preventDefault();
    })

    const headers = document.querySelectorAll('h2');

    headers.forEach(header => {
        gsap.from(header, { 
            opacity: 0, 
            y: -50, 
            duration: 1, 
            scrollTrigger: {
                trigger: header,       
                start: "top 90%",       
            }
        });
    });
    const lists = document.querySelectorAll('ul');
    lists.forEach(list => {
        gsap.from(list, { 
            opacity: 0, 
            y: 50, 
            duration: 1, 
            stagger: 0.2, 
            scrollTrigger: {
                trigger: list,       
                start: "top 90%",       
            }
        });
    });
    const items = document.querySelectorAll('.contact-info li');
    items.forEach(li => {
        gsap.from(li, { 
            opacity: 0, 
            scale: 0.5,  
            duration: 1, 
            scrollTrigger: {
                trigger: li,       
                start: "top 80%",       
            }
        });
    });
    const svgs = document.querySelectorAll('object');
    svgs.forEach(svg => {
        gsap.from(svg, { 
            opacity: 0, 
            scale: 0.5,  
            duration: 1, 
            scrollTrigger: {
                trigger: svg,       
                start: "top 80%",       
            }
        });
    });
});

// 导航栏动画效果
let lastScrollTop = 0;
const nav = document.querySelector('.header'); 

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        gsap.to(nav, { y: -nav.offsetHeight, duration: 0.8 }); 
    } 
   
    else {
        gsap.to(nav, { y: 0, duration: 0.8 }); 
    }

});

// 导航栏动画效果

// kv动画效果
var elements = document.querySelectorAll(".animation");

anime({
    targets: ".animation",
    rotate: "1turn",
    easing: "linear",
    loop: true,
    duration: 3000
});
// kv动画效果

// 组员轮播图动画效果
// 更新成员选择后的显示内容
function updateContent(selectedMember) {
    const contentTitle = document.querySelector('.content-item-title');
    const memberImage = document.getElementById('member-image');
    
    const memberContent = selectedMember.getAttribute('data-content');
    const memberDataImage = selectedMember.getAttribute('data-image');

    gsap.to(contentTitle, { duration: 1, opacity: 0, 
        onComplete: () => {
        contentTitle.innerText = memberContent; 
        gsap.to(contentTitle, { duration: 1, opacity: 1 });
        }
    });

    gsap.to(memberImage, { duration: 1, opacity: 0, 
        onComplete: () => {
        memberImage.src = memberDataImage; 
        gsap.to(memberImage, { duration: 1, opacity: 1 });
        }});
    }

document.querySelectorAll('.member').forEach(member => {
    member.addEventListener('click', function() {
        document.querySelectorAll('.member').forEach(m => m.classList.remove('active'));
        this.classList.add('active');
        updateContent(this);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const groupContent = document.querySelector('.group-content');
    gsap.from(groupContent, {
        duration: 2,
        opacity: 0,
        y: 50,
        ease: "power1.out"
    });
});

// 组员轮播图动画效果
// footer-logo 动画效果

// 等待文档加载完成
window.addEventListener('load', function () {
    const footer = document.querySelector('.footer');
    gsap.set(footer, { autoAlpha: 0 });

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const activationPoint = documentHeight * 0.95;

        if (scrollPosition >= activationPoint) {
            gsap.to(footer, { autoAlpha: 1, duration: 2 });
            window.removeEventListener('scroll', checkScroll);
        }
    }
    window.addEventListener('scroll', checkScroll);
});
document.addEventListener("DOMContentLoaded", function() {
    const logoFooterImg = document.querySelector(".logo-footer img");
    const logoYhjImg = document.querySelector(".logo-footer-yhj img");

    // 为logo添加鼠标悬停效果
    logoFooterImg.addEventListener("mouseenter", function() {
        gsap.to(logoFooterImg, {
            scale: 1.2,  
            duration: 0.5,
            ease: "power1.out"
        });
    });

    logoFooterImg.addEventListener("mouseleave", function() {
        gsap.to(logoFooterImg, {
            scale: 1, 
            duration: 0.5,
            ease: "power1.out"
        });
    });

    logoYhjImg.addEventListener("mouseenter", function() {
        gsap.to(logoYhjImg, {
            scale: 1.1,
            duration: 0.5,
            ease: "power1.out"
        });
    });

    logoYhjImg.addEventListener("mouseleave", function() {
        gsap.to(logoYhjImg, {
            scale: 1,  
            duration: 0.5,
            ease: "power1.out"
        });
    });
});
// footer-logo 动画效果