import { useNavigate } from "react-router-dom";
import { Button } from '../Button/Button'
import "./BackButton.scss";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <nav className="back-bar">
      <Button
        label="< BACK"
        parentMethod={() => navigate(-1)}
        variant="back-button" 
      />
    </nav>
  );
};
