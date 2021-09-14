import React from "react";
import "./detailPage.css";
const DetailPage = (props) => {
  console.log(props);
  return (
    <div className="container-detail">
      <div className="detail">
        <img
          src={props.history.location.user.imageUrl}
          alt={props.history.location.user.image}
        />
        <h2>Family:</h2>
        <h3>{props.history.location.user.family}</h3>
        <h2>First Name:</h2>
        <h4>{props.history.location.user.firstName}</h4>
        <h2>Full Name:</h2>
        <h4>{props.history.location.user.fullName}</h4>
        <h2>Last Name:</h2>
        <h4>{props.history.location.user.lastName}</h4>
      </div>
    </div>
  );
};

export default DetailPage;
