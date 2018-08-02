export default ()=>{
    let cards =document.querySelectorAll('.card');
    let title =document.querySelectorAll('.card__title');
for (let i = 0; i <title.length; i++) {
    let parent=title[i].parentElement;
    let  text = title[i].innerHTML;
    let clone = document.createElement('div');
  clone.style.position = 'absolute';
clone.style.visibility = 'hidden';
clone.style.width = title[i].clientWidth + 'px';
clone.innerHTML = text;
parent.appendChild(clone);
var l = text.length - 1;
  for (; l >= 0 && clone.clientHeight > title[i].clientHeight; --l) {
    clone.innerHTML = text.substring(0, l) + '...';
}
  title[i].innerHTML = clone.innerHTML;
  console.log( clone.clientHeight,title[i].clientHeight);
}
}