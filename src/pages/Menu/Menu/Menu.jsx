import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menu_bg from '../../../assets/menu/banner3.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from './../../../components/SectionTitle/SectionTitle';

const Menu = () => {
    const [menu] = useMenu();

    const offered =  menu.filter(item => item.category === 'offered');
    const dessert =  menu.filter(item => item.category === 'dessert');
    const pizza =  menu.filter(item => item.category === 'pizza');
    const salad =  menu.filter(item => item.category === 'salad');
    const soup =  menu.filter(item => item.category === 'soup');
    
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover
            img={menu_bg}
            title={'Our Menu'}
            subTitle={'Would you like to try a dish?'}
            ></Cover>
            <SectionTitle
            subHeading={"Don't Miss"}
            heading={"Today's offer"}
            ></SectionTitle>
            
            
        </div>
    );
};

export default Menu;