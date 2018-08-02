import './index.scss';
import '../../fonts/fonts';
import clippedText from '../../js/clippedText';
clippedText();

let screenWidth = document.documentElement.clientWidth;
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
let mainTrackCoord = mainTrack.getBoundingClientRect();
let lists = mainTrack.querySelectorAll('.gallery__item_vertical');
let imgWidth = 214;
let imgHeight = 136;
let topArr = 0;
let leftArr = 0;

//карусель избранных устройств
const favoriteDevicesCarousel = document.getElementById('favoriteDevicesCarousel');
const favoriteDevicesPrev = document.getElementById('favoriteDevicesPrev');
const favoriteDevicesNext = document.getElementById('favoriteDevicesNext');
const favoriteDevicesTrack = document.getElementById('favoriteDevicesCarouselTrack');
let favoriteDevicesLists = favoriteDevicesTrack.querySelectorAll('.gallery__item_favorite-devices');

//карусель избранных сценариев
const favoriteScenariosCarousel = document.getElementById('favoriteScenariosCarousel');
const favoriteScenariosPrev = document.getElementById('favoriteScenariosPrev');
const favoriteScenariosNext = document.getElementById('favoriteScenariosNext');
const favoriteScenariosTrack = document.getElementById('favoriteScenariosTrack');
let favoriteScenariosLists = favoriteScenariosTrack.querySelectorAll('.gallery-multi__item');
let favoriteScenariosImgWidth = 200;
var startPoint = {};
var nowPoint;
let initialPoint;
let finalPoint;

//функция листания карусели вверх
const swipeCarouselUp = (listTrack, listItems) => {
  let track = listTrack;
  let list = listItems;
  let side = (list.length - 2) * imgHeight;
  let topA = topArr - imgHeight;
  mainBtn.style.opacity = 0;
  if (topA >= -side) {
    topArr -= imgHeight * 2;
  }
  else {
    topArr = 0;
    mainBtn.style.opacity = 1;
  }
  track.style.top = topArr + 'px';
}

const swipeCarouselDown = (listTrack, listItems) => {
  let track = listTrack;
  let list = listItems;
  topArr += imgHeight * 2;
  if (topArr > 0) {
    topArr = 0;
    mainBtn.style.opacity = 1;
  }
  track.style.top = topArr + 'px';
}


const swipeFavoriteScenCarouselNext = (listTrack, listItems) => {
  let track = listTrack;
  let list = listItems;
  let side = (Math.ceil(list.length / 3) - 3) * favoriteScenariosImgWidth;
  let leftA = leftArr - favoriteScenariosImgWidth;
  if (leftA >= -side) {
    leftArr -= track.parentElement.getBoundingClientRect().width;
  }
  else {
    leftArr = 0;
  }
  track.style.left = leftArr + 'px';
}

const swipeFavoriteScenCarouselPrev = (listTrack, listItems) => {
  let track = listTrack;
  let list = listItems;
  leftArr += track.parentElement.getBoundingClientRect().width;
  if (leftArr > 0) {
    leftArr = 0;
  }
  track.style.left = leftArr + 'px';
}

let position;
//функция листания карусели вперед
const swipeCarouselNext = (listTrack, listItems) => {
  let track = listTrack;
  let count = Math.floor(track.parentElement.getBoundingClientRect().width / imgWidth);
  let list = listItems;
  
  //  position = Math.max(position - width * count, -width * (listElems.length - count));

  
  //берем ширину родительского элемента, чтобы прокручивать на всю длину
  let side = (list.length - count) * imgWidth;
  let leftA = leftArr - imgWidth;
  if (leftA >= -side) {
    leftArr = Math.max(leftArr - imgWidth * count, -imgWidth * (list.length - count));
  }
  else {
    leftArr = 0;
  }
  console.log('side', side, 'getBoundingClientRect', track.parentElement.getBoundingClientRect().width,'leftArr',leftArr);
  track.style.left = leftArr + 'px';
}

const swipeCarouselPrev = (listTrack, listItems) => {
  let track = listTrack;
  let list = listItems;
  let count = Math.floor(track.parentElement.getBoundingClientRect().width / imgWidth);
  leftArr=Math.min(leftArr + imgWidth * count, 0);
  if (leftArr > 0) {
    leftArr = 0;
  }
  track.style.left = leftArr + 'px';
}

const handleStart = (event) => {
  event.preventDefault();
  event.stopPropagation();
  initialPoint = event.changedTouches[0];
}

const handleEndMain = (track, lists) => (event) => {
  event.preventDefault();
  event.stopPropagation();
  finalPoint = event.changedTouches[0];
  var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
  if (xAbs > 20 || yAbs > 20) {
    if (screenWidth < 1280) {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          swipeCarouselNext(track, lists)
          console.log('свайп влево')
        }
        else {
          swipeCarouselPrev(track, lists)
          console.log('свайп вправо')
        }
      }

    }
    else {
      if (xAbs < yAbs) {
        if (finalPoint.pageY < initialPoint.pageY) {
          swipeCarouselUp(track, lists)
          console.log('свайп вверх')
        }
        else {
          swipeCarouselDown(track, lists)
          console.log('свайп вниз')
        }
      }
    }
  }
};


const handleEnd = (track, lists) => (event) => {
  event.preventDefault();
  event.stopPropagation();
  finalPoint = event.changedTouches[0];
  var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
  if (xAbs > 20 || yAbs > 20) {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          swipeCarouselNext(track, lists)
          console.log('свайп влево')
        }
        else {
          swipeCarouselPrev(track, lists)
          console.log('свайп вправо')
        }
      }

    }
};


const handleEndScenarios = (track, lists) => (event) => {
  event.preventDefault();
  event.stopPropagation();
  finalPoint = event.changedTouches[0];
  var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
  if (xAbs > 20 || yAbs > 20) {
    if (screenWidth < 1280) {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          swipeCarouselNext(track, lists)
          console.log('свайп влево')
        }
        else {
          swipeCarouselPrev(track, lists)
          console.log('свайп вправо')
        }
      }
    }
    else {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          swipeFavoriteScenCarouselNext(track, lists)
          console.log('свайп влево')
        }
        else {
          swipeFavoriteScenCarouselPrev(track, lists)
          console.log('свайп вправо')
        }
      }
    }
  }
};

const handleMove = (event) => {
  event.preventDefault();
  event.stopPropagation();
  var otk = {};
  nowPoint = event.changedTouches[0];
  otk.x = nowPoint.pageX - startPoint.x;
  otk.y = nowPoint.pageY - startPoint.y;

  startPoint = { x: nowPoint.pageX, y: nowPoint.pageY };
}

mainCarousel.addEventListener("touchstart", handleStart, { passive: false });
mainCarousel.addEventListener("touchend", handleEndMain(mainTrack, lists), { passive: false });
favoriteDevicesCarousel.addEventListener("touchstart", handleStart, { passive: false });
favoriteDevicesCarousel.addEventListener("touchend", handleEnd(favoriteDevicesTrack, favoriteDevicesLists), { passive: false });
favoriteScenariosCarousel.addEventListener("touchstart", handleStart, { passive: false });
favoriteScenariosCarousel.addEventListener("touchend", handleEndScenarios(favoriteScenariosTrack, favoriteScenariosLists), { passive: false });




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


//всплывающее окно с температурой  
Array.prototype.filter.call(cardTemperatures, function (cardTemperature) {
  cardTemperature.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('.wrapper').classList.add('wrapper_blur');
    document.getElementById('popap-temperature').classList.add('popap__temperature');
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

