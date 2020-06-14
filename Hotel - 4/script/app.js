const hum = document.getElementById('humberger');
hum.addEventListener('click',function(e){
const xmMenu = document.getElementById('xmMenu');
  xmMenu.classList.toggle('hide');
});

class GalleryShow {
  constructor(_title, _img){
    this.title = _title;
    this.text = `${_title} for our clients`;
    this.img = _img;
  }
}


const genImageString = () => {
  const roomsLabel = ['Seaside View', 'Kitchen', 'Private Pool', 'Fitness Center', 'Nuru Massage', 'Soft Massage', 'Sports Pool', 'Bar'];

  const galleryCards = roomsLabel.map( (el , id) => {
    let imgStr = `Facility (${id + 1}).png`;
    return new GalleryShow(el,imgStr);
  });

  return displayGallerys(galleryCards);
};

const displayGallerys = (arr) => {

    const facilityGallery = document.querySelector('#facilityGallery');
    if(facilityGallery == null){
      return
    }
    let html = '';
    arr.forEach(str => {

      let gallCard = `<div class="gallery__card">
      <img class="gallery__image" src="./assets/images/Facilities/${str.img}" alt="22">
      <div class="gallery__body">
        <h3 class="gallery__body--head">${str.title}</h3>
        <p class="gallery__body--text">${str.text}</p>
      </div>
    </div>`;

      html += gallCard;

    });
    //call to display on html

    facilityGallery.innerHTML  = html;

}
  const display = genImageString();



// sliderParent.style.backgroundImage = 'url(./assets/images/SliderImages/Image3.png)';
