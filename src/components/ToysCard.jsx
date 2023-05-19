import { Link } from "react-router-dom";

const ToysCard = ({toy}) => {
  console.log(toy)
    const {name, url, price, rating, _id} = toy;
    console.log(toy)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img style={{height: '200px', objectFit:'cover'}}  className="w-full" src={url} alt="Product Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Toy: {name}</div>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          <div className="flex items-center mt-4">
            <svg className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
              <path d="M10 0l3.09 6.31L20 7.08l-4.46 4.34L16.64 20 10 16.41 3.36 20l1.1-8.58L0 7.08l6.91-.77L10 0zm0 2.5L7.5 6.65 2.72 7.5l5.03 4.9-1.2 5.66L10 14.57l4.45 2.5-1.2-5.66L17.28 7.5 12.5 6.65 10 2.5z" />
            </svg>
            <p className="ml-2 text-gray-700">{rating}</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <Link to={`/shopby/${_id}`}><button className="bg-rose-400 hover:bg-rose-300 text-white font-bold py-2 px-4 rounded-full">
            View Details
          </button></Link>
        </div>
     
      </div>
    );
};

export default ToysCard;