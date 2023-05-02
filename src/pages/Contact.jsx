import { useState, useRef } from "react";
import { db } from "/firebase-config";
import { addDoc, collection } from "firebase/firestore";
export default function Contact() {
  const [validation, setValidation] = useState("");
  const contactRef = collection(db, "contact_data");

  const inputs = useRef([]);
  const addInputs = (element) => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element);
    }
  };
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputs.current[0].value.length < 3) {
      setValidation("Your firstname must be at least 3 characters long.");
      return;
    }
    if (inputs.current[1].value.length < 3) {
      setValidation("Your lastname must be at least 3 characters long.");
      return;
    }
    if (inputs.current[2].value.length < 10) {
      setValidation("Your email must be at least 3 characters long.");
      return;
    }
    if (inputs.current[3].value.length < 50) {
      setValidation("Your message must be at least 50 characters long.");
      return;
    }
    try {
      addDoc(contactRef, {
        firstname: inputs.current[0].value,
        lastname: inputs.current[1].value,
        email: inputs.current[2].value,
        message: inputs.current[3].value,
        createdAt: new Date(),
      });
      formRef.current.reset();
      setValidation("");
    } catch (error) {
      if (error.code === "store/permission-denied") {
        setValidation("Permission denied.");
      }
      if (error.code === "store/unknown") {
        setValidation("Unknown error.");
      } else {
        setValidation(
          "Something went wrong, please refresh the page and try again."
        );
      }
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name">Firstname</label>
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          className=""
          id="email"
          ref={addInputs}
        />
        <label htmlFor="message">Message</label>
        <textarea
          required
          id="message"
          name="message"
          ref={addInputs}
        ></textarea>
        <p>{validation}</p>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
