import { Link } from "react-router-dom";
import Cover from "../../../pages/Shared/Cover/Cover";
import MenuItem from "../../../pages/Shared/MenuItem/MenuItem";



const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="mt-8">
      { title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {
          items.map((item) => <MenuItem 
          key={item._id} 
          item={item}
          ></MenuItem>)
        }
      </div>
     <div className="flex justify-center">
     <Link to={`/order/${title}`}>
      <button className='btn btn-outline  mt-12 border-0 border-b-4 mb-4'>Order Now</button>
      </Link>
     </div>
    </div>
  );
};

export default MenuCategory;
