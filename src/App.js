import React, { useState } from "react";
import ReactDOM from "react-dom";
import Logo from './logo.svg';

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const url = "https://github.com/jorgeluis-dev"
  // User Login info
  const database = [
    {
      email: "jorgeluis.geek@gmail.com",
      password: "react"
    }
  ];

  const errors = {
    emailError: "escreva um email valido",
    pass: "senha incorreta"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { emailError, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === emailError.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "EmailError", message: errors.emailError });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (emailError) =>
    emailError === errorMessages.emailError && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input alt="Por favor escreva o seu endereço de email" placeholder="EMAIL" type="text" name="emailError" required />
          {renderErrorMessage("emailError")}
        </div>
        <div className="input-container">
          <input alt="Por favor escreva sua Senha para acessar o Sistema" placeholder="SENHA" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="forgotpassword"><a href={url} target="_blank">Esqueceu sua Senha?</a></div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <img src={Logo} alt="logo" />
        <div className="title"></div>
        {isSubmitted ? <div>Login realizado com sucesso</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
