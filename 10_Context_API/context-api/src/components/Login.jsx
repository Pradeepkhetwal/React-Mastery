import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // now ab we will use the context that we have created i.e UserContext.

  // So we have a method for it i.e is useContext inside which we pass the context that we create.

  // As we know in userContextProvider we have passed user and setUser so we can get this setUser here as below.
  const { setUser } = useContext(userContext);
  const handleSubmit = (e) => {
    // e stands for event. It's automatically passed to your function when it's triggered by an event — like a button click or a form submission.
    /* By default, when you submit a form in HTML, the browser:
      reloads the page
      sends the form data to the server (in traditional HTML apps)
      But in React (and most modern JS frameworks), we don’t want the page to reload — we handle the form ourselves using state.
      So e.preventDefault() stops the default form submission behavior, letting you control what happens instead (like saving the data in state or sending it to an API).
      */
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
