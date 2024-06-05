const ulList = document.querySelector('#list_con');
const toggleBtn =document.querySelector('#span_toggle')

function toggleButton() {
   ulList.classList.add('trans')
}

toggleBtn.addEventListener('click',toggleButton)




