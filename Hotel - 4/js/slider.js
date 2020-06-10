const sliderParent = document.querySelector('#hero-section');
let imgID = 1;
  const sliderTimer = setInterval(function(){

    console.log(imgID);
    sliderParent.style.backgroundImage = geneSlider()[imgID];
    if(imgID === 4){
      imgID = 0;
    }
    imgID += 1;
 
  }, 3000);




function geneSlider(){
  const slideImages = [];
  for(let i=0; i < 4; i++){
    slideImages[i] = `url(./assets/images/SliderImages/Image${i+1}.png)`;
  }
  return slideImages;
}