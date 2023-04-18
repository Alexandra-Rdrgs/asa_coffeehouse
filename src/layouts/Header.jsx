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
            <Link to="/menu">menu</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          {!currentUser ? (
            <li>
              <Link to="/signin">sign in</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/myaccount">My accound</Link>
                <ul>
                  <li>
                    <Link to="/myaccount/fidelity">Fidelity program</Link>
                  </li>
                  <li>
                    <Link to="/myaccount/orders">Orders</Link>
                  </li>
                  <li>
                    <Link to="/myaccount/personal">My informations</Link>
                  </li>
                  <li>
                    <Link to="/myaccount/settings">Settings</Link>
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
                </ul>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
