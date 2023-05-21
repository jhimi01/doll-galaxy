import { useContext, useState } from "react";
import { AuthContext } from "../../AuthPrvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  useTitle('Add Toys');
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleaddtoy =(e)=>{
    e.preventDefault();
    const form = e.target;
    const url = form.url.value;
    const name = form.name.value;
    const sellername = form.sellername.value;
    const email = form.selleremial.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availablequality = form.availablequality.value;
    const details = form.details.value;

    const toysfiled = 
    {url, name, sellername, email, subcategory, price, rating, availablequality, details}
    console.log(toysfiled);

    fetch('https://toy-galaxy-server-plum.vercel.app/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toysfiled)
    })
    .then(res => res.json())
    .then(data => {
      form.reset()
      console.log(data)
      if (data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/mytoys");
      }
    
    });

  }

    return (
      
          <div >
           <div className="w-full md:w-3/4 mx-auto mt-10">
           <h1 className="text-5xl my-5 text-center font-bold text-rose-400">Add Toys</h1>
             <form onSubmit={handleaddtoy} className="w-full md:w-3/4 mx-auto">
               <div className="flex mb-3 gap-3">
                <input className="input-secondary  w-full input input-bordered" type="url" name="url" placeholder="toy url" required/>
                <input className="input-secondary  w-full input input-bordered " type="text" name="name" placeholder="toy name" required/>
               </div>
               <div className="flex mb-3 gap-3">
                <input className="input-secondary  w-full input input-bordered " value={user?.displayName} type="text" name="sellername" placeholder="seller name" required/>
                <input className="input-secondary  w-full input input-bordered " value={user?.email} type="email" name="selleremial" placeholder="seller email" required/>
               </div>
               <div className="flex mb-3 gap-3">
               <select
                  className="input-secondary text-gray-400 w-full input input-bordered"
                  name="subcategory"
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select subcategory
                  </option>
                  <option className="text-gray-800" value="Baby dolls">Baby dolls</option>
                  <option className="text-gray-800" value="Barbie">Barbie</option>
                  <option className="text-gray-800" value="American girl">American girl</option>
                </select>
                <input className="input-secondary  w-full input input-bordered " type="text" name="price" placeholder="price" required/>
               </div>
               <div className="flex mb-3 gap-3">
                <input className="input-secondary  w-full input input-bordered " type="text" name="rating" placeholder="ratings" required/>
                <input className="input-secondary  w-full input input-bordered " type="text" name="availablequality" placeholder="Available quantity" required/>
               </div>
               <textarea name="details" placeholder="description" className="textarea textarea-secondary textarea-bordered w-full" required></textarea>
              <div className="text-center">
              <input type="submit" className="btn px-5 mt-2 btn-secondary" />
              </div>
             </form>
           </div>
        </div> 
   
    );
};

export default AddToys;