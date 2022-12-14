//bar item
const bar_item = document.querySelectorAll('.bar_item');
const container_wrap = document.querySelector('.container_wrap')
const bar_color = [
    '#ff7474',
    'rgb(255, 201, 131)',
    'rgb(255, 252, 67)',
    'rgb(123, 255, 130)',
    'rgb(88, 77, 255)',
    'rgb(56, 34, 156)',
    'rgb(215, 57, 255)'
]
const bar = () => {
    for (let i = 0; i < bar_item.length; i++) {
        let a = i
        bar_item[i].style.cssText = `background-color: ${bar_color[i]}; left:${(5 * a)}%`
    }
}
bar()


const a_bth = document.querySelectorAll('a')
const main_wrap = document.querySelector('.container_wrap')
/*
for(let btn of a_bth){
    btn.addEventListener('click',function(e){
        e.preventDefault()
        const this_href = btn.getAttribute('href')
        main_wrap.onload = this_href
        console.log(this_href)
    })
}

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

btn2.addEventListener('click',function(){
    history.pushstate('', 'Hello World', 'buy___022.html');
})
*/
/*
$(document).ready(function(){
    $('.buy_header a').on('click',function(e){
        e.preventDefault();
        $('.buy_header a').removeClass('active')
        $(this).addClass('active')
        const aa = this.href;
       $('.container_wrap').load(aa + ' .buy01_container');
    })
});
*/

//buy_01 선물버튼 클릭
const buy01_btn = document.querySelectorAll('.toggle button')
const text_box = document.querySelector('.text_box')
for (let btn of buy01_btn) {
    btn.addEventListener('click', () => {
        for (let i = 0; i < buy01_btn.length; i++) {
            buy01_btn[i].classList.remove('active')
        }
        btn.classList.add('active')
        if (btn.getAttribute('key') == 'send') {
            text_box.textContent = '현재 선물 중인 내용이 없습니다.'
        } else {
            text_box.textContent = '현재 이용 중인 선물 이용권이 없습니다.'
        }
    })
}



