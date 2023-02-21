import { useContext } from "react";
import TablaContext from "../context/TablaContext";
import ModalProd from "./ModalProd";
import TablaProdRow from "./TablaProdRow";

const TablaProd = () => {
  const { products, openModal } = useContext(TablaContext);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="d-grid mx-auto">
                <button
                  onClick={() => openModal(1)}
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#modalProducts"
                >
                  <i className="fa-solid fa-circle-plus"></i> Añadir
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
              <div className="table-responsive">
                <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>PRODUCTO</th>
                        <th>DESCRIPCION</th>
                        <th>PRECIO</th>
                        <th>ACCIONES</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                      {products.length === 0 ? (
                        <tr>
                          <td colSpan={4}>Tabla Sin Datos</td>
                        </tr>
                      ) : (
                        products.map((product) => (
                          <TablaProdRow
                            key={product.id}
                            product={product}
                            openModal={openModal}
                          />
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalProd />
    </div>
  );
};

export default TablaProd;
