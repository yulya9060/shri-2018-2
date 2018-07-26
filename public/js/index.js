webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_fonts__ = __webpack_require__(2);





const cardTemperatures=document.querySelectorAll(".card-temperature");
const cardLights=document.querySelectorAll(".card-light");
const cardFloors=document.querySelectorAll(".card-floor");
const floorSlider=document.getElementById('child');
const btnCancels=document.querySelectorAll('.popap-btn-cancel');

    Array.prototype.filter.call(btnCancels, function (btn) {
        btn.addEventListener('click', function () {
            let parent=this.parentNode.parentNode.parentNode;
            document.querySelector('.wrapper').classList.remove('wrapper_blur');
            document.body.removeAttribute('style');
            if (this.closest('.popap__temperature')){
                parent.classList.remove('popap__temperature');
            }
            else if (this.closest('.popap__light')){
                parent.classList.remove('popap__light');
            }
            else if (this.closest('.popap__floor')){
                parent.classList.remove('popap__floor');
            }
        });
    });
    Array.prototype.filter.call(cardTemperatures, function (cardTemperature) {
        cardTemperature.addEventListener('click', function () {
            document.querySelector('.wrapper').classList.add('wrapper_blur');
            document.getElementById('popap-temperature').classList.add('popap__temperature');
            document.body.style.overflow='hidden';
      });
    });

    Array.prototype.filter.call(cardLights, function (cardLight) {
        cardLight.addEventListener('click', function () {
            document.querySelector('.wrapper').classList.add('wrapper_blur');
            document.getElementById('popap-light').classList.add('popap__light');
            document.body.style.overflow='hidden';
      });
    });

    Array.prototype.filter.call(cardFloors, function (cardFloor) {
        cardFloor.addEventListener('click', function () {
            document.querySelector('.wrapper').classList.add('wrapper_blur');
            document.getElementById('popap-floor').classList.add('popap__floor');
            document.body.style.overflow='hidden';
      });
    });


    floorSlider.addEventListener('click', function(e) {
        let arrow=e.target;
        let circle=360/24;
        let currentGetOffset=getComputedStyle(e.target).offsetDistance;
        let currentTemp=arrow.nextElementSibling;
        let innerTemp=parseInt(currentTemp.innerHTML);
        console.log('etarget',e.target,currentTemp);
        if (parseInt(currentGetOffset,10)>100){
          currentGetOffset=0;
        }
        if (parseInt(innerTemp,10)>=36){
          innerTemp=-6;
        }
        console.log('currentGetOffset',currentGetOffset,`${circle}%`);
        arrow.style.offsetDistance= currentGetOffset;
        let newOffset=parseInt(currentGetOffset,10)+parseInt(circle,10);
        arrow.style.offsetDistance= `${newOffset}%`;
        console.log('newOffset', `${newOffset}`);
        currentGetOffset=getComputedStyle(e.target).offsetDistance;
        innerTemp+=6;
        currentTemp.innerHTML=`+${innerTemp}`;
        arrow.style.duration= '2000ms';
        arrow.style.easing='linear';
      })


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