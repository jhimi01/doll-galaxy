import { useContext, useState } from "react";
import { AuthContext } from "../../AuthPrvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleaddtoy =(e)=>{
    e.preventDefault();
    const form = e.target;
    const url = form.url.value;
    const name = form.name.value;
    const sellername = form.sellername.value;
    const selleremial = form.selleremial.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availablequality = form.availablequality.value;
    const details = form.details.value;

    const toysfiled = 
    {url, name, sellername, selleremial, subcategory, price, rating, availablequality, details}
    console.log(toysfiled);

    fetch('http://localhost:5000/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toysfiled)
    })
    .then(res => res.json())
    .then(data => {
      form.reset()
      console.log(data)});

    // console.log(url)
    // console.log(name)
    // console.log(sellername)
    // console.log(selleremial)
    // console.log(subcategory)
    // console.log(price)
    // console.log(rating)
    // console.log(availablequality)
    // console.log(details)
  }

    return (
       <>
        {user ?  <div >
           <div className="w-full md:w-3/4 mx-auto mt-10">
           <h1 className="text-5xl my-5 text-center font-bold text-rose-400">Add Toys</h1>
             <form onSubmit={handleaddtoy} className="w-full md:w-3/4 mx-auto">
               <div className="flex mb-3 gap-3">
                <input className="input-secondary  w-full input input-bordered" type="url" name="url" placeholder="toy url" />
                <input className="input-secondary  w-full input input-bordered " type="text" name="name" placeholder="toy name" />
               </div>
               <div className="flex mb-3 gap-3">
                <input className="input-secondary  w-full input input-bordered " value={user.displayName} type="text" name="sellername" placeholder="seller name" />
                <input className="input-secondary  w-full input input-bordered " value={user.email} type="email" name="selleremial" placeholder="seller email" />
               </div>
               <div className="flex mb-3 gap-3">
               <select
                  className="input-secondary text-gray-400 w-full input input-bordered"
                  name="subcategory"
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                >
                  <option value="" disabled>
                    Select subcategory
                  </option>
                  <option className="text-gray-800" value="Baby dolls">Baby dolls</option>
                  <option className="text-gray-800" value="Barbie">Barbie</option>
                  <option className="text-gray-800" value="American girl">American girl</option>
                </select>
                <input className="input-secondary  w-full input input-bordered " type="text" name="price" placeholder="price" />
               </div>
               <div className="flex mb-3 gap-3">
                <input className="input-secondary  w-full input input-bordered " type="text" name="rating" placeholder="ratings" />
                <input className="input-secondary  w-full input input-bordered " type="text" name="availablequality" placeholder="Available quantity" />
               </div>
               <textarea name="details" placeholder="description" className="textarea textarea-secondary textarea-bordered w-full" ></textarea>
              <div className="text-center">
              <input type="submit" className="btn btn-secondary" />
              </div>
             </form>
           </div>
        </div> : <Navigate to='/login' state={{from: location}} replace/>}
        
       </>
    );
};

export default AddToys;