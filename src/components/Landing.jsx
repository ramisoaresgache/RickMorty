import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import landingimagen from "../assets/landingpage.jpg";

function landing() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const originalText =
      "Bienvenidos a las aventuras de Rick and Morty, donde podras ver todos los personajes con su informacion de cada capitulo.";
    const interval = setInterval(() => {
      if (index < originalText.length) {
        setText((prevText) => prevText + originalText.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <section>
        <img src={landingimagen} alt="Imagen" />
        <Link to="/home">
        <button>Ingresar</button>
        </Link>
        <p id="parrafo">
          {text}
        </p>
      </section>
    </>
  );
}
export default landing;
