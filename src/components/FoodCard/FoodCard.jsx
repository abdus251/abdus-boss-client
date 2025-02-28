import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const[, refetch] = useCart()

    const handleAddToCart = () => {
      if(user && user.email){
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
        })

      }
else{
  Swal.fire({
    title:"You are not Logged In" ,
    text: "Please login to add to the cart",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor:"#d33",
    confirmButtonText: "Yes, login!"
  }).then((result) => {
    if (result.isConfirmed){
      // send the user to the login page
      navigate('/login', {state: {from: location }})
    }
  })

}

    }
  return (
    <div className="card bg-base-100 w-96 border rounded-none">
      <figure><img src={image} alt="Shoes"/></figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-12 mt-4">${price}</p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={ handleAddToCart}
           className="btn btn-outline border-0 border-b-4 border-orange-400 mt-4 bg-slate-200">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
