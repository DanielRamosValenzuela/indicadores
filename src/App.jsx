import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { HomeScreen } from "./components/screens/HomseScreen/HomeScreen";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Grafico } from "./components/screens/Grafico/Grafico";
import "./app.scss";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState({});
  const [indicadorSelected, setIndicadorSelected] = useState("bitcoin");
  const [indicadorData, setIndicadorData] = useState({});
  const [dataSelected, setDataSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingIndicadores, setLoadingIndicadores] = useState(true);

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
  const handleClick = (codigo) => {
    setIndicadorSelected(codigo);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setIndicadorSelected(e.target.value);
  };

  const handleClickData = (codigo) => {
    setDataSelected(codigo);
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
      {!loading && !loadingIndicadores && (
        <div className="app">
          <Router>
            <header>
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </header>

            <section className="sections">
              <Switch>
                <Route path="/" exact>
                  <HomeScreen
                    loadingIndicadores={loadingIndicadores}
                    loading={loading}
                    handleClickData={handleClickData}
                    data={data}
                    indicadorData={indicadorData}
                    indicadorSelected={indicadorSelected}
                    dataSelected={dataSelected}
                    handleClick={handleClick}
                  />
                </Route>
                <Route path="/grafico" exact>
                  <Grafico
                    data={data}
                    indicadorData={indicadorData}
                    handleSelect={handleSelect}
                    indicadorSelected={indicadorSelected}
                    loading={loading}
                    loadingIndicadores={loadingIndicadores}
                  />
                </Route>
                <Redirect to="/" />
              </Switch>
            </section>
          </Router>
        </div>
      )}
    </>
  );
};
