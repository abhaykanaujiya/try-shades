import React, { useEffect, useState } from "react";
import { StyledCard } from "./Styles";
import { useNavigate } from "react-router";
import axios from "axios";
const Card = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      const products = res.data.products;
      setData(products);
    });
  }, []);

  const handleClick = () => {
    navigate("/form");
  };
  return (
    <StyledCard class="main">
      {data?.map((v, index) => (
        <div class="cards">
          <div class="card">
            <div class="card_image">
              <img src={v.thumbnail} />
            </div>
            <div class="card_content">
              <h2 class="card_title">{v.brand}</h2>
              <p class="card_text">{v.description}</p>
              <button class="btn card_btn" onClick={handleClick}>
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </StyledCard>
  );
};

export default Card;
