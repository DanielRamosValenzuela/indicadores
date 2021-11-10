import React from "react";
import { ModalData } from "../Modals/ModalData";
import { ModalIndicator } from "../Modals/ModalIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./home.scss";

export const HomeScreen = ({
  loadingIndicadores,
  loading,
  handleClickData,
  data,
  indicadorData,
  indicadorSelected,
  dataSelected,
  handleClick,
}) => {
  return (
    <>
      {!loadingIndicadores && (
        <ModalIndicator
          indicadorData={indicadorData}
          indicadorSelected={indicadorSelected}
        />
      )}
      <ModalData dataSelected={dataSelected} />

      {!loading && !loadingIndicadores && (
        <div className="table-responsive homescreen">
          <h5 className="title">Indicadores</h5>
          <table className="table table-bordered align-middle">
            <tbody>
              {Object.values(data).map(
                (dat, i) =>
                  dat.nombre !== undefined && (
                    <tr
                      className="list-group-item justify-content-between align-items-center"
                      key={i}
                    >
                      <th className="d-flex justify-content-between text">
                        <span
                          onClick={() => handleClick(dat.codigo)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          {dat.nombre}
                          <p>{dat.unidad_medida}</p>
                        </span>

                        <FontAwesomeIcon
                          icon={faEye}
                          className="exclamation"
                          onClick={() => handleClickData(dat)}
                          width="25px"
                          height="25px"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalData"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Fechas anteriores"
                        />
                      </th>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
