import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Data() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [resStatus, setResStatus] = useState();
  const [weather, setWeather] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setResStatus(0);
      let response = await fetch(
        `http://localhost:5000/api/${latitude}/${longitude}`
      );
      let data = await response.json();
      console.log(data);
      setWeather(data.daily[0].summary);
      setResStatus(response.status);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Latitud:
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </label>
        <label>
          Longitud:
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {resStatus ? (
        resStatus === 200 ? (
          <p>{weather}</p>
        ) : (
          <p>Fallo en la llamada, revise los datos introducidos</p>
        )
      ) : (
        <p>Introduzca las coordenadas</p>
      )}
      <Link to="/hours">
        <button>Ir a la página de horas</button>
      </Link>
    </div>
  );
}
