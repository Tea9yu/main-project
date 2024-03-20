 
import Slider from "react-slick";
import "./slider/slick.css";
import "./slider/slick-theme.css";

export default function Test() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };
      return (
        <>
        
        <div className="flex flex-col m-10 border bg-slate-500"><p>test</p>
        <Slider {...settings}  className="slider-container border h-96 text-white">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
        </>
      );
}
