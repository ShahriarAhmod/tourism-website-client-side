import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageBookings = () => {
  const [orders, setOrders] = useState([]);

  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("https://damp-falls-01576.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdate = (id) => {
    fetch(`https://damp-falls-01576.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };

  return (
    <div className="container my-5 py-5">
      <h1>All orders {orders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Destination</th>
            <th>Booked By</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.service}</td>
              <td>{pd.name}</td>
              <td>{pd.price} tk</td>
            
              <td>
                <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={pd.status}
                />
              </td>
              <button className="btn bg-danger p-2">Delete</button>
              <button
                onClick={() => handleUpdate(pd._id)}
                className="btn bg-success p-2"
              >
                Update
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageBookings;