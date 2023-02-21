import { useContext } from "react";
import TablaContext from "../context/TablaContext";

const ModalProd = () => {
  const {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    title,
    mandarFormulario,
  } = useContext(TablaContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    mandarFormulario();
  };

  return (
    <div id="modalProducts" className="modal fade" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <label className="h5">{title}</label>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <input type="hidden" id="id"></input>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-gift"></i>
              </span>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-comment"></i>
              </span>
              <input
                type="text"
                id="descripcion"
                className="form-control"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
              <input
                type="text"
                id="precio"
                className="form-control"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div className="d-grid col-6 mx-auto">
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa-solid fa-floppy-disk"></i> Guardar
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              id="btncerrar"
              className="btn btn-secondary"
              type="button"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProd;
