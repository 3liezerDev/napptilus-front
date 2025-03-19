import { usePhones } from "../../hooks/usePhones";
import { PhoneCard } from "../phoneCard/PhoneCard";
import { PHONE_FIELDS } from "../../../phones/constants/apiFields"; // 🔹 Importamos los campos
import "./PhoneList.scss";

const PhoneList = () => {
  const { phones, loading } = usePhones();

  return (
    <div className="phone-list">
      {loading ? (
        <p>Cargando teléfonos...</p>
      ) : phones.length > 0 ? (
        phones.map((phone) => (
          <PhoneCard key={phone[PHONE_FIELDS.ID]} phone={phone} /> // 🔹 Usamos apiFields.ID
        ))
      ) : (
        <p>No hay teléfonos disponibles.</p>
      )}
    </div>
  );
};

export default PhoneList;
