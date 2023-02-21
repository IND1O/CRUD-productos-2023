import clienteAxios from "../config/axios";

export const peticionGet = async () => {
  try {
    const response = await clienteAxios.get("/products");
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
