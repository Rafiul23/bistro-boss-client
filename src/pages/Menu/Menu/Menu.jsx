import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menu_bg from '../../../assets/menu/banner3.jpg';
import PopularMenu from './../../Home/PopularMenu/PopularMenu';

const Menu = () => {
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
            
        </div>
    );
};

export default Menu;