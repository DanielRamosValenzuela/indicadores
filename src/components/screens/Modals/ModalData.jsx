import React from "react";
import moment from "moment";

export const ModalData = ({ dataSelected }) => {
  const symbolUM = (symbolo) => {
    let letra = "";
    switch (symbolo) {
      case "Pesos":
        letra = "$";
        break;
      case "Dólar":
        letra = "US$";
        break;

      case "Porcentaje":
        letra = "%";
        break;

      default:
        break;
    }
    return letra;
  };

  return (
    <div
      className="modal fade"
      id="exampleModalData"
      tabIndex="-1"
      aria-labelledby="exampleModalDataLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalDataLabel">
              {dataSelected.nombre}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <span className="text-center">
              <strong style={{ color: "#021691", fontSize: "24px" }}>
                {symbolUM(dataSelected.unidad_medida) +
                  " " +
                  dataSelected.valor}
              </strong>
            </span>
            <ol className="list-group">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <p>Nombre</p>
                  {dataSelected.nombre}
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <p>Fecha</p>
                  {moment(dataSelected.fecha).format("YYYY-MM-DD")}
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <p>Unidad de medida</p>
                  <p>{dataSelected.unidad_medida}</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
