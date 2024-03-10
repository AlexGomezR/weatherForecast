import React, { useState } from "react";
import { Link } from "react-router-dom";

function Formulario() {
  const [hour, setHour] = useState("");
  const [resStatus, setResStatus] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (hour < 0 || hour > 23) {
        setError("Introduce una hora válida");
      } else {
        setError("");
        const response = await fetch(`http://localhost:5000/getHours/${hour}`);
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
        <button type="submit">Enviar</button>
      </form>
      {resStatus ? (
        resStatus === 200 ? (
          <p>Datos obtenidos correctamente</p>
        ) : (
          <p>Fallo en la llamada, revise la hora introducida</p>
        )
      ) : error ? (
        <p>{error}</p>
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
