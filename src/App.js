import "./App.css";
import Details from "./Details";
import { useState } from "react";
import validator from "validator";

function App() {
  const [showDetails, setshowDetails] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const handleNextButton = function () {
    if (conPassword === "" && password === "") {
      alert("You need to give password");
    } else if (conPassword === password) {
      setshowDetails(!showDetails);
    } else {
      alert("Password is not matched");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (e) => {
    const newObj = { ...e, [e.target.name]: e.target.value };
    setData(newObj);
  };
  const handleValidation = () => {
    // if (data.password === "") {
    //   const newObj = {
    //     ...errorMessage,
    //     password: "Password is required",
    //   };
    //   console.log(newObj);
    //   setErrorMessage(newObj);
    // }
    if (!validator.isEmail(data.email)) {
      const newObj = {
        ...errorMessage,
        email: "Provide a valid email id",
      };
      setErrorMessage(newObj);
    } else {
      const newObj = {
        ...errorMessage,
        email: "Email id accepted",
      };
      setErrorMessage(newObj);
    }
  };
  // console.log(data.email);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Email">Email</label>
          <input
            type="mail"
            placeholder="Enter your email id"
            name="email"
            onChange={(e) => {
              handleInput(e);
              handleValidation();
            }}
          />
          <span>{errorMessage.email && <p>{errorMessage.email}</p>}</span>
          <br />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <span>
            {errorMessage.password !== "" ? <p>{errorMessage.password}</p> : ""}
          </span> */}
          <br />
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="password"
            onChange={(e) => setConPassword(e.target.value)}
          />
          <br />
          <button onClick={handleNextButton}>Next</button>
          {showDetails ? <Details /> : ""}
        </form>
      </div>
    </div>
  );
}

export default App;
