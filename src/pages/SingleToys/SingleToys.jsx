import { Link, useLoaderData } from "react-router-dom";

const SingleToys = () => {
    const toys = useLoaderData();
    const {details, name, url, price, availablequality, rating, selleremial, sellername} = toys;
    console.log(url, name)
    return (
        <div className="md:flex items-center gap-3 justify-between mx-auto w-full md:w-5/6 mt-20 bg-rose-100 p-4">
            <div className="w-full">
                <img style={{height: '300px', objectFit:'cover'}}   className="w-full" src={url} alt="product" />
            </div>
            <div className="bg-base-100 w-full  p-5">
                <h2 className="mb-4 text-xl font-semibold text-gray-700">Doll Name: {name}</h2>
                <hr />
                <div className="flex justify-between">
                    <h3 className="my-4 text-sm font-semibold text-gray-500">Seller name: {sellername}</h3>
                    <h3 className="my-4 text-sm font-semibold text-gray-500">Seller email: {selleremial}</h3>
                </div>
                <hr />
                <div className="my-4 text-sm font-semibold text-gray-500">
                   details: {details ? details : 'not available'}
                </div>
                <hr />
                <h3 className="mb-4 text-lg font-semibold text-gray-500">Price: {price}$</h3>
                <hr />
                <h3 className="mb-4 text-lg font-semibold text-gray-500">rating: {rating}</h3>
                <hr />
                <h3 className="mb-4 text-lg font-semibold text-gray-500">Available: {availablequality}</h3>
                <Link to='/'><button className="btn btn-secondary">back</button></Link>
            </div>

        </div>
    );
};

export default SingleToys;