import React from "react";
import moment from "moment";

export const ModalIndicator = ({ indicadorData, indicadorSelected }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header">
            {indicadorData.codigo === indicadorSelected ? (
              <h5 className="modal-title" id="exampleModalLabel">
                {indicadorData.nombre}
              </h5>
            ) : (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Cargado...
              </button>
            )}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {indicadorData.codigo === indicadorSelected ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "dodgerblue" }}>
                      Fecha
                    </th>
                    <th scope="col" style={{ color: "dodgerblue" }}>
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {indicadorData.serie.map((dat, i) => (
                    <tr key={i}>
                      <td>
                        <span>{moment(dat.fecha).format("YYYY-MM-DD")}</span>
                      </td>
                      <td key={"col2" + i}>
                        <span>{dat.valor}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="justify-content-center text-center d-flex">
                <div
                  className="spinner-grow text-info"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                >
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
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
