import { useContext, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (element) => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element);
    }
  };
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      setValidation("");
      navigate("/dashboard");
    } catch {
      setValidation("Oops, email and/or password incorrect.");
    }
  };

  return (
    <main id="auth">
      <section>
        <div>
          <h1>Hey, it's good to see you.</h1>
        </div>
        <form className="" onSubmit={handleSubmit} ref={formRef}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              className=""
              id="email"
              ref={addInputs}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              className=""
              id="password"
              ref={addInputs}
            />
            <p>{validation}</p>
          </div>
          <button type="submit">Sign in</button>
        </form>
      </section>
    </main>
  );
}