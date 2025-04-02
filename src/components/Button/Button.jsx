import "./Button.scss";

export const Button = ({ label, parentMethod, disabled }) => {
  return (
    <button className="custom-button" onClick={parentMethod} disabled={disabled}>
      {label}
    </button>
  );
};