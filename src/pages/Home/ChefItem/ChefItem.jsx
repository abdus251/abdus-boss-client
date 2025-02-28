const ChefItem = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className=" w-96 bg-base-200 mb-4">
  <figure className="">
    <img
      src={image}
      alt="salad"
      className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn bg-base-200 text-yellow-500 border-0 border-b-4 border-yellow-500">Add To Cart </button>
    </div>
  </div>
</div>
  )
}

export default ChefItem