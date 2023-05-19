import { Link, useLoaderData } from "react-router-dom";

const SingleToys = () => {
    const toys = useLoaderData();
    const {description, name, picture_url, price, quantity_available, rating, seller_email, seller_name} = toys;
    console.log(picture_url)
    return (
        <div className="flex items-center gap-3 justify-between mx-auto w-full md:w-5/6 mt-20 bg-rose-100 p-4">
            <div className="w-full">
                <img className="w-full" src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="product" />
            </div>
            <div className="bg-base-100 w-full  p-5">
                <h2 className="mb-4 text-xl font-semibold text-gray-700">Name:  {name}</h2>
                <hr />
                <div className="flex justify-between">
                    <h3 className="my-4 text-sm font-semibold text-gray-500">Seller name: {seller_name}</h3>
                    <h3 className="my-4 text-sm font-semibold text-gray-500">Seller email: {seller_email}</h3>
                </div>
                <hr />
                <div className="my-4 text-sm font-semibold text-gray-500">
                    {description}
                </div>
                <hr />
                <h3 className="mb-4 text-lg font-semibold text-gray-500">Price: {price}$</h3>
                <hr />
                <h3 className="mb-4 text-lg font-semibold text-gray-500">rating: {rating}</h3>
                <hr />
                <h3 className="mb-4 text-lg font-semibold text-gray-500">Available: {quantity_available}</h3>
                <Link to='/'><button className="btn btn-secondary">back</button></Link>
            </div>

        </div>
    );
};

export default SingleToys;