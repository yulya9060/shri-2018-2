import './main.scss';
import '../../fonts/fonts.scss';

var boxs =document.querySelectorAll('.scenario__title');
for (var i = 0; i <boxs.length; i++) {
  var parent=boxs[i].parentElement;
  var  text = boxs[i].innerHTML;
   var clone = document.createElement('div');
  clone.style.position = 'absolute';
clone.style.visibility = 'hidden';
clone.style.width = boxs[i].clientWidth + 'px';
clone.innerHTML = text;
parent.appendChild(clone);
var l = text.length - 1;
  for (; l >= 0 && clone.clientHeight > boxs[i].clientHeight; --l) {
    clone.innerHTML = text.substring(0, l) + '...';
}
  boxs[i].innerHTML = clone.innerHTML;
  console.log( clone.clientHeight,boxs[i].clientHeight);
}