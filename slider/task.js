SliderItem = Array.from(document.querySelectorAll('.slider__item'))

function activeSlide() {
   return SliderItem.findIndex(slide => slide.classList.contains('slider__item_active'))
   
} 

function deactivateSlide(index) {
   SliderItem[index].classList.remove('slider__item_active')
   document.querySelectorAll('.slider__dot')[index].classList.remove('slider__dot_active')
}

function activateSlide(index) {
   SliderItem[index].classList.add('slider__item_active')
   document.querySelectorAll('.slider__dot')[index].classList.add('slider__dot_active')
}

function getIndexActivate(index, arr) {
   if (index < 0) {
      return arr.length - 1
   } else if (index > arr.length -1) {
      return 0;
   } else {
      return index;
   }
}

document.querySelector('.slider__arrow_next').onclick = () => {
   indexForAct = activeSlide() + 1;
   deactivateSlide(activeSlide());
   activateSlide(getIndexActivate(indexForAct, SliderItem));
}

document.querySelector('.slider__arrow_prev').onclick = () => {
   indexForAct = activeSlide() - 1;
   deactivateSlide(activeSlide());
   activateSlide(getIndexActivate(indexForAct, SliderItem));
}

const dotItem = document.querySelectorAll('.slider__dot')
for ( let i = 0; i < dotItem.length; i++) {
   dotItem[i].onclick = () => {
      deactivateSlide(activeSlide());
      activateSlide(i);
   }
}