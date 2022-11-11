import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewDetail from "./ReviewDetail";

const Myreview = () => {
  const { user } = useContext(AuthContext);

  const [myreview, setMyreview] = useState([]);

  useEffect(() => {
    fetch(`https://travelers-server.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data));
  }, [user?.email])

  const handleDelete = (id) => {
    const proceed = window.confirm("aru you sure to delete?");
    if (proceed) {
      fetch(`https://travelers-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      if (data.deletedCount > 0) {
        alert("deleted successfully");
        const remain = myreview.filter((rev) => rev._id !== id);
        setMyreview(remain);
      }
    }
  };
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
              ></ReviewDetail>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myreview;
