import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API";

// Components
import Button from "../Button/Button";

// Styles
import { Wrapper } from "./Login.styles";

//Context
import { Context } from "../../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      setUser({ sessionId: sessionId.session_id, username });

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Wrapper>
      <h3>LOG IN WITH YOUR TMDB CREDENTIALS</h3>
      {error && <div className="error">There was an error!</div>}
      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
