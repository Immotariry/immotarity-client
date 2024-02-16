import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <h1>Signup</h1>
      <form>
        <input placeholder="email" type="email" required />
        <input placeholder="name" required />
        <input placeholder="password" type="password" required />
        <button type="submit">Login</button>
      </form>
      <Link to="/login">login</Link>
    </>
  );
};
