import axios from "../../../services/api";

// 🔹 Función para eliminar duplicados por `id`
const removeDuplicates = (phones) => {
  const seen = new Set();
  return phones.filter((phone) => {
    if (seen.has(phone.id)) return false; // Excluir duplicados
    seen.add(phone.id);
    return true;
  });
};

// 🔹 Obtener los primeros 20 teléfonos sin duplicados
export const getPhones = async () => {
  try {
    const response = await axios.get("/products"); // 🔹 Traemos todos los productos
    const uniquePhones = removeDuplicates(response.data).slice(0, 20); // 🔹 Filtramos y tomamos los primeros 20
    return uniquePhones;
  } catch (error) {
    console.error("❌ Error al obtener teléfonos:", error);
    return [];
  }
};


export const getPhoneById = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error al obtener el teléfono por ID:", error);
    throw error;
  }
};
