const Product = (props) => {
  return (
    <div
      
      className=" rounded-md  flex flex-col-2 justify-between bg-gray-100 shadow-md "
    >
      <div className="m-3 flex  justify-left p-1 space-x-2" >
        <img src={props.img} className="h-48 rounded-md w-48" alt="image" />
        <div className="px-3  justify-left ">
        
          <h3 className=" flex justify-left items-left space-x-5 font-bold uppercase ">
            {props.title}
          </h3>
        
        <p className="text-sm capitalize text-left text-gray-500 mt-4">
          {props.description}
        </p>
        <h2 className="   rounded-md    text-xxl font-bold mt-3  ">
          ${props.price}
        </h2>
        <div className=" py-1 text-center   text-black rounded-md  bg-yellow-300 mt-5">
          <button className="">ORDER</button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Product;
