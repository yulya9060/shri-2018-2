import './index.scss';
import '../../fonts/fonts.scss';



const cardTemperatures=document.querySelectorAll(".card-temperature");
const cardLights=document.querySelectorAll(".card-light");
const cardFloors=document.querySelectorAll(".card-floor");
const floorSlider=document.getElementById('child');
const btnCancels=document.querySelectorAll('.popap-btn-cancel');

    Array.prototype.filter.call(btnCancels, function (btn) {
        btn.addEventListener('click', function () {
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
            document.getElementById('popap-temperature').classList.add('popap__temperature');
      });
    });

    Array.prototype.filter.call(cardLights, function (cardLight) {
        cardLight.addEventListener('click', function () {
            document.getElementById('popap-light').classList.add('popap__light');
      });
    });

    Array.prototype.filter.call(cardFloors, function (cardFloor) {
        cardFloor.addEventListener('click', function () {
            document.getElementById('popap-floor').classList.add('popap__floor');
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
