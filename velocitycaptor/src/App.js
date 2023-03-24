import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [vitesse, setMessage] = useState("");

  useEffect(() => {
    fetch("http://172.20.10.2:8000/affichage")
      .then((res) => res.json())
      .then((data) => setMessage(data.vitesse));
  }, []);

  return (
    <div className="App">
      <h1>Capteur de vitesse</h1>
      <h2>Appuyez sur le bouton</h2>
      <h3 className="red">ROUGE : Attendre le départ </h3>
      <h3 className="blue">BLEU : Placez vous devant le capteur et préparez-vous départ imminent ! </h3>
      <h3 className="green">VERT : Déplacez l'objet en restant dans la ligne de mire du capteur et restez en place jusqu'à ce qu'il s'éteigne</h3>
      <h2>Rechargez la page</h2>
      <h1>Vous avez été flashé à : {vitesse} cm/s.</h1>
    </div>
  );
}

export default App