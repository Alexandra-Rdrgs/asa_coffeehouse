export default function Button({ type, classname, text }) {
  return (
    <div className="button_container">
      <button type={type} className={classname}>
        <span>{text}</span>
      </button>
    </div>
  );
}
