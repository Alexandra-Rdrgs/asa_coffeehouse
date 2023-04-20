import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { db } from "/firebase-config";
import { addDoc, collection } from "firebase/firestore";

export default function SignUp() {
  const [validation, setValidation] = useState("");

  const { signUp } = useContext(UserContext);

  const databaseRef = collection(db, "users");

  const inputs = useRef([]);
  const addInputs = (element) => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element);
    }
  };
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      (inputs.current[3].value.length || inputs.current[4].value.length) < 8
    ) {
      setValidation("Password must be at least 8 characters long.");
      return;
    }
    if (inputs.current[4].value !== inputs.current[5].value) {
      setValidation("Passwords do not match.");
      return;
    }
    if (inputs.current[2].value > new Date()) {
      setValidation("You must be at least 18 years old.");
      return;
    }
    try {
      const cred = await signUp(
        inputs.current[3].value,
        inputs.current[4].value
      );
      addDoc(databaseRef, {
        uid: cred.user.uid,
        firstname: inputs.current[0].value,
        lastname: inputs.current[1].value,
        birthday: inputs.current[2].value,
        email: inputs.current[3].value,
        createdAt: new Date(),
      });
      formRef.current.reset();
      setValidation("");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setValidation("Email format is invalid.");
      }
      if (error.code === "auth/email-already-in-use") {
        setValidation("Email already in use.");
      }
    }
  };

  return (
    <main>
      <div>
        <h1>Welcome, let's create your account.</h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            required
            className=""
            id="firstname"
            ref={addInputs}
          />
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            required
            className=""
            id="lastname"
            ref={addInputs}
          />
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            required
            className=""
            id="birthday"
            ref={addInputs}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            className=""
            id="email"
            ref={addInputs}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            className=""
            id="password"
            ref={addInputs}
          />
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            type="password"
            name="confirm-password"
            required
            className=""
            id="confirm_password"
            ref={addInputs}
          />
          <p>{validation}</p>
          <br />
          <button type="submit">Sign up</button>
        </form>
        <p>
          Already have an account ? <Link to="/signin">Sign in.</Link>
        </p>
      </div>
    </main>
  );
}
