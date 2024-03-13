// import React from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from '.././images/데일리.jpg'
// import img2 from '.././images/매장.jpg'
// import img3 from '.././images/매장2.jpg'
// import img4 from '.././images/매장3.jpg'

//  const ImageSlider = () => {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,      
//       autoplay: true,
//       autoplaySpeed: 5000,
//       pauseOnHover: true,
//     };
//     // console.log('동작:', ImageSlider);
//     return (
//       <div className="">
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div className="w-1/3">
//             <img className="" src={img1} />

//             <img className="" src={img2} />

//             <img className="" src={img3} />

//             <img className="" src={img4} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// export default ImageSlider

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '.././images/데일리.jpg'
import img2 from '.././images/매장.jpg'
import img3 from '.././images/매장2.jpg'
import img4 from '.././images/매장3.jpg'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0px',
    pauseOnHover: true,
  };
  return (
    <div >
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div >
          <img src={img1} className="w-1/5"/>
        </div>
        <div>
          <img src={img2} className="w-1/5"/>
        </div>
      </Slider>
    </div>
  );
}
export default ImageSlider


// import React from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function ImageSlider() {
//   const ImageSlider {
//         const settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 1,
//           slidesToScroll: 1
//         };
//   return (
//     <div>
//          <h2> Single Item</h2>
//       <Slider {...settings}>
//          <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//           <h3>3</h3>
//            </div>
//           <div>
//              <h3>4</h3>
//            </div>
//            <div>
//              <h3>5</h3>
//            </div>
//            <div>
//              <h3>6</h3>
//            </div>
//          </Slider>
//        </div>
//   )
// }