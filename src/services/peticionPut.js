import clienteAxios from "../config/axios";

export const peticionPut = async (form) => {
  try {
    const response = await clienteAxios.put(`/products/${form.id}`, form);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
