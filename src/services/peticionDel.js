import clienteAxios from "../config/axios";

export const peticionDel = async (id) => {
  try {
    const response = await clienteAxios.delete(`/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
