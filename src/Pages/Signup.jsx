import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    return axios.post("http://localhost:8080/immotarity/api/user/signup", {
      email: email,
      username: name,
      password: password,
    });
  };

  return (
    <>
      <h1>Signup</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}
      >
        <input
          placeholder="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          placeholder="name"
          value={name}
          required
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <Link to="/">login</Link>
    </>
  );
};
