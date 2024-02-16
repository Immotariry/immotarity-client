import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <input placeholder="email" type="email" required />
        <input placeholder="password" type="password" required />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">signup</Link>
    </>
  );
};
