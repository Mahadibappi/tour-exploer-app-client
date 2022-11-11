import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewDetail from "./ReviewDetail";

const Myreview = () => {
  const { user, loading } = useContext(AuthContext);
  const [myreview, setMyreview] = useState([]);

  useEffect(() => {
    document.title = "Myreview"
  }, [])
  useEffect(() => {
    fetch(`https://travelers-server.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data));
    if (loading) {
      return <button className="btn loading">loading</button>
    }
  }, [user?.email, loading])

  const handleDelete = (id) => {
    const proceed = window.confirm("aru you sure to delete?");
    if (proceed) {
      fetch(`https://travelers-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remain = myreview.filter((rev) => rev._id !== id);
            setMyreview(remain);
          }
        });

    }
  };

  const handleUpdate = (id) => {
    fetch(`https://travelers-server.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'Approved' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          const remain = myreview.filter(rev => rev._id !== id);
          const approving = myreview.find(rev => rev._id === id);
          approving.status = 'Approved'
          const newReviwe = [...remain, approving];
          setMyreview(newReviwe)
        }
      })

  }
  return (
    <div className="mt-10">
      <h3 className="text-5xl text-bold text-teal-300 text-center mb-4">
        Your reviews
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Review</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            {myreview.map((my) => (
              <ReviewDetail
                key={my._id}
                my={my}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></ReviewDetail>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myreview;
