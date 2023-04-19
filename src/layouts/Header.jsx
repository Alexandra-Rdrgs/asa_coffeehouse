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
      navigate("/");
    } catch (error) {
      alet(
        error +
          "For somme reason, you can't log out. Please check your internet connection and try again."
      );
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src="/src/assets/logo.svg" alt="" width={"100px"} />
        </Link>
        <ul className="menu">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/menu">menu</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <ul className="menu">
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
                <ul className="menu_subcat">
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
