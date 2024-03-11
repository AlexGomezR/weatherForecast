import React, { useState } from "react";
import { Link } from "react-router-dom";

function Formulario() {
  const [hour, setHour] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [message, setMessage] = useState("Introduzca datos");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (hour >= 0 && hour <= 23 && latitude && longitude) {
        const response = await fetch(
          `http://localhost:5000/getHours/${hour}/${latitude}/${longitude}`
        );
        setLatitude("");
        setLongitude("");
        setHour("");
        if (response.status === 200) {
          let data = await response.json();
          setMessage(data.weather[0].description);
        } else {
          setMessage(
            "No se ha encontrado información del tiempo para esa hora"
          );
        }
      } else {
        setMessage("Error al introducir los datos");
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
      {<p>{message}</p>}
      <Link to="/data">
        <button>Ir a la página de data</button>
      </Link>
    </div>
  );
}

export default Formulario;
