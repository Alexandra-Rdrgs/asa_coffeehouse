import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Outlet, Navigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs, doc, query, where, updateDoc } from "firebase/firestore";

export default function Informations() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return <Navigate to="/signin" />;
  }
  const userDocRef = doc(db, "users", currentUser.uid);

  // Get all current user data to display in the form
  const getAllUserData = async () => {
    try {
      const querySnapshot = await getDocs(userDocRef);
      const userDoc = querySnapshot.docs[0];
      if (userDoc.exists()) {
        const data = userDoc.data();
        console.log(data);
      }
    } catch (error) {
      console.dir(error);
    }
  };



  useEffect(() => {
    getAllUserData();
  }, [currentUser]);

  return (
    <div>
      <h1>Informations</h1>
      <form action="">
        <label htmlFor="firstname">First name</label>
        <input type="text" name="firstname" id="firstname" />
      </form>
    </div>
  );
}
