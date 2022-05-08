const Validate = (
  name,
  username,
  address,
  email,
  phone,
) => {
  const regex = /.+\@.+\..+/;
   const pattern = /^\d{10}$/;
  if (name === "") {
    return {
      type: "name",
      msg: "name is missing",
      status: false,
    };
  } else if (username === "") {
    return {
      type: "username",
      msg: "name is missing",
      status: false,
    };
  }
  else if (address === "") {
    return {
      type: "address",
      msg: "address is missing",
      status: false,
    };
  } else if (pattern.test(phone) === false) {
    return {
      type: "number",
      msg: "number is invalid",
      status: false,
    };
  } else if (regex.test(email) === false) {
    return {
      type: "email",
      msg: "email is invalid",
      status: false,
    };
  } else {
    return {
      type: "",
      msg: "",
      status: true,
    };
  }
};
export default Validate;
