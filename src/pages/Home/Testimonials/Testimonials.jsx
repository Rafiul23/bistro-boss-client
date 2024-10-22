import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

  return (
    <section className="my-20">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
