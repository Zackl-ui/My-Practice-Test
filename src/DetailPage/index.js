import React, { useState, useEffect } from "react";
import "./detailPage.css";
import { useParams, Link } from "react-router-dom";
const DetailPage = () => {
  let { id } = useParams();
  const [detail, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails([data]);
      });
  }, [id]);
  return (
    <div className="container-detail">
      {detail.map((item) => {
        return (
          <div className="detail">
            <img src={item.imageUrl} alt={item.image} />
            <div className="row">
              <div className="detail-list">
                <h2>Title:</h2>
                <h4>{item.title}</h4>
              </div>
              <div className="detail-list">
                <h2>Family:</h2>
                <h4>{item.family}</h4>
              </div>
            </div>
            <div className="row">
              <div className="detail-list">
                <h2>First Name:</h2>
                <h4>{item.firstName}</h4>
              </div>
              <div className="detail-list">
                <h2>Full Name:</h2>
                <h4>{item.fullName}</h4>
              </div>
            </div>
            <div className="last">
              <h2>Last Name:</h2>
              <h4>{item.lastName}</h4>
            </div>
            <Link className="back" to="/">
              Back
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
