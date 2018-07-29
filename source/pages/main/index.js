import './index.scss';
import '../../fonts/fonts.scss';



const cardTemperatures=document.querySelectorAll(".card-temperature");
const cardLights=document.querySelectorAll(".card-light");
const cardFloors=document.querySelectorAll(".card-floor");
const floorSlider=document.getElementById('child');
const btnCancels=document.querySelectorAll('.popap-btn-cancel');

    Array.prototype.filter.call(btnCancels, function (btn) {
        btn.addEventListener('click', function () {
            document.body.style.overflow='auto';
            let parent=this.parentNode.parentNode.parentNode;
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
            document.body.style.overflow='hidden';
            document.getElementById('popap-temperature').classList.add('popap__temperature');
      });
    });

    Array.prototype.filter.call(cardLights, function (cardLight) {
        cardLight.addEventListener('click', function () {
            document.body.style.overflow='hidden';
            document.getElementById('popap-light').classList.add('popap__light');
      });
    });

    Array.prototype.filter.call(cardFloors, function (cardFloor) {
        cardFloor.addEventListener('click', function () {
            document.body.style.overflow='hidden';
            document.getElementById('popap-floor').classList.add('popap__floor');
      });
    });


    // floorSlider.addEventListener('click', function(e) {
    //     let arrow=e.target;
    //     let circle=360/24;
    //     let currentGetOffset=getComputedStyle(e.target).offsetDistance;
    //     let currentTemp=arrow.nextElementSibling;
    //     let innerTemp=parseInt(currentTemp.innerHTML);
    //     console.log('etarget',e.target,currentTemp);
    //     if (parseInt(currentGetOffset,10)>100){
    //       currentGetOffset=0;
    //     }
    //     if (parseInt(innerTemp,10)>=36){
    //       innerTemp=-6;
    //     }
    //     console.log('currentGetOffset',currentGetOffset,`${circle}%`);
    //     arrow.style.offsetDistance= currentGetOffset;
    //     let newOffset=parseInt(currentGetOffset,10)+parseInt(circle,10);
    //     arrow.style.offsetDistance= `${newOffset}%`;
    //     console.log('newOffset', `${newOffset}`);
    //     currentGetOffset=getComputedStyle(e.target).offsetDistance;
    //     innerTemp+=6;
    //     currentTemp.innerHTML=`+${innerTemp}`;
    //     arrow.style.duration= '2000ms';
    //     arrow.style.easing='linear';
    //   })

    var sliderElem = document.getElementById('parent');
    var thumbElem = sliderElem.children[0];
  var radius=sliderElem.offsetWidth/2-10;
  var x0=sliderElem.offsetWidth/2;
  var y0=sliderElem.offsetHeight/2;
  var f = 1;
	var s = 2 * Math.PI / 180;
  var oldLeft;
  var oldTop;
    thumbElem.onmousedown = function(e) {
      var thumbCoords = getCoords(thumbElem);
      var shiftX = e.pageX - thumbCoords.left;
      var shiftY = e.pageY - thumbCoords.top;
      var sliderCoords = getCoords(sliderElem);

      document.onmousemove = function(e) {
         var newLeft = e.pageX - shiftX - sliderCoords.left;
        var newTop = e.pageY - shiftY - sliderCoords.top;
   f+=s;  
if (f<=1){
  f=1;
}

if (f.toFixed(3)>='5.564'){
  f=5.564;
}

        if (!Math.sqrt((x0-newLeft)*(x0-newLeft)+(y0-newTop)*(y0-newTop))<=radius) {
          
 newLeft=95-radius*Math.sin(f);
        }
        if (!Math.sqrt((x0-newLeft)*(x0-newLeft)+(y0-newTop)*(y0-newTop))<=radius) {
          
          newTop=95+radius*Math.cos(f);
         
        }
         console.log('e.pageX',e.pageX,'newLeft',newLeft,'e.pageY',e.pageY,'newTop',newTop);
        thumbElem.style.left = newLeft+ 'px';
        thumbElem.style.top = newTop+ 'px';
      }



      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false;
    };

    thumbElem.ondragstart = function() {
      return false;
    };

    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }
