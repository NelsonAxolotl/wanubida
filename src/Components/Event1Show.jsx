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

            <p>Vendredi 18 avril 2025</p>
            <p>20h</p>
            <span>La Mal Lunée</span>
            <span>6 route d'Omans</span>
            <span>25440 Quingey</span>
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
