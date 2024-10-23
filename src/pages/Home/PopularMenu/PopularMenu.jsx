import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from './../../Menu/MenuCategory/MenuCategory';

const PopularMenu = () => {

  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <MenuCategory
      items={popularItems}
      ></MenuCategory>
      <div className="text-center mt-10">
      <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
