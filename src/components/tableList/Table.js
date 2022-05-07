import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { StyledTable } from "./Styles";
const Table = () => {
  const [data, setData] = useState();
  const  navigate  = useNavigate();
  console.log(data, "table");
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res, "res");
      const persons = res.data;
      setData({ persons });
    });
  }, []);

  const handleClick = () => {
    navigate("/form")
  }
  return (
    <StyledTable className="table-container">
      <div className="btn-body">
        <button className="btn" onClick={handleClick}>
          Create
        </button>
      </div>
      <table className="table-body">
        <tr className="table-headings">
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
        {data?.persons.map((v, index) => (
          <tr className="table-user-details" id="customers">
            <td>{v.name}</td>
            <td>{v.username}</td>
            <td>{v.email}</td>
            <td>{v.address.street}</td>
            <td>{v.phone}</td>
          </tr>
        ))}
      </table>
    </StyledTable>
  );
};

export default Table;
