import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    status: "",
  });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (e) => {
    setValue(e.target.value);
    setUser({ ...user, status: e.target.value });
    setHelperText(" ");
    setError(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", email: "", status: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      //resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/");
        }, 2000);
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please Register </h3>
        <RadioGroup
          aria-label="quiz"
          name={"status"}
          value={user.status}
          onChange={handleRadioChange}
          required={true}
        >
          <FormControlLabel
            value="Etudiant"
            control={<Radio />}
            label="Etudiant"
          />
          <FormControlLabel
            value="Commercant"
            control={<Radio />}
            label="Commerçant"
          />
        </RadioGroup>
        <label htmlFor={"username"} className={"sr-only"}>
          Username:{" "}
        </label>
        <input
          type={"text"}
          name={"username"}
          onChange={onChange}
          className={"form-control"}
          placeholder={"Enter Username"}
          value={user.username}
        />
        <label htmlFor={"email"} className={"sr-only"}>
          Email:{" "}
        </label>
        <input
          type={"email"}
          name={"email"}
          onChange={onChange}
          className={"form-control"}
          placeholder={"Enter email"}
          value={user.email}
        />
        <label htmlFor={"password"} className={"sr-only"}>
          Password:{" "}
        </label>
        <input
          type={"password"}
          name={"password"}
          onChange={onChange}
          className={"form-control"}
          placeholder={"Enter Password"}
          value={user.password}
        />
        <button className={"btn btn-lg btn-primary btn-block"} type={"submit"}>
          Register
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Register;
