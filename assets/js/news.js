const header = document.querySelector('.hero-unit');  
const navbar = document.querySelector('.navbar');  

// مختصات هدر  
const sticky = navbar.offsetTop;  

// تابع برای مدیریت چسبندگی نوار ناوبری  
function handleScroll() {  
    if (window.pageYOffset > sticky) {  
        navbar.classList.add('nav-sticky');  
    } else {  
        navbar.classList.remove('nav-sticky');  
    }  
}  

// رویداد اسکرول  
window.onscroll = function() {  
    handleScroll();  
};  


const prices = document.querySelectorAll(".price")
prices.forEach(price=>{
    let arrPrice = []
    let threeNum = ''
    let strPrice = String(price.innerHTML).split('').reverse().join('')
    for (let i = 0; i < strPrice.length; i++) {
        threeNum += strPrice[i]
        if (threeNum.length >= 3) {
            arrPrice.push(threeNum.split('').reverse().join(''))
            threeNum = ''
        }
    }
    if (threeNum) {
        arrPrice.push(threeNum.split('').reverse().join(''))
    }
    price.innerHTML = arrPrice.reverse().join(",") + ' تومان '
})


// Slider Controller

function goLeftSlider(parent, movement, margin) {
    const box = document.querySelector(parent)
    
    margin += 2*movement


    
    if (window.innerWidth/2 > box.offsetLeft + box.offsetWidth + (movement*2)) {
        margin = 0
    }
    box.style.marginRight = margin + "rem"

    return margin
}


function goRightSlider(parent, movement, margin) {
    const box = document.querySelector(parent)
    
    margin -= movement*2

    if (window.innerWidth/2 < box.offsetLeft) {
        margin = 0
    }
    box.style.marginRight = margin + "rem"

    return margin
}

// new Products
let newProductMargin = 0
const leftNewProduct = document.querySelector(".left-new-product")
const rightNewProduct = document.querySelector(".right-new-product")

leftNewProduct.addEventListener("click", ()=>{
    newProductMargin = goLeftSlider(".new-product", 10, newProductMargin)
})

rightNewProduct.addEventListener("click", ()=>{
    newProductMargin = goRightSlider(".new-product", 10, newProductMargin)
})

// news
let newsMargin = 0
const leftNews = document.querySelector(".left-news")
const rightNews = document.querySelector(".right-news")

leftNews.addEventListener("click", ()=>{
    newsMargin = goLeftSlider(".news", 13, newsMargin)
})

rightNews.addEventListener("click", ()=>{
    newsMargin = goRightSlider(".news", 13, newsMargin)
})

// video samples
const listVideo = document.querySelector(".list-video")
document.querySelector(".video").style.height = listVideo.offsetHeight + "px"

const videoDivs = document.querySelectorAll('.list-video div');  
const videoSource = document.getElementById('video');  
videoDivs.forEach(div => {  
    div.addEventListener('click', function() {  
        const textVideo = document.querySelector(".video-title")
        textVideo.textContent = div.querySelector("a").textContent
        const videoUrl = div.getAttribute('data-video');  
        
        videoSource.src = videoUrl;
        const videoElement = videoSource.parentElement;
        
        videoElement.load();  
        videoElement.play();
    });  
});


// articles
let articlesMargin = 0
const leftArticles = document.querySelector(".left-articles")
const rightArticles = document.querySelector(".right-articles")

leftArticles.addEventListener("click", ()=>{
    articlesMargin = goLeftSlider(".articles", 10, articlesMargin)
})

rightArticles.addEventListener("click", ()=>{
    articlesMargin = goRightSlider(".articles", 10, articlesMargin)
})









