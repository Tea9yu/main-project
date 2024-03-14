import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '.././images/c1.png'
import img2 from '.././images/c2.png'
import img3 from '.././images/c3.png'
import img4 from '.././images/매장3.jpg'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };
  // console.log('동작:', ImageSlider);
  return (
    <div  className="slider-container">
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        <div>
           <img src={img1} className="w-4/5 mx-auto h-96" />
        </div>
        <div>
           <img src={img2} className="w-4/5 mx-auto h-96" />
        </div>
        <div>
           <img src={img3} className="w-4/5 mx-auto h-96" />
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
// import img1 from '.././images/c1.png'
// import img2 from '.././images/c2.png'
// import img3 from '.././images/매장2.jpg'
// import img4 from '.././images/매장3.jpg'

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 2000,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     variableWidth: true,
//     centerPadding: '0px',
//     pauseOnHover: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           arrows: true,
//         }
//       }
//     ]
//   };
//   return (
//     <div className="w-full h-96 bg-blue-400" >
//       <Slider {...settings}>
//         <div >
//           <img src={img1} className="w-full h-96" />
//         </div>
//         <div>
//           <img src={img2} className="w-full h-96" />
//         </div>
//         <div>
//           <img src={img3} className="w-full h-96" />
//         </div>
//       </Slider>
//     </div>
//   );
// }
// export default ImageSlider


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