import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewDetail from "./ReviewDetail";

const Myreview = () => {
  const { user } = useContext(AuthContext);
  const [myreview, setMyreview] = useState({});
  console.log(myreview);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreview(data));
  }, [user?.email]);
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
            <ReviewDetail></ReviewDetail>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myreview;
