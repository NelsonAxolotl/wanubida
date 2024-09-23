import { useState, useCallback, useEffect } from "react";
import "./Event1Show.css";
import End from "../Components/End";
import pic5 from "../Pics/5.webp"; // Ensure this image is optimized

const Event1Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Preload the image when the component mounts to improve perceived loading speed
  useEffect(() => {
    const img = new Image();
    img.src = pic5;
  }, []);

  const handleImageClick = useCallback(() => {
    setEnlargedImage(pic5);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  const eventId = "5afe33ba4eeecdbd75e7776f15987751";
  const sessionId = "10510627";

  const reservationUrl = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionId}`;

  return (
    <>
      <div className="event30">
        <div className="kebab-case-green">
          <div className="text-section30">
            <h4>La tournée du facteur</h4>
            <h5 className="diagonal-text">Première</h5>
            <p>Vendredi 27 septembre 2024</p>
            <p>19h</p>
            <span>Les jardins partagés d&#39;EntrePote</span>
            <span>99 Rue de Clermont</span>
            <span>42300 Roanne</span>
            <a
              href={reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Réserver
            </a>
          </div>
          <div className="frame1">
            <img
              src={pic5}
              alt="photo du spectacle la tournée du facteur"
              onClick={() => handleImageClick(pic5)}
              loading="eager"
              className="main-image"
            />
          </div>
        </div>
      </div>
      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
            <button className="close-button" onClick={handleCloseImage}>
              ×
            </button>
          </div>
        </div>
      )}
      <End />
    </>
  );
};

export default Event1Show;
