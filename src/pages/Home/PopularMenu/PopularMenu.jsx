import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
    <section>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <h2>{menu.length}</h2>
    </section>
  );
};

export default PopularMenu;
