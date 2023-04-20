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
    <div>
      <h1>Hello {userFirstName}!</h1>
      <Outlet />
    </div>
  );
}
