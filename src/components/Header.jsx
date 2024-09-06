import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { value, role } = useSelector((state) => state.login);

  return (
    <div>
      <ul className="flex justify-around">
        <li>Home</li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        {value ? (
          <>
            {role === "User" ? (
              <li>Dashboard</li>
            ) : (
              <li>Admin Dashboard</li>
            )}
            <li>Welcome, {role}</li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
