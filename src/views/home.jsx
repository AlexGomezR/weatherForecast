import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Página principal</h1>
      <p>Esta es la página principal de tu aplicación.</p>
      <Link to="/data">
        <button>Coordenadas</button>
      </Link>
      <Link to="/hours">
        <button>Coordenadas + hora</button>
      </Link>
    </div>
  );
}

export default Home;
