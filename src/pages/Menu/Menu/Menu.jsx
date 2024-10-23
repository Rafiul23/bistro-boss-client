import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menu_bg from "../../../assets/menu/banner3.jpg";
import desert_img from '../../../assets/menu/dessert-bg.jpeg';
import pizza_img from '../../../assets/menu/pizza-bg.jpg';
import salad_img from '../../../assets/menu/salad-bg.jpg';
import soup_img from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover
        img={menu_bg}
        title={"Our Menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <div className="text-center my-10">
        <button className="btn btn-outline border-0 border-b-4">
          Order Your Favourite Food
        </button>
      </div>
    
    <MenuItem
    img={desert_img}
    title={'Deserts'}
    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    items={dessert}
    ></MenuItem>

      

      <div className="mb-10">
      <Cover
        img={pizza_img}
        title={"Pizza"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      </div>
      <MenuCategory items={pizza}></MenuCategory>
      <div className="text-center my-10">
        <button className="btn btn-outline border-0 border-b-4">
          Order Your Favourite Food
        </button>
      </div>

      <div className="mb-10">
      <Cover
        img={salad_img}
        title={"Salads"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      </div>
      <MenuCategory items={salad}></MenuCategory>
      <div className="text-center my-10">
        <button className="btn btn-outline border-0 border-b-4">
          Order Your Favourite Food
        </button>
      </div>

     <div className="mb-10">
     <Cover
        img={soup_img}
        title={"Soups"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
     </div>
      <MenuCategory items={soup}></MenuCategory>
      <div className="text-center my-10">
        <button className="btn btn-outline border-0 border-b-4">
          Order Your Favourite Food
        </button>
      </div>

    </div>
  );
};

export default Menu;
