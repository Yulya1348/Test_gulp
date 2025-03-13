// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper('.swiper', {
//   slidesPerView: '4',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

// Яндекс карта

ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [55.751694, 37.626956],
        zoom: window.innerWidth < 1200 ? 10.5 : 11.5,
        controls: ['zoomControl', 'typeSelector']
    });

    // Функция для получения размера метки в зависимости от экрана
    function getIconSize() {
        if (window.innerWidth > 1200) return [54, 44];
        if (window.innerWidth > 768) return [40, 32];
        if (window.innerWidth > 576) return [40, 38];
        return [32, 30];  // Мобильные устройства
    }

    // Данные меток (координаты)
    const placemarks = [
        [55.752631, 37.545335],
        [55.718519, 37.599947],
        [55.740037, 37.673051],
        [55.700944, 37.708201]
    ];

    // Создание и добавление меток
    placemarks.forEach(coords => {
        const placemark = new ymaps.Placemark(
            coords,
            {},
            {
                iconLayout: "default#image",
                iconImageHref: "img/Location.svg",
                iconImageSize: getIconSize(),
                iconImageOffset: [-getIconSize()[0] / 2, -getIconSize()[1]]
            }
        );
        map.geoObjects.add(placemark);
    });

    // Обновление размера меток при изменении экрана
    window.addEventListener("resize", () => {
        const newSize = getIconSize();
        map.geoObjects.each(placemark => {
            placemark.options.set("iconImageSize", newSize);
            placemark.options.set("iconImageOffset", [-newSize[0] / 2, -newSize[1]]);
        });
    });
}
