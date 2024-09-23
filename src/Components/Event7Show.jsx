import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import End from "./End";
import "./Event4Show.css"; // Ensure this CSS file is styled correctly
import pic35 from "../Pics/35.webp"; // Verify the image path and optimization

// EventDetails component handles individual event display
const EventDetails = ({ time, reservationUrl, onImageClick }) => (
  <div className={`event${time === "11h" ? 1 : 2}`}>
    <div className={`kebab-case-purple${time === "11h" ? "" : "2"}`}>
      <div className="text-section20">
        <h4>La tournée du facteur</h4>
        <p>Dimanche 6 Octobre 2024</p>
        <p>{time}</p>
        <span>Les jardins partagés d&#39;EntrePotes</span>
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
          src={pic35}
          alt="photo du spectacle facteur"
          onClick={() => onImageClick(pic35)}
          loading="eager" // Use eager loading for immediate display
        />
      </div>
    </div>
  </div>
);

const Event7Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Preload the image to improve performance
  useEffect(() => {
    const img = new Image();
    img.src = pic35;
  }, []);

  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // Event and session IDs
  const eventId = "5afe33ba4eeecdbd75e7776f15987751"; // Correct event ID
  const sessionIdMorning = "10510634"; // Session ID for the 11 AM event on October 6, 2024
  const sessionIdAfternoon = "10510633"; // Session ID for the 4 PM event on October 6, 2024

  // Reservation URLs
  const reservationUrlMorning = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionIdMorning}`;
  const reservationUrlAfternoon = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionIdAfternoon}`;

  return (
    <>
      {/* Morning Event at 11 AM */}
      <EventDetails
        time="11h"
        reservationUrl={reservationUrlMorning}
        onImageClick={handleImageClick}
      />

      {/* Afternoon Event at 4 PM */}
      <EventDetails
        time="16h"
        reservationUrl={reservationUrlAfternoon}
        onImageClick={handleImageClick}
      />

      {/* Enlarged Image Display */}
      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
            <button
              className="close-button"
              onClick={handleCloseImage}
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <End />
    </>
  );
};
EventDetails.propTypes = {
  time: PropTypes.string.isRequired, // Validation de la prop "time" en tant que string
  reservationUrl: PropTypes.string.isRequired, // L'URL de réservation doit être une string
  onImageClick: PropTypes.func.isRequired, // Une fonction doit être fournie pour gérer le clic sur l'image
};

export default Event7Show;
