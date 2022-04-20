import './sass/styles.scss';

//1. increase-block - при наведении на точки всплывала иконка прогресса
import { revealProgressIcon } from './jsModules/iconProgressReveal.js';

revealProgressIcon();

//2. все кнопки -при нажатии менялись стили
import { buttonsStyleChange } from './jsModules/buttonsStyle.js';

buttonsStyleChange();

//3. при наведении на картинку всплывала иконка лупы. при нажатии на лупу - фотография увеличивалась
import { iconZoomReveal } from './jsModules/iconZoomInreveal';

iconZoomReveal();

//4. сделать слайдер с отзывами
import { initSlider } from './jsModules/quotesSlider.js';

initSlider();

//5. faq-раздел. ответы открываются при нажатии на стрелочку. стрелочка меняет свое направление
import { initFaq } from './jsModules/faqModule.js';

initFaq();

window.addEventListener('load', console.log('fuck'));