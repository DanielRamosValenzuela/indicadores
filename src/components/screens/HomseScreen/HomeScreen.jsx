import React, { useEffect, useState } from "react";
import { ModalData } from "../Modals/ModalData";
import { ModalIndicator } from "../Modals/ModalIndicator";
import "./home.scss";

export const HomeScreen = () => {
  const [data, setData] = useState({});
  const [indicadorSelected, setIndicadorSelected] = useState("uf");
  const [indicadorData, setIndicadorData] = useState({});
  const [dataSelected, setDataSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingIndicadores, setLoadingIndicadores] = useState(true);

  const handleClick = (codigo) => {
    setIndicadorSelected(codigo);
  };

  const handleClickData = (codigo) => {
    setDataSelected(codigo);
  };

  const fetchTipoIndicador = async () => {
    await fetch(`https://mindicador.cl/api/${indicadorSelected}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (dailyIndicators) {
        setIndicadorData(dailyIndicators);
      })
      .catch(function (error) {
        console.log("Requestfailed", error);
      });
  };

  const fetchData = async () => {
    await fetch("https://mindicador.cl/api")
      .then(function (response) {
        return response.json();
      })
      .then(function (dailyIndicators) {
        setData(dailyIndicators);
      })
      .catch(function (error) {
        console.log("Requestfailed", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (Object.keys(indicadorData).length > 0) {
      setLoadingIndicadores(false);
    }
  }, [indicadorData]);

  useEffect(() => {
    if (indicadorSelected !== "") {
      fetchTipoIndicador();
    }

    // eslint-disable-next-line
  }, [indicadorSelected]);

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
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead>
              <tr>
                <th scope="col">Indicadores</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(data).map(
                (dat, i) =>
                  // console.log("dat render", dat.nombre !== undefined)
                  dat.nombre !== undefined && (
                    <tr
                      className="list-group-item justify-content-between align-items-center"
                      key={i}
                    >
                      <th className="d-flex justify-content-between">
                        <span
                          onClick={() => handleClick(dat.codigo)}
                          style={{ cursor: "pointer" }}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          {dat.nombre}
                          <p style={{ display: "block", color: "lightblue" }}>
                            {dat.unidad_medida}
                          </p>
                        </span>

                        <img
                          src="assets/excla.png"
                          alt="excla"
                          width="25px"
                          height="25px"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleClickData(dat)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalData"
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
