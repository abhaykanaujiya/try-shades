import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;

  .input {
    margin-top: 20px;
    margin-bottom:10px;
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  }
  
  .input::placeholder {
    color: gray;
    border: none ;
  }
  .form-button {
    border:none;
    color: white;
    margin-top: 20px;
    background: #1da1f2;
    height: 40px;
    width:10rem;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;
    margin-bottom:  5vw;
  }
  
  .form-button:hover {
    box-shadow: none;
    margin-bottom: 20px;
  }
.sc-gsnTZi jMiNou{
  height:50vh
}
`;
