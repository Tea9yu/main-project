import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../slider/slick.css';
import '../slider/slick-theme.css';
import img1 from '../images/c1.png'
import img2 from '../images/c2.png'
import img3 from '../images/c3.png'
import img4 from '../images/매장3.jpg'
import test from '../images/nukki_image/upper/u1.jpg'

const ImageSlider = () => {

   const [imagesLoaded, setImagesLoaded] = useState(false);
   const images = [img1, img2, img3, img4];
   const uppers = [];
   const [upperTag, setUpperTag] =useState(<></>);
   const lowers = [];
   const [lowerTag, setLowerTag] =useState(<></>);



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


      const upper = [];
      const lower = [];
      uppers.length = 0;
      lowers.length = 0;
      const url = 'http://10.125.121.184:8080/nukki_image'
      for (let i = 1; i < 22; i++) {
         upper.push(new Promise((resolve) => {
            const img = new Image();
            img.src = `${url}/upper/u${i}.jpg`;
            img.onload = resolve;
            uppers.push(img.src);
         }));
         lower.push(new Promise((resolve) => {
            const img = new Image();
            img.src = `${url}/lower/l${i}.jpg`;
            img.onload = resolve;
            lowers.push(img.src);
         }));
      }
      Promise.all(upper).then(() => {
         console.log('모든 작업이 완료되었습니다.');
         setImagesLoaded(true);
      });

      Promise.all(lower).then(() => {
         console.log('모든 작업이 완료되었습니다.');
         setImagesLoaded(true);
      });

      const tm = uppers.map((item, index) => 
      <div key={item+index}>
         <img src={item} className="border border-gray-500 mx-auto w-[15svw] h-[22svw]" />
      </div>)
      const tm2 = lowers.map((item, index) => 
      <div key={item+index}>
         <img src={item} className="border border-gray-500 mx-auto w-[15svw] h-[22svw]" />
      </div>)
      setUpperTag(tm);
      setLowerTag(tm2)

   }, []);

   if (!imagesLoaded) {
      return <div>Loading images...</div>;
   }

   const upSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: true,
   };
   const lowSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      arrows: true,
   };
   // console.log('동작:', ImageSlider);
   
   return (
      <div>
      <div className="slider-container">
         <Slider {...upSettings}>
            {upperTag}
         </Slider>
         <div className="h-2"></div>
         <Slider {...lowSettings}>
            {lowerTag}
         </Slider>
      </div>
      </div>
   );
}
export default ImageSlider