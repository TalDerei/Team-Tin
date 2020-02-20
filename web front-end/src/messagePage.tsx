import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';


const MessagePage = (props: any): JSX.Element | null => {
  const [enteredMessage, setEnteredMessage] = useState<string>(`Hi, What's up?`);

  function handleMessageInputChange() {
    setEnteredMessage(enteredMessage);
  }
  if (props.signedIn)
    return <p id="messages">
      {props.userName} <br />
      <form>
        <label>
          Enter the message:
    <input type="text" name="name" value={enteredMessage} onChange={handleMessageInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <GoogleLogout
        className="googleLogoutButton"
        clientId="372884561524-22jfggk3pefbnanh83o92mqqlmkbvvd9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onLogout}
      >
      </GoogleLogout>
    </p>;
  else
    return null;
}

function onLogout(): void {
  const appLogo = document.getElementById("App-logo");
  const loginButton = document.getElementById("login-button");
  const messageDiv = document.getElementById("messages");
  loginButton!.style.display = "none";
  // if (appLogo!.style.display === "none") {
  //   appLogo!.style.display = "block";
  //   loginButton!.style.display = "block";
  //   messageDiv!.style.display = "block";
  // } else {
  appLogo!.style.display = "block";
  loginButton!.style.display = "block";
  messageDiv!.style.display = "none";
  // }
}

export default MessagePage;