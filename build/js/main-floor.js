webpackJsonp([3],{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_floor_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_floor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_floor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_fonts_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_fonts_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fonts_fonts_scss__);


child.onclick = function(e) {
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
  }

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[7]);