import styled from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid;
  
  display: flex;
  justify-content: center;
  background-color: gray;
  flex-flow: column;
  width: 100vw;
  .table-head {
    display: flex;
    justify-content: space-between;
  }
  .table-body {
    border: 1px solid;
    box-shadow: inset 0px 2px 5px 5px;
    border-radius: 12px;
    background-color: white;
  margin-left:20% ;
  margin-right:20% ;
  margin-top :2%;
    padding: 25px;
  }
  @media only screen and (max-width: 600px) {
   .table-body {
margin:0px ;
     padding:10px ;
  background-color: lightblue;
}
  }

  .table-headings {
    height: 40px;
  }
  th {
    background-color: gray;
  }
  td {
    padding-bottom: 30px;
  }
  #customers tr:nth-child(even) {
    background-color: gray;
  }

  .btn {
    width: 135px;
    height: 50px;
    border-radius: 12px;
    border-style: none;
    margin-left: 50%;
  
    font-size: 18px;
  }
  .btn:hover {
    background-color: skyblue;
  }
`;