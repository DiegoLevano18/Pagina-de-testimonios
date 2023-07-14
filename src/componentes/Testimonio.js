import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
    return (
      <div className="contenedor-testimonio">
        <img 
          className="imagen-testigo"
          src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
          alt="Foto de Shawn"/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><b>{props.nombre}</b> en {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
      </div>
    );
};

export default Testimonio;

//Hola, disculpa, una pregunta, soy del segundo grupo, lo que debo hacer ahora solo consiste en los trabajos (ejemplos) de los tutoriales de react?, porque a aparte de ese, no se me ha comunicado nada más sobre que se debe hacer o realizar