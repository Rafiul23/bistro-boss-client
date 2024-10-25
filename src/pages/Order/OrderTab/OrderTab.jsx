import React from "react";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const numOfPages = Math.ceil(items.length / itemsPerPage);

  // Splitting items into pages
  const paginatedItems = Array.from({ length: numOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      {paginatedItems.map((pageItems, pageIndex) => (
        <SwiperSlide key={pageIndex}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {pageItems.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OrderTab;
