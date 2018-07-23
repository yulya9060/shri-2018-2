import './main-floor.scss';
import '../../fonts/fonts.scss';
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