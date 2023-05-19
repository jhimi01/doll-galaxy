
const AddToys = () => {
    return (
        <div >
           <div className="w-full md:w-3/4 mx-auto mt-10">
           <h1 className="text-5xl my-5 text-center font-bold text-rose-400">Add Toys</h1>
             <form className="w-full md:w-3/4 mx-auto">
               <div className="flex mb-3 gap-3">
                <input className="w-full input input-bordered" type="url" name="name" placeholder="toy url" />
                <input className="w-full input input-bordered " type="text" name="name" placeholder="toy name" />
               </div>
               <div className="flex mb-3 gap-3">
                <input className="w-full input input-bordered " type="text" name="sellername" placeholder="seller name" />
                <input className="w-full input input-bordered " type="email" name="seller-emial" placeholder="seller email" />
               </div>
               <div className="flex mb-3 gap-3">
                <input className="w-full input input-bordered " type="text" name="subcategory" placeholder="sub-category" />
                <input className="w-full input input-bordered " type="text" name="price" placeholder="price" />
               </div>
               <div className="flex mb-3 gap-3">
                <input className="w-full input input-bordered " type="text" name="rating" placeholder="ratings" />
                <input className="w-full input input-bordered " type="text" name="available-quality" placeholder="Available quantity" />
               </div>
               <textarea name="details" placeholder="description" className="textarea textarea-bordered w-full" ></textarea>
              <div className="text-center">
              <input type="submit" className="btn btn-secondary" />
              </div>
             </form>
           </div>
        </div>
    );
};

export default AddToys;