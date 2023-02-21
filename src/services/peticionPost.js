import clienteAxios from "../config/axios";

export const peticionPost = async (form) => {
  try {
    const response = await clienteAxios.post("/products", form);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
