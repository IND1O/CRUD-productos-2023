import { useState, useEffect } from "react";
import TablaContext from "./TablaContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { peticionGet } from "../services/peticionGet";
import { peticionPost } from "../services/peticionPost";
import { peticionPut } from "../services/peticionPut";
//import { peticionDel } from "../services/peticionDel";

const TablaProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState("");

  const mySwal = withReactContent(Swal);

  const form = { id, name, description, price };

  const leerProductos = () => {
    peticionGet().then((res) => {
      //console.log("PETICION GET ==>", res);
      if (res.status === 200) {
        setProducts(res.data);
      } else {
        mySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error de conexión con la base de datos!",
        });
      }
    });
  };

  useEffect(() => {
    leerProductos();
    // eslint-disable-next-line
  }, []);

  const openModal = (op, id, name, description, price) => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setOperation(op);
    if (op === 1) {
      setTitle("Registrar Producto");
    } else if (op === 2) {
      setTitle("Editar Producto");
      setId(id);
      setName(name);
      setDescription(description);
      setPrice(price);
    }
    window.setTimeout(function () {
      document.getElementById("nombre").focus();
    }, 500);
  };

  const agregarProducto = () => {
    if (name.trim() === "" || description.trim() === "" || price === "") {
      mySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
    } else {
      peticionPost(form).then((res) => {
        //console.log("PETICION POST ==>", res.data);
        if (res.status === 201) {
          setProducts([...products, res.data]);
          mySwal.fire({
            icon: "success",
            title: "Exito",
            text: `El registro de: "${name}" se creo exitosamente"`,
          });
        } else {
          mySwal.fire({
            icon: "error",
            title: "ERROR",
            text: "No se pudo guardar el producto",
          });
        }
      });
      document.getElementById("btncerrar").click();
    }
  };

  const editarProducto = () => {
    if (name.trim() === "" || description.trim() === "" || price === "") {
      mySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
    } else {
      peticionPut(form).then((res) => {
        //console.log("PETICION PUT ==>", res.data);
        if (res.status === 200) {
          const respuesta = products.map((elem) =>
            elem.id === form.id ? form : elem
          );
          setProducts(respuesta);
          mySwal.fire({
            icon: "success",
            title: "Exito",
            text: `El registro de: "${name}" se actualizo exitosamente"`,
          });
        } else {
          mySwal.fire({
            icon: "error",
            title: "ERROR",
            text: "No se pudo actualizar el producto",
          });
        }
      });
      document.getElementById("btncerrar").click();
    }
  };

  const mandarFormulario = () => {
    //console.log("form.id ==>", form.id);
    if (form.id === "") {
      agregarProducto(form);
    } else {
      editarProducto(form);
    }
  };

  return (
    <TablaContext.Provider
      value={{
        form,
        products,
        setProducts,
        id,
        setId,
        name,
        setName,
        description,
        setDescription,
        price,
        setPrice,
        operation,
        setOperation,
        title,
        setTitle,
        openModal,
        mySwal,
        mandarFormulario,
      }}
    >
      {children}
    </TablaContext.Provider>
  );
};

export { TablaProvider };
