webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_fonts__ = __webpack_require__(2);



//containers

const favoriteDevices = document.querySelector('.favorite-devices');

const cardTemperatures = document.querySelectorAll(".card-temperature");
const cardLights = document.querySelectorAll(".card-light");
const cardFloors = document.querySelectorAll(".card-floor");
const floorSlider = document.getElementById('child');
const btnCancels = document.querySelectorAll('.popap-btn');
const hambMenu = document.querySelector('.hamburger-menu__btn');
const menuDropDownToggles = document.querySelectorAll(".menu-dropdown__btn,.menu-dropdown__active");
const yellowLinks = document.querySelectorAll('.favorite-devices__link');
const menuDropdownLinks = document.querySelectorAll('.menu-dropdown__item');
const selectMenuDropDown = favoriteDevices.querySelector('.menu-dropdown__active');
const favoriteDevicesCard = Array.from(favoriteDevices.querySelectorAll('.card[data-card]'));
//карусели
//карусель на Главной
const mainCarousel = document.getElementById('mainCarousel');
const mainBtn = document.getElementById('mainBtn');
const mainTrack = document.getElementById('mainTrack');
let lists = mainTrack.querySelectorAll('.gallery__item_vertical');
let imgHeight = 136;
let side = (lists.length - 2) * imgHeight;
let TopArr = 0;

mainBtn.addEventListener('click', function () {
  let topA = TopArr - imgHeight;
  if (topA >= -side) {
    TopArr -= imgHeight * 2;
  }
  else {
    TopArr = 0;
  }
  mainTrack.style.top = TopArr + 'px';
})

//карусель избранных устройств
const favoriteDevicesCarousel = document.getElementById('favoriteDevicesCarousel');
const favoriteDevicesPrev = document.getElementById('favoriteDevicesPrev');
const favoriteDevicesNext = document.getElementById('favoriteDevicesNext');
const favoriteDevicesTrack = document.getElementById('favoriteDevicesCarouselTrack');
let favoriteDeviceslists = favoriteDevicesTrack.querySelectorAll('.gallery__item_favorite-devices');
let leftArr = 0;
let imgWidth = 214;
let screenWidth = document.documentElement.clientWidth;
let favoriteDevicesSide = (favoriteDeviceslists.length - Math.floor(screenWidth / imgWidth)) * imgWidth;
console.log(favoriteDevicesCarousel);
favoriteDevicesNext.addEventListener('click', function () {
  let leftA = leftArr - imgWidth;
  if (leftA >= -favoriteDevicesSide) {
    leftArr -= imgWidth * (screenWidth / imgWidth);
  }
  else {
    leftArr = 0;
  }
  favoriteDevicesTrack.style.left = leftArr + 'px';
})

favoriteDevicesPrev.addEventListener('click', function () {
  leftArr += imgWidth * (screenWidth / imgWidth);
  if (leftArr > 0) {
    leftArr = 0;
  }
  favoriteDevicesTrack.style.left = leftArr + 'px';
})

//карусель избранных сценариев
const favoriteScenariosPrev = document.getElementById('favoriteScenariosPrev');
const favoriteScenariosNext = document.getElementById('favoriteScenariosNext');
const favoriteScenariosTrack = document.getElementById('favoriteScenariosTrack');
let favoriteScenariosLists = favoriteScenariosTrack.querySelectorAll('.gallery-multi__item');
let favoriteScenariosleftArr = 0;
let favoriteScenariosImgWidth = 200;
let favoriteScenariosSide = ( Math.ceil(favoriteScenariosLists.length/3)-3) * favoriteScenariosImgWidth;
favoriteScenariosNext.addEventListener('click', function () {
  let leftA = favoriteScenariosleftArr - favoriteScenariosImgWidth;
  if (leftA >= -favoriteScenariosSide) {
    favoriteScenariosleftArr -= favoriteScenariosImgWidth * 3;
  }
  else {
    favoriteScenariosleftArr = 0;
  }
  favoriteScenariosTrack.style.left = favoriteScenariosleftArr + 'px';
})

favoriteScenariosPrev.addEventListener('click', function () {
  favoriteScenariosleftArr += favoriteScenariosImgWidth;
  if (favoriteScenariosleftArr > 0) {
    favoriteScenariosleftArr = 0;
  }
  favoriteScenariosTrack.style.left = favoriteScenariosleftArr + 'px';
})

//скрытие показ выбранного пункта меню
Array.prototype.filter.call(menuDropdownLinks, function (link) {
  link.addEventListener('click', function () {
    let linkText = link.innerHTML;
    selectMenuDropDown.innerHTML = linkText;
    favoriteDevices.querySelector('.menu-dropdown__items').classList.toggle('menu-dropdown__items_active');
    sortLinks(this.dataset.type);
  });
})

//выбор активного пункта меню
Array.prototype.filter.call(yellowLinks, function (link, index) {
  let yellowLinksArr = Array.from(yellowLinks);
  link.addEventListener('click', function () {
    yellowLinksArr.map((el, i) => {
      if (i !== index) {
        el.classList.remove('favorite-devices__link_active');
      }
    })
    link.classList.add('favorite-devices__link_active');
    sortLinks(this.dataset.type);
  });
})

//сортировка избранных устройств
let sortLinks = (dataType) => {

  favoriteDevicesCard.map(el => {
    el.parentElement.style.display = 'flex';
    if (dataType === 'all' || dataType === undefined) {
      el.parentElement.style.display = 'flex';
    }
    else if (el.getAttribute('data-card') !== dataType) {
      el.parentElement.style.display = 'none';
    }
  })
}

//показ и скрытие выпадающего меню в мобильной версии
Array.prototype.filter.call(menuDropDownToggles, function (btn) {
  btn.addEventListener('click', function () {
    favoriteDevices.querySelector('.menu-dropdown__items').classList.toggle('menu-dropdown__items_active');
  });
})

//показ и скрытие меню в header
hambMenu.addEventListener('click', function () {

  document.querySelector('.header-nav').classList.toggle('header-nav-hamburger_active');
});

//события на кнопки применить и отмена в всплывающих окнах
Array.prototype.filter.call(btnCancels, function (btn) {
  btn.addEventListener('click', function () {
    document.body.style.overflow = 'auto';
    let parent = this.parentNode.parentNode.parentNode;
    document.querySelector('.wrapper').classList.remove('wrapper_blur');
    document.body.removeAttribute('style');
    if (this.closest('.popap__temperature')) {
      parent.classList.remove('popap__temperature');
    }
    else if (this.closest('.popap__light')) {
      parent.classList.remove('popap__light');
    }
    else if (this.closest('.popap__floor')) {
      parent.classList.remove('popap__floor');
    }
  });
});

let popapTemperature= document.getElementById('popap-temperature');
//всплывающее окно с температурой  
Array.prototype.filter.call(cardTemperatures, function (cardTemperature) {
  cardTemperature.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('.wrapper').classList.add('wrapper_blur');
    popapTemperature.classList.add('popap__temperature');
  });
});
//всплывающее окно с яркостью  
Array.prototype.filter.call(cardLights, function (cardLight) {
  cardLight.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('.wrapper').classList.add('wrapper_blur');
    document.getElementById('popap-light').classList.add('popap__light');
  });
});
//всплывающее окно с температурой пола  
Array.prototype.filter.call(cardFloors, function (cardFloor) {
  cardFloor.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('.wrapper').classList.add('wrapper_blur');
    document.getElementById('popap-floor').classList.add('popap__floor');
  });
});

//слайдер измерения температуры пола
floorSlider.addEventListener('click', function (e) {
  let arrow = e.target;
  let circle = 360 / 24;
  let currentGetOffset = getComputedStyle(e.target).offsetDistance;
  let currentTemp = arrow.nextElementSibling;
  let innerTemp = parseInt(currentTemp.innerHTML);
  if (parseInt(currentGetOffset, 10) > 100) {
    currentGetOffset = 0;
  }
  if (parseInt(innerTemp, 10) >= 36) {
    innerTemp = -6;
  }
  arrow.style.offsetDistance = currentGetOffset;
  let newOffset = parseInt(currentGetOffset, 10) + parseInt(circle, 10);
  arrow.style.offsetDistance = `${newOffset}%`;
  currentGetOffset = getComputedStyle(e.target).offsetDistance;
  innerTemp += 6;
  currentTemp.innerHTML = `+${innerTemp}`;
  arrow.style.duration = '2000ms';
  arrow.style.easing = 'linear';
})


// let width=200;
// let count=5;
// let carousel = document.getElementById('favoriteDevicesCarousel');
// let list = carousel.querySelector('.gallery__nav');
// let listElems = carousel.querySelectorAll('.gallery__item');
// let position = 0; // текущий сдвиг влево

//     carousel.querySelector('.gallery-horizontal__prev').onclick = function() {
//       // сдвиг влево
//       // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//       position = Math.min(position + width * count, 0)
//       list.style.marginLeft = position + 'px';
//     };

//     carousel.querySelector('.gallery-horizontal__next').onclick = function() {
//       // сдвиг вправо
//       // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//       position = Math.max(position - width * count, -width * (listElems.length - count));
//       list.style.marginLeft = position + 'px';
//     };


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fonts_scss__);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);