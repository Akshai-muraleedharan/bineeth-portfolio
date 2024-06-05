const ulList = document.querySelector('#list_con');
const toggleBtn =document.querySelector('#span_toggle')
const blurScreen =document.querySelector('#blur_screen')
function toggleButton() {

   ulList.classList.add('trans')
   blurScreen.classList.add('blur_trans')
}

toggleBtn.addEventListener('click',toggleButton)




