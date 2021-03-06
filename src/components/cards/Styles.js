import styled from "styled-components";

export const StyledCard = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  /* height: 85vh; */
  /* justify-content: space-around; */
  background-color: rgb(243, 239, 239);
  display: flex;
  flex-wrap: wrap;
  /* max-width: 1200px; */
  margin: 0 auto;
  justify-content: center;

  h2 {
    font-size: 24px;
    font-weight: 400;
  }

  img {
    /* height: auto;
    max-width: 100%; */
    height: 320px;
    width: 400px;

    vertical-align: middle;
  }

  .btn {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
  }

  .btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  .cards {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 400px;
    height: 500px;
    margin-right: 5px;
    margin-bottom: 10px;
  }

  .card_image {
    /* width:300px ; */
    /* height:500px ; */
  }
  /* @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  } */

  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card_content {
    padding: 1rem;
    height: 148px;
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  }

  .card_title {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }

  .card_text {
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    font-weight: 400;
  }
  .made_by {
    font-weight: 400;
    font-size: 13px;
    margin-top: 35px;
    text-align: center;
  }
`;
