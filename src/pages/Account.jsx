import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export default function Account() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <h1>Account</h1>
      <Outlet />
    </div>
  );
}
