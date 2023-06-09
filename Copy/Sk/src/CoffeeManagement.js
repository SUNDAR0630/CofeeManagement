
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "./Data.json";
import "./Coffee.css";
import Header from "./Header";

const CoffeeManagementDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [coffeeItems, setCoffeeItems] = useState([]);

  useEffect(() => {
    setCoffeeItems(Data);
  }, []);

  const filteredData = coffeeItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="AZ">
      <Header />
      <div className="CV">
        <h1>COFFEE MENU</h1>
      </div>
      <div className="cb">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <br />
      <div className="image-cards">
        {filteredData.map((item) => (
          <div key={item.id}>
            <Link to={`/Data/${item.id}`}>
              {item.image ? (
                <img
                  className="image-card"
                  src={item.image}
                  alt={item.title}
                />
              ) : (
                <p className="no-image-text">NO IMAGE IS AVAILABLE</p>
              )}
            </Link>
            <div>
              <h3>{item.title}</h3>
              <p>Remark: {item.remark}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeManagementDashboard;