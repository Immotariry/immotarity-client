import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    await axios.post(
      "http://localhost:8080/immotarity/api/user/login",
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );

    navigate("/main");
  };

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <input
          placeholder="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEamil(e.currentTarget.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">signup</Link>
    </>
  );
};
