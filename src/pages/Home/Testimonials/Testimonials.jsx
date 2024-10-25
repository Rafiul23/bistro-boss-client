import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

  return (
    <section className="my-20">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>

      <Swiper autoplay={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center space-y-4 my-16 mx-24">
                    <FaQuoteLeft className="text-7xl" />
                <Rating style={{ maxWidth: 250, }} readOnly={true} value={review.rating} />
                <p className="mb-8 text-center">{review.details}</p>
                <h3 className="text-yellow-600 font-bold text-xl">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
