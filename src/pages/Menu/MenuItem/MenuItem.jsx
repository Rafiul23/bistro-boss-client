import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const MenuItem = ({ img, title, subTitle, items }) => {
  return (
    <div>
      <div className="mb-10">
        <Cover img={img} title={title} subTitle={subTitle}></Cover>
      </div>
      <MenuCategory items={items}></MenuCategory>
      <div className="text-center my-10">
        <button className="btn btn-outline border-0 border-b-4">
          Order Your Favourite Food
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
