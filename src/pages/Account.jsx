import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Outlet, Navigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Account() {
  const [userFirstName, setUserFirstName] = useState("");
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return <Navigate to="/signin" />;
  }
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("uid", "==", currentUser.uid));

  const getUserData = async () => {
    try {
      const querySnapshot = await getDocs(q);
      const userDoc = querySnapshot.docs[0];
      if (userDoc) {
        const firstName = userDoc.data().firstname;
        setUserFirstName(firstName);
      }
    } catch (error) {
      console.dir(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [currentUser]);

  return (
    <main id="account">
      <nav>
        <h1>Hi {userFirstName}!</h1>
        <ul>
          <li>
            <a href="/myaccount/orders">Orders</a>
          </li>
          <li>
            <a href="/myaccount/fidelity">Fidelity</a>
          </li>
          <li>
            <a href="/myaccount/details">Personnal Data</a>
          </li>
          <li>
            <a href="/myaccount/settings">Settings</a>
          </li>
        </ul>
      </nav>

      <section className="nested">
        <Outlet />
      </section>
    </main>
  );
}
