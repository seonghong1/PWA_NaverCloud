//naver_box
const show_btn = document.querySelector('.icon_wrap .show_btn')
const icon = document.querySelectorAll('.icon')


show_btn.addEventListener('click', function () {
  for (let i = 0; i < icon.length; i++) {
    icon[i].classList.toggle('on')
  }
})


//메뉴 close, open
const naver_box_menu_open = document.querySelector('.naver_box_main_open')
const naver_box_menu_close = document.querySelector('.naber_box_menu >.close')
const naver_box_menu = document.querySelector('.naber_box_menu')

naver_box_menu_open.addEventListener('click', function () {
  naver_box_menu.classList.add('on')
})
naver_box_menu_close.addEventListener('click', function () {
  naver_box_menu.classList.remove('on')
})


//사진 클릭시 큰 이미지 등장
const img_item = document.querySelectorAll('.image_item')
const bigImg_wrap = document.querySelector('.big_image_item')
const close_bigImg_wrap = document.querySelector('.close_big_img')

close_bigImg_wrap.addEventListener('click', function () {
  bigImg_wrap.classList.remove('on')
})
//사진 업로드한 시점 구하기





//사진 업로드
const fileInput = document.getElementById('add')
const img_items_wrap = document.querySelector('.image_item_wrap')
const handleFiles = (e) => {
  const selectedFile = [...fileInput.files]
  const fileReader = new FileReader();
  fileReader.readAsDataURL(selectedFile[0])
  fileReader.onload = function () {
    //업로드 시점을 key값에 기록 !
    const Alldate = new Date()
    const year = Alldate.getFullYear()
    const month = Alldate.getMonth() + 1
    const date = Alldate.getDate()
    const hours = Alldate.getHours()
    const minutes = Alldate.getMinutes()
    img_items_wrap.innerHTML += `<div class="image_item" key1=${year}년${month}월${date}일 key2=${hours}시${minutes}분><img src="${fileReader.result}" alt=""></div>`
    const img_item = document.querySelectorAll('.image_item')
    img_item.forEach((item) => {
      item.addEventListener('click', function () {
        bigImg_wrap.classList.add('on')
        bigImg_wrap.querySelector('img').setAttribute('src', item.querySelector('img').getAttribute('src'))
        //key값에 저장한 업로드 시점을 큰 이미지 등장시 상단에 노출시킴
        bigImg_wrap.querySelector('.year').textContent = item.getAttribute('key1')
        bigImg_wrap.querySelector('.time').textContent = item.getAttribute('key2')
      })
    })

  }
}

const item_reverse = document.querySelector('.arry_reverse')
item_reverse.addEventListener('click', function () {

})


fileInput.addEventListener('change', handleFiles);


//다크모드
const header = document.querySelector('.naver_box_header')
const isDark = document.querySelector('.isDark')
const body = document.querySelector('body')

isDark.addEventListener('click', function () {
  body.classList.toggle('dark_on')
  isDark.classList.toggle('fa-moon')
  isDark.classList.toggle('fa-sun')

})
// 카카오톡 공유 api
Kakao.init('d45a792b0fc05e7b3f371d7b14b998cf');

Kakao.Link.createDefaultButton({
  container: '#kakao-link-btn',
  objectType: 'feed',
  content: {
    title: 'naver_box_img',
    description: '내가 업로드한 이미지입니다.',
    imageUrl: '',
    link: {
      mobileWebUrl: 'https://seonghong1.github.io/NaverCloud/naver_box_main.html?',
      webUrl: 'https://seonghong1.github.io/NaverCloud/naver_box_main.html?'
    }
  },
  buttons: [
    {
      title: '이미지 보러가기',
      link: {
        mobileWebUrl: 'https://seonghong1.github.io/NaverCloud/naver_box_main.html?',
        webUrl: 'https://seonghong1.github.io/NaverCloud/naver_box_main.html?'
      }
    }
  ]
});









