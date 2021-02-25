import slider from './modules/slider';
import modals from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    slider('.carousel', '.carousel__inner', '.carousel__slide', '.carousel__link', '.prev', '.next');
    modals('.overlay', '#modal', '.btn-order', '.modal', '.form__sum-num', '.basket__sum-num', '.modal__descr');
});