import React, { useState, useEffect } from "react";
import "./detailPage.css";
import { useParams } from "react-router-dom";
const DetailPage = (props) => {
  let { id } = useParams();
  const [detail, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails([data]);
      });
  }, []);
  return (
    <div className="container-detail">
      {detail.map((item) => {
        return (
          <div className="detail">
            <img src={item.imageUrl} alt={item.image} />
            <h2>Family:</h2>
            <h3>{item.family}</h3>
            <h2>First Name:</h2>
            <h4>{item.firstName}</h4>
            <h2>Full Name:</h2>
            <h4>{item.fullName}</h4>
            <h2>Last Name:</h2>
            <h4>{item.lastName}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
