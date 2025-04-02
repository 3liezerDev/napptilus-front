import { useParams } from "react-router-dom";
import { usePhoneById } from "../../phones/hooks/usePhonById";
import { motion } from "framer-motion";
import PhoneDetail from "../components/phoneDetail/PhoneDetail";
import { BackButton } from "../../../components/BackButton/BackButton";

const pageTransition = {
  type: "spring",
  mass: 1,
  stiffness: 80,
  damping: 20,
};

const PhoneDetailPage = () => {
  const { id } = useParams();
  const { data: phone, isLoading, isError } = usePhoneById(id);

  return (
    <motion.div
      className="phone-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >
      <BackButton />
      {isLoading}
      {isError && <p>❌ No se pudo cargar el producto.</p>}
      {phone && <PhoneDetail phone={phone} />}
    </motion.div>
  );
};

export default PhoneDetailPage;
