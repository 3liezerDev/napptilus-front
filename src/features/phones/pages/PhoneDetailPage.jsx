// PhoneDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhoneById } from "../services/phonesApi";
import PhoneDetail from "../components/phoneDetail/PhoneDetail";
import { BackButton } from "../../../components/BackButton/BackButton";
import { motion } from "framer-motion";

const pageTransition = {
  type: "spring",
  mass: 1,
  stiffness: 80,
  damping: 20,
};

const PhoneDetailPage = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const data = await getPhoneById(id);
        setPhone(data);
      } catch (err) {
        setError("No se pudo cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhone();
  }, [id]);

  return (
    <motion.div
      className="phone-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >
      <BackButton />
      {loading}
      {error && <p>{error}</p>}
      {!loading && !error && phone && <PhoneDetail phone={phone} />}
    </motion.div>
  );
};

export default PhoneDetailPage;
