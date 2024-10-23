import { useState } from "react";
import orderImg from "../../assets/order/order.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../Shared/FoodCard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover
        img={orderImg}
        title={"Our Shop"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
        <OrderTab
          items={salad}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab
          items={pizza}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab
          items={soup}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab
          items={dessert}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab
          items={drinks}
          ></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
