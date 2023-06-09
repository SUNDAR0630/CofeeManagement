
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "./Data.json";
import "./Coffee.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const coffeeItem = Data.find((item) => item.id === parseInt(id));
  const [remark, setRemark] = useState("");

  const handleRemarksSubmit = (e) => {
    e.preventDefault();
    const updatedCoffeeItems = Data.map((item) => {
      if (item.id === parseInt(id)) {
        return { ...item, remark };
      }
      return item;
    });
   
    console.log("Updated Coffee Items:", updatedCoffeeItems);
  };

  const handleBackClick = () => {
    navigate("/coffee");
  };

  if (!coffeeItem) {
    return <div>Not found</div>;
  }

  return (
    <div className="WE">
      <Header />
      <div className="coffee-details">
        <img
          className="coffee-image"
          src={coffeeItem.image}
          alt={coffeeItem.title}
        />
        <h2 className="coffee-title">{coffeeItem.title}</h2>
        <p className="coffee-description">{coffeeItem.description}</p>
        <p className="coffee-description">{coffeeItem.ingredients}</p>
        <form onSubmit={handleRemarksSubmit}>
          <label htmlFor="remark">Add Remark:</label>
          <input
            type="text"
            id="remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleBackClick}>Back</button>
      </div>
    </div>
  );
};

export default Details;