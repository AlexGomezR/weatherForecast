import React, { useState } from "react";
import { Link } from "react-router-dom";

function Formulario() {
  const [hour, setHour] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [resStatus, setResStatus] = useState();
  const [weather, setWeather] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (hour >= 0 && hour <= 23) {
        const response = await fetch(
          `http://localhost:5000/getHours/${hour}/${latitude}/${longitude}`
        );
        let data = await response.json();
        setWeather(data.weather[0].description);
        setResStatus(response.status);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Hora:
          <input
            type="text"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </label>
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
        ) : resStatus === 204 ? (
          <p>No se ha encontrado información del tiempo para esa hora</p>
        ) : (
          <p>Fallo en la llamada, revise la hora introducida</p>
        )
      ) : (
        <p>Introduzca la hora</p>
      )}
      <Link to="/data">
        <button>Ir a la página de data</button>
      </Link>
    </div>
  );
}

export default Formulario;
