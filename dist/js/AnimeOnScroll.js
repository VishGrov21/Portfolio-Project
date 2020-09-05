const EleToBeAnime = document.querySelectorAll('progress');

const isLiAvailOnViewPort = (ele) => {
  const eleRect = ele.getBoundingClientRect();
  return (
    eleRect.top > 0 &&
    eleRect.left > 0 &&
    eleRect.bottom <= (Window.innerHieght || document.documentElement.clientHeight) &&
    eleRect.right <= (Window / innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  EleToBeAnime.forEach((item) => {
    console.log(item);
    console.log(isLiAvailOnViewPort(item));
    if (isLiAvailOnViewPort(item)) {
      item.classList.add('show');
    }
  });
};

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
