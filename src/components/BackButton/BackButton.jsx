import { useNavigate } from "react-router-dom";
import "./BackButton.scss";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <nav className="back-bar">
      <button className="back-button" onClick={() => navigate(-1)}>
        &lt;  BACK
      </button>
    </nav>
  );
};
