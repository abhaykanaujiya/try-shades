import React, { useEffect, useState } from "react";
import Form from "../form/index";
import axios from "axios";
import { useNavigate } from "react-router";
import { StyledContainer } from "./Styles";
import Validate from "../validation/Validation";
const CreateProfile = () => {
    const [errors, setErrors] = useState({ type: "", msg: "", status: false });
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
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
    const result = Validate(name, userName, address, email, phone);
    if (!result?.status) {
      console.log(result, "result");
      setErrors(result);

      
    } else {
      const add = { name, userName, address, email, phone };
      axios
        .post("https://dummyjson.com/products/add", { add })
        .then((res) => {
          console.log(res.data, res.status);
          alert("created successfully");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          alert("something went wrong");
        });
    }
  };

  return (
    <StyledContainer>
      <Form
        className="input"
        type="text"
        placeholder="Enter name"
        onChange={(e) => handleNameChange(e)}
      />
      {!errors.status && errors.type === "name" && (
        <p className="p" style={{ color: "red" }}>
          {errors.msg}
        </p>
      )}
      <Form
        className="input"
        type="text"
        placeholder="Enter User Name"
        onChange={(e) => handleUserNameChange(e)}
      />
      {!errors.status && errors.type === "username" && (
        <p className="p" style={{ color: "red" }}>
          {errors.msg}
        </p>
      )}
      <Form
        className="input"
        type="text"
        placeholder="Enter address"
        onChange={(e) => handleAddressChange(e)}
      />
      {!errors.status && errors.type === "address" && (
        <p className="p" style={{ color: "red" }}>
          {errors.msg}
        </p>
      )}
      <Form
        className="input"
        type="number"
        placeholder="Enter phone no"
        onChange={(e) => handlePhoneChange(e)}
      />
      {!errors.status && errors.type === "phone" && (
        <p className="p" style={{ color: "red" }}>
          {errors.msg}
        </p>
      )}
      <Form
        className="input"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => handleEmailChange(e)}
      />
      {!errors.status && errors.type === "email" && (
        <p className="p" style={{ color: "red" }}>
          {errors.msg}
        </p>
      )}
      <button className="form-button" onClick={handleCreate}>
        Create
      </button>
    </StyledContainer>
  );
};

export default CreateProfile;
