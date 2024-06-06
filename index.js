const ulList = document.querySelector('#list_con');
const toggleBtn =document.querySelector('#span_toggle');
const blurScreen =document.querySelector('#blur_screen');
 const heroContent =document.querySelector('#hero_content');

console.log(heroContent);

// toggle boutton for responsive

function toggleButton() {
 
    ulList.classList.toggle('trans')
    blurScreen.classList.toggle('blur_trans')
    toggleBtn.classList.toggle('close')
     heroContent.classList.toggle('hero_content')
}

toggleBtn.addEventListener('click',toggleButton)


// ----------------------------------------------------

