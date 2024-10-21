import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner_img_1 from '../../../assets/home/01.jpg'
import banner_img_2 from '../../../assets/home/02.jpg'
import banner_img_3 from '../../../assets/home/03.png'
import banner_img_4 from '../../../assets/home/04.jpg'
import banner_img_5 from '../../../assets/home/05.png'
import banner_img_6 from '../../../assets/home/06.png'
import './Banner.css';

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} thumbWidth={80}>
      <div>
        <img src={banner_img_1} />
        
      </div>
      <div>
        <img src={banner_img_2} />
        
      </div>
      <div>
        <img src={banner_img_3} />
        
      </div>
      <div>
        <img src={banner_img_4} />
        
      </div>
      <div>
        <img src={banner_img_5} />
        
      </div>
      <div>
        <img src={banner_img_6} />
        
      </div>
    </Carousel>
  );
};

export default Banner;
