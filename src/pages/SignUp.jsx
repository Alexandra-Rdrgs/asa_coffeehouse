import { useContext } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <main>
      <div>
        <h1>Hello stranger, let's create your account.</h1>
        <form action="">
          <label htmlFor="">Firstname</label>
          <input type="text" />
          <label htmlFor="">Lastname</label>
          <input type="text" />
          <label htmlFor="">Birthday</label>
          <input type="date" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <label htmlFor="">Confirm password</label>
          <input type="password" />
          <label htmlFor="">
            Creating an account means you rea our Terms of Service, Privacy
            Policy and our default Notification Settings.
          </label>
          <input type="checkbox" />
          <button type="submit">Sign up</button>
        </form>
        <p>
          Already have an account ? <Link to="/signin">Sign in.</Link>
        </p>
      </div>
    </main>
  );
}
