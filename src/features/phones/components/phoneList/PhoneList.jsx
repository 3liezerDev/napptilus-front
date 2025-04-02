import { useMemo } from "react";
import { PhoneCard } from "../phoneCard/PhoneCard";
import { PHONE_FIELDS } from "../../constants/apiFields";
import "./PhoneList.scss";

const PhoneList = ({ phones, loading }) => {
  // ✅ Memoriza los resultados filtrados para evitar cálculos en cada render
  const memorizedPhones = useMemo(() => phones, [phones]);

  return (
    <div className="phone-list">
      {loading ? (
        <p>Loading phones...</p>
      ) : memorizedPhones.length > 0 ? (
        memorizedPhones.map((phone) => (
          <PhoneCard key={`list-${phone[PHONE_FIELDS.ID]}`} phone={phone} />        ))
      ) : (
        <p>No phones found.</p>
      )}
    </div>
  );
};

export default PhoneList;
