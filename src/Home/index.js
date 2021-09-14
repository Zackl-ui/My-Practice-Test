import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  //...

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);
  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    if (text.length >= 3) {
      const newUsers = users.filter(
        (ele) =>
          ele.firstName.toLowerCase().includes(text) ||
          ele.lastName.toLowerCase().includes(text)
      );
      setFilteredUsers(newUsers);
    }

    if (text.length === 0) {
      setFilteredUsers(users);
    }
  };
  return (
    <div className="container">
      <h2>Game of Thrones</h2>
      <div className="search">
        <input
          type="text"
          placeholder="type for search"
          onChange={handleChange}
        />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="boxes">
        {filteredUsers.map((user, index) => {
          return (
            <div className="box" key={index}>
              <div className="row">
                <h3>First Name:</h3>
                <span>{user.firstName}</span>
              </div>
              <div className="row">
                <h3>Last Name:</h3>
                <span>{user.fullName}</span>
              </div>
              <div className="row">
                <h3>Full Name:</h3>
                <span>{user.lastName}</span>
              </div>
              <div className="button">
                <Link to={{ pathname: `/detail-page/${user.id}`, user }}>
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
