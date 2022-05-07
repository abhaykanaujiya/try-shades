import React, { useEffect, useState } from "react";
import Form from "../form/index";
import axios from "axios";
import { useNavigate } from "react-router";
import { StyledContainer } from "./Styles";
const CreateProfile = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  console.log(employeeData);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCreate = () => {
    const user = { name, userName, address, email, phone };
    axios
      .post("https://jsonplaceholder.typicode.com/users", { user })
      .then((res) => {
        console.log(res.data, res.status);
        alert("created successfully");
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong");
      });
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res, "res");
      const persons = res.data;
      setEmployeeData({ persons });
    });
  }, []);
  return (
    <StyledContainer  style={{marginTop:"20vh" ,backgroundColor:"orange"}}>
      <Form
        className="input"
        type="text"
       
        placeholder="Enter name"
        onChange={(e) => handleNameChange(e)}
      />
      <Form
        className="input"
        type="text"
        placeholder="Enter User Name"
        onChange={(e) => handleUserNameChange(e)}
      />
      <Form
        className="input"
        type="text"
        placeholder="Enter address"
        onChange={(e) => handleAddressChange(e)}
      />
      <Form
        className="input"
        type="number"
        placeholder="Enter phone no"
        onChange={(e) => handlePhoneChange(e)}
      />
      <Form
        className="input"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => handleEmailChange(e)}
      />
      <button className="form-button" onClick={handleCreate}>Create</button>
    </StyledContainer>
  );
};

export default CreateProfile;
