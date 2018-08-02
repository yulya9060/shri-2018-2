

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