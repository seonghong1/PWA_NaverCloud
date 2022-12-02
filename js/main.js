const header = document.querySelector('.header')
const open_menu = document.querySelector('.header_nav .menu_btn')
const header_menu = document.querySelector('.header_menu_wrap')
const section1 = document.querySelector('.section1')
const section1_ani = document.querySelector('sec1_ani')
const section1_title = document.querySelector('section1 h1')
//header
window.addEventListener('scroll', function () {
    if (section1.offsetTop < window.scrollY) {
        header.classList.add('on')
    } else {
        if (!header_menu.classList.contains('active')) {
            header.classList.remove('on')
        }

    }
})
open_menu.addEventListener('click', function () {
    header.classList.remove('on')
    header.classList.toggle('on')
    header_menu.classList.toggle('active')
})
//visual swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
});
const swiper2 = new Swiper('.swiper_2', {
    slidesPerView: 'auto',
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
});
//section1
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
let num_item1 = 0
let num_item2 = 0
let num_item3 = 0
let num_item4 = 0
/*
function incNums(text, initial_num, num){
    text.innerHTML = Math.floor(initial_num)
    initial_num += (num / 100)
    if(initial_num > num){
        text.innerHTML = num
        console.log('aaaaa')
        return
    }
}
window.addEventListener('scroll', function () {
    if (window.scrollY > section1.offsetTop - (section1.clientHeight / 3)) {
        section1.classList.add('on')
        setInterval(incNums(num1, 0, 7400), 5)
        setInterval(incNums(num2, 0, 2846), 5)
        setInterval(incNums(num3, 0, 477), 5)
        setInterval(incNums(num4, 0, 2), 5)
        
    }
})
*/

function incNum1() {
    num1.innerHTML = num_item1
    num_item1 += Math.floor(74)
    if (num_item1 > 7400) {
        num1.innerHTML = 7400
        return
    }
}
function incNum2() {
    num2.innerHTML = Math.floor(num_item2)
    num_item2 += 28.46
    if (num_item2 > 2846) {
        num2.innerHTML = 2846
        return
    }
}
function incNum3() {
    num3.innerHTML = Math.floor(num_item3)
    num_item3 += 4.77
    if (num_item3 > 477) {
        num3.innerHTML = 477
        return
    }
}
function incNum4() {
    num4.innerHTML = Math.floor(num_item4)
    num_item4 += 0.02
    if (num_item4 > 2) {
        num4.innerHTML = 2
        return
    }
}
window.addEventListener('scroll', function () {
    if (window.scrollY > section1.offsetTop - (section1.clientHeight / 3)) {
        setInterval(incNum1, 5)
        setInterval(incNum2, 5)
        setInterval(incNum3, 5)
        setInterval(incNum4, 5)
        section1.classList.add('on')
    }
})
if (num_item1 > 10000) {
    clearInterval(set1())
    clearInterval(set2())
    clearInterval(set3())
    clearInterval(set4())
}

//section2
const sec2 = document.querySelector('.section2')
const sec2_inner = document.querySelector('.section2 .inner')
window.addEventListener('scroll', function () {
    if (window.scrollY > (sec2.offsetTop - sec2.clientHeight / 2)) {
        sec2_inner.classList.add('on')
    }
})


//section3
const sec3 = document.querySelector('.section3')

window.addEventListener('scroll', function () {
    if (window.scrollY > sec3.offsetTop - sec3.clientHeight / 2) {
        sec3.classList.add('on')
    }
})
//section4
const section4 = document.querySelector('.section4')
const sec4_ani = document.querySelectorAll('.sec4_ani')
const article = document.querySelectorAll('.section4 article')
//window.scrollY == section4.offsetTop 조건일때 transform: translateX(0px);
window.addEventListener('scroll', function () {
    if (window.scrollY > section4.offsetTop - section4.clientHeight / 2) {
        let trans_x = section4.clientHeight / 100
        for (let item of sec4_ani) {
            item.classList.add('on')
        }
    }
})
for (let item of article) {
    item.addEventListener('mouseover', function () {
        item.classList.add('on')
    })
    item.addEventListener('mouseleave', function () {
        item.classList.remove('on')
    })
}
//footer

const familysite_btn = document.querySelector('.family_site span')
const familysite_list = document.querySelectorAll('.on_family_site')

familysite_btn.addEventListener('click', function () {
    for (let item of familysite_list) {
        item.classList.toggle('on')
    }
})

//scrol;
window.addEventListener('scroll', function () {
    console.log(window.scrollbars)
})

