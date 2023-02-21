import React, { useContext } from "react";
import TablaContext from "../context/TablaContext";

import { peticionDel } from "../services/peticionDel";

const TablaProdRow = ({ product, openModal }) => {
  const { name, price, description, id } = product;

  const { mySwal, products, setProducts } = useContext(TablaContext);

  const borrarProducto = () => {
    mySwal
      .fire({
        title: `¿Seguro que desea eliminar el producto: ${name} ?`,
        icon: "question",
        text: "no se podrá dar marcha atrás",
        showCancelButton: true,
        confirmButtonText: "si, eliminar",
        cancelButtonText: "cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          peticionDel(id).then((res) => {
            //console.log("ID ==>", id);
            //console.log("PETICION DELETE ==>", res.data);
            if (res.status === 200) {
              const borrar = products.filter((elem) => elem.id !== id);
              setProducts(borrar);

              mySwal.fire({
                icon: "success",
                title: "Exito",
                text: `El registro de: "${name}" se Borro exitosamente"`,
              });
            } else {
              mySwal.fire({
                icon: "error",
                title: "ERROR",
                text: "No se pudo eliminar el producto",
              });
            }
          });
        }
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    borrarProducto();
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>ARS $ {Intl.NumberFormat("es-ar").format(price)}</td>
      <td>
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalProducts"
          className="btn btn-warning"
          onClick={() =>
            openModal(
              2,
              product.id,
              product.name,
              product.description,
              product.price
            )
          }
        >
          <i className="fa-solid fa-edit"></i>
        </button>
        &nbsp;
        <button className="btn btn-danger" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TablaProdRow;
