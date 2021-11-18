import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";

const AddDestination = () => {
    const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://damp-falls-01576.herokuapp.com/addDestination", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(data => {
        if (data.insertedId) {
            alert("Destination Added.")
        }
    })
    
  };
  return (
    <div className="py-5 my-5">
      <div>
        <h1 className="mt-5 text-center text-success">Add a Destination</h1>
        <div className="login-box w-50 p-2 m-auto mt-5">
          <div className="event-box p-5 border border d-flex justify-content-center align-items-center">
            <div className="p-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 border rounded-3" style={{width: "350px"}}
                />
                <br />
                <input
                  {...register("date")}
                  // placeholder="Name"
                  type="date"
                  className="p-2 m-2 border rounded-3" style={{width: "350px"}}
                />
                <br />
                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 border rounded-3" style={{width: "350px"}}
               
                />
                <br />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 border rounded-3" style={{width: "350px"}}
                
                />
                <br />
                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 border rounded-3" style={{width: "350px"}}
                
                />
                <br />
                <select {...register("model")} className="p-2 m-2  border rounded-3 " style={{width: "350px"}}>
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className=" p-2 m-2 btn btn-success w-100 rounded rounded-pill"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDestination;