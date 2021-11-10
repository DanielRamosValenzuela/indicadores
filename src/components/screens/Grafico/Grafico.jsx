import React from "react";
import "./grafico.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import moment from "moment";

export const Grafico = ({
  data,
  handleSelect,
  indicadorData,
  loading,
  loadingIndicadores,
  indicadorSelected,
}) => {
  const newIndicadorData = indicadorData.serie.map((indicador) => {
    return {
      fecha: moment(indicador.fecha).format("MM-DD"),
      valor: indicador.valor,
    };
  });

  return (
    <>
      {!loading && !loadingIndicadores && (
        <div className="grafico">
          <div className="selectContainer text-center">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(value) => handleSelect(value)}
              value={indicadorSelected}
            >
              {Object.values(data).map(
                (dat, i) =>
                  dat.nombre !== undefined && (
                    <option key={i} value={dat.codigo}>
                      {dat.nombre}
                    </option>
                  )
              )}
            </select>
          </div>
          <div className="graficLine">
            <LineChart width={1000} height={600} data={newIndicadorData}>
              <Line type="monotone" dataKey="valor" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis
                dataKey={"fecha"}
                tick={moment(indicadorData.serie.fecha).format("YYYY-MM-DD")}
              />
              <YAxis />
            </LineChart>
          </div>
        </div>
      )}
    </>
  );
};
