import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Data() {
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [resStatus, setResStatus] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setResStatus(0);
      let response = await fetch(
        `http://localhost:5000/api/${latitud}/${longitud}`
      );

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
            value={latitud}
            onChange={(e) => setLatitud(e.target.value)}
          />
        </label>
        <label>
          Longitud:
          <input
            type="text"
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {resStatus ? (
        resStatus === 200 ? (
          <p>Datos obtenidos correctamente</p>
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
