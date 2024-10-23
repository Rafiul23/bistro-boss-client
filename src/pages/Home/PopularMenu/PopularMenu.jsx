import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {
            popularItems.map(item => <MenuItemCard
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
