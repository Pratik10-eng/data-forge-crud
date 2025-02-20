import React from "react";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPopup(false)}>Close</button>
        <h2>{singleUser[0].name}</h2>
        <h4>{singleUser[0].email}</h4>
        <h4>Age-{singleUser[0].age}</h4>
        <h4>{singleUser[0].gender}</h4>
        <p>{singleUser[0].about}</p>
      </div>
    </div>
  );
};

export default CustomModal;
