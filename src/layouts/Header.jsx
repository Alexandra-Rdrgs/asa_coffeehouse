import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function Header() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/admin");
    } catch (error) {
      alet(
        error +
          "For somme reason, you can't log out. Please check your internet connection and try again."
      );
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo"></a>
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/illustration">menu</Link>
          </li>
          <li>
            <Link to="/linocut">about</Link>
          </li>
          <li>
            <Link to="/street-art">shop</Link>
          </li>
          <li>
            <Link to="/street-art">contact</Link>
          </li>
          <li>
            <Link to="/street-art">cart</Link>
          </li>
          {currentUser && (
            <>
              <li>
                <Link to="/dashboard">account</Link>
              </li>
              <li>
                <button onClick={logOut}>
                  <img
                    src="/src/assets/icons/logout.svg"
                    alt=""
                    width={"24px"}
                  />
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
