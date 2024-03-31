import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import '././slick-carousel/slick/slick.css';
// import '././slick-carousel/slick/slick-theme.css';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import img1 from '.././images/c1.png'
import img2 from '.././images/c2.png'
import img3 from '.././images/c3.png'
import img4 from '.././images/매장3.jpg'

const ImageSlider = () => {

   const [imagesLoaded, setImagesLoaded] = useState(false);
   const images = [img1, img2, img3, img4];
 
   useEffect(() => {
     Promise.all(images.map(image => {
       return new Promise((resolve) => {
         const img = new Image();
         img.src = image;
         img.onload = resolve;
       });
     })).then(() => {
       setImagesLoaded(true);
     });
   }, []);
 
   if (!imagesLoaded) {
     return <div>Loading images...</div>;
   }
 
   
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true, 
  };
  // console.log('동작:', ImageSlider);
  return (
    <div  className="slider-container">
      {/* <h2>simple slider</h2>  */}
      <Slider {...settings}>
      {/* <div className="slick_prev w-30 h-30 text-white"></div> */}
        <div>
           <img src={img1} className="w-4/5 mx-auto h-[600px]" />
        </div>
        <div>
           <img src={img2} className="w-4/5 mx-auto h-[600px]" />
        </div>
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
        <div>
           <img src={img3} className="w-4/5 mx-auto h-[600px]" />
        </div>        
      </Slider>
    </div>
  );
}
export default ImageSlider