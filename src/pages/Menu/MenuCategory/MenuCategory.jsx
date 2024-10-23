import MenuItemCard from './../../Shared/MenuItemCard/MenuItemCard';

const MenuCategory = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {
            items.map(item => <MenuItemCard
            key={item._id}
            item={item}
            ></MenuItemCard>)
        }
      </div>
    );
};

export default MenuCategory;