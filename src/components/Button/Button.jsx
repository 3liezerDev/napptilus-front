import "./Button.scss";

export const Button = ({ label, parentMethod, disabled, variant = "" }) => {
  return (
    <button
      className={`custom-button ${variant}`}
      onClick={parentMethod}
      disabled={disabled}
    >
      {label}
    </button>
  );
};