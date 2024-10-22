import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)
    });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {
            menu.map(item => <MenuItemCard
            key={item._id}
            item={item}
            ></MenuItemCard>)
        }
      </div>
      <div className="text-center mt-10">
      <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
