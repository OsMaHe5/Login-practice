import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const database = [
    {
      username: "user1@user.com",
      password: "pass1"
    },
    {
      username: "user2@user.com",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Correo Invalido",
    pass: "Contraseña Invalida"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

////
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Correo </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
////
  return (
    <div className="app">
      <div className="login-form">
        <div className="title"><h1>Iniciar Sesion</h1></div>
        {isSubmitted ? <div>Se inicio sesion correctamente!</div> : renderForm}
      </div>
    </div>
  );
}

export default App;