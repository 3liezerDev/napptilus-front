import "./Button.scss";


export const Button = ({label, parentMethod}) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
        {label}
    </button>
  )
}
